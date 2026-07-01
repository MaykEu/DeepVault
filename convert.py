"""
DeepVault Note Converter
Reads all .md notes from all vault folders recursively,
strips YAML frontmatter, JSON-encodes them,
and rebuilds data.js completely.

Usage: python convert.py
"""

import json, os, re, subprocess, sys

VAULT = r"C:\Users\sofia\iCloudDrive\iCloud~md~obsidian\Game Development"
OUTPUT = r"D:\User\Desktop\DeepVault\js\data.js"

FOLDER_MAP = [
    ('computer-systems', 'Computer Systems', 'Computer Systems', '\U0001F5A5\uFE0F', '#58a6ff'),
    ('cpp-fundamentals', 'C++ Fundamentals', 'C++ Fundamentals', '\u2699\uFE0F', '#f0883e'),
    ('game-math', 'Game Math', 'Game Math', '\U0001F3AE', '#3fb950'),
    ('ue-core', 'Unreal Engine Core', 'UE Core', '\U0001F527', '#bc8cff'),
    ('ue-networking', 'Unreal Engine Networking', 'UE Networking', '\U0001F310', '#f85149'),
    ('big-o', 'Algorithms & Complexity', 'Big O Notation', '\U0001F4CA', '#d2991d'),
]

SKIP = {
    'Learning Path.md', 'Glossary.md',
    'From Transistor to Running Program.md',
    'From Source to Running Program \u2014 C++ Edition.md',
    'From UCLASS to Running Object \u2014 The UE Core Pipeline.md',
    'From Input to Replication \u2014 The Networking Pipeline.md',
    'From Trigonometry to 3D Transformations.md',
}

def read_note(path):
    with open(path, 'r', encoding='utf-8') as f:
        return re.sub(r'^---\n.*?\n---\n\n', '', f.read(), flags=re.DOTALL).strip()

def main():
    # Read existing data.js for quiz preservation
    old = ''
    if os.path.exists(OUTPUT):
        with open(OUTPUT, 'r', encoding='utf-8') as f:
            old = f.read()
    
    # Preserve existing quizzes and DeepVault Guide
    old_quizzes = {}
    for m in re.finditer(r"QUIZ_DATA\['([^']+)'\]\s*=\s*(\{[\s\S]*?\n\});", old):
        old_quizzes[m.group(1)] = m.group(2)
    
    # Extract DeepVault Guide from old data
    old_guide = ''
    idx = old.find("'DeepVault Guide':")
    if idx >= 0:
        start = old.find('"', idx) + 1
        i = start
        while i < len(old):
            if old[i] == '\\': i += 2; continue
            if old[i] == '"':
                end = i
                break
            i += 1
        old_guide = old[start:end]

    # Scan all folders recursively
    notes_content = {}
    groups = {}
    notes_flat = {}
    
    for fid, dname, vfolder, icon, color in FOLDER_MAP:
        path = os.path.join(VAULT, vfolder)
        group = {}
        
        for root, dirs, files in os.walk(path):
            dirs[:] = [d for d in dirs if d.upper() != 'ANKI' and d != '.obsidian']
            rel = os.path.relpath(root, path).replace('\\', '/')
            if rel == '.': rel = ''
            
            for f in sorted(files):
                if not f.endswith('.md') or f in SKIP: continue
                name = f.replace('.md', '')
                content = read_note(os.path.join(root, f))
                notes_content[name] = {'content': content, 'folder': fid, 'section': rel}
                group.setdefault(rel, []).append(name)
        
        groups[fid] = group
        # Flat list: root first, then alphabetically
        flat = group.get('', [])
        for s in sorted(k for k in group if k):
            flat.extend(group[s])
        notes_flat[fid] = flat
    
    # Reference notes
    reference = {}
    for _, _, vfolder, _, _ in FOLDER_MAP:
        for ref_name, ref_file in [('Glossary', 'Glossary.md'), ('Learning Path', 'Learning Path.md')]:
            p = os.path.join(VAULT, vfolder, ref_file)
            if os.path.exists(p) and ref_name not in reference:
                reference[ref_name] = read_note(p)
    
    # Quiz data: preserve only quizzes for existing notes
    quizzes = {}
    for name, body in old_quizzes.items():
        if name in notes_content:
            quizzes[name] = body
    
    # Quiz notes lists
    quiz_notes = {}
    for fid, _, _, _, _ in FOLDER_MAP:
        quiz_notes[fid] = [n for n in notes_flat[fid] if n in quizzes]
    
    # Build output
    lines = []
    
    # FOLDERS
    lines.append('const FOLDERS = [')
    for fid, dname, _, icon, color in FOLDER_MAP:
        lines.append(f"  {{ id: '{fid}', name: '{dname}', icon: '{icon}', color: '{color}' }},")
    lines.append('];\n')
    
    # FOLDER_GROUPS
    lines.append('const FOLDER_GROUPS = {')
    for fid, _, _, _, _ in FOLDER_MAP:
        lines.append(f"  '{fid}': {{")
        for section, note_list in groups[fid].items():
            nl = ', '.join(f"'{n}'" for n in note_list)
            lines.append(f"    '{section}': [{nl}],")
        lines.append('  },')
    lines.append('};\n')
    
    # NOTES
    lines.append('const NOTES = {')
    for fid, _, _, _, _ in FOLDER_MAP:
        nl = ', '.join(f"'{n}'" for n in notes_flat[fid])
        lines.append(f"  '{fid}': [{nl}],")
    lines.append('};\n')
    
    # QUIZ_NOTES
    lines.append('const QUIZ_NOTES = {')
    for fid, _, _, _, _ in FOLDER_MAP:
        nl = ', '.join(f"'{n}'" for n in quiz_notes[fid])
        lines.append(f"  '{fid}': [{nl}],")
    lines.append('};\n')
    
    # QUIZ_DATA
    lines.append('const QUIZ_DATA = {};\n')
    for name, body in quizzes.items():
        lines.append(f"QUIZ_DATA['{name}'] = {body};\n")
    
    # NOTES_CONTENT
    lines.append('const NOTES_CONTENT = {')
    for name, obj in notes_content.items():
        lines.append(f"  '{name}': {{\n    title: \"{name}\",\n    folder: \"{obj['folder']}\",\n    content: {json.dumps(obj['content'])}\n  }},")
    lines.append('};\n')
    
    # REFERENCE
    lines.append('const REFERENCE = {')
    for rn, rc in reference.items():
        lines.append(f"  '{rn}': {json.dumps(rc)},")
    lines.append(f"  'DeepVault Guide': {json.dumps(old_guide)},")
    lines.append('};\n')
    
    output = '\n'.join(lines)
    
    # Validate
    tmp = 'D:/temp_dv_validate.js'
    with open(tmp, 'w', encoding='utf-8') as f:
        f.write(output)
    r = subprocess.run(['node', '-c', tmp], capture_output=True)
    if r.returncode != 0:
        print(f"SYNTAX ERROR:\n{r.stderr.decode()[:600]}")
        os.remove(tmp)
        sys.exit(1)
    os.remove(tmp)
    
    # Write
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"Done. {len(output)} bytes, {len(notes_content)} notes, {len(quizzes)} quizzes")
    for fid, _, _, _, _ in FOLDER_MAP:
        print(f"  {fid}: {len(notes_flat[fid])} notes, {len(quiz_notes[fid])} quizzes, {len(groups[fid])} groups")

if __name__ == '__main__':
    main()
