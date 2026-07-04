"""
DeepVault Note Converter
Reads all .md notes from all vault folders recursively,
strips YAML frontmatter, JSON-encodes them,
and rebuilds data.js completely.

Usage: python convert.py
"""

import json, os, re, subprocess, sys

VAULT = r"C:\Users\sofia\Documents\Obsidian\Game Development"
OUTPUT_DIR = r"D:\User\Desktop\DeepVault\data"
OUTPUT = r"D:\User\Desktop\DeepVault\js\data.js"  # Legacy — build.py generates this

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
    
    # Read DeepVault Guide from static file (never from previous build — avoids corruption)
    old_guide = ''
    guide_file = r'D:\User\Desktop\DeepVault\guide-content.txt'
    if os.path.exists(guide_file):
        with open(guide_file, 'r', encoding='utf-8') as f:
            old_guide = f.read()

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
        
        # POST-PROCESSING: Rebuild root group from scratch.
        # Only notes NOT in any subfolder belong in root.
        all_sub_notes = set()
        for section, note_list in group.items():
            if section:
                for n in note_list:
                    all_sub_notes.add(n)
        root_only = [n for n in group.get('', []) if n not in all_sub_notes]
        if root_only:
            group[''] = root_only
        elif '' in group:
            del group['']
        
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
        lines.append(f"  '{name}': {{\ntitle: \"{name}\",\nfolder: \"{obj['folder']}\",\ncontent: {json.dumps(obj['content'])}\n  }},")
    lines.append('};\n')
    
    # REFERENCE
    lines.append('const REFERENCE = {')
    for rn, rc in reference.items():
        lines.append(f"  '{rn}': {json.dumps(rc)},")
    lines.append(f"  'DeepVault Guide': {json.dumps(old_guide)},")
    lines.append('};\n')
    
    output = '\n'.join(lines)
    
    # FINAL FIX: Deduplicate root groups in output
    import re as re2
    def fix_root(match):
        full = match.group(0)
        # Find the root entry (empty string key) and subfolder entries
        root_m = re2.search(r"'':\s*\[(.*?)\]", full, re2.DOTALL)
        if not root_m: return full
        root_notes_raw = root_m.group(1)
        root_notes = set(re2.findall(r"'([^']+)'", root_notes_raw))
        # Collect all subfolder notes
        sub_notes = set()
        for sm in re2.finditer(r"'([^']+)':\s*\[(.*?)\]", full, re2.DOTALL):
            key = sm.group(1)
            if not key: continue  # skip root
            notes = re2.findall(r"'([^']+)'", sm.group(2))
            for n in notes:
                sub_notes.add(n)
        # Remove subfolder notes from root
        clean_root = [n for n in root_notes if n not in sub_notes]
        new_root_str = ', '.join(f"'{n}'" for n in clean_root)
        return full.replace(root_m.group(0), f"'': [{new_root_str}]")
    
    output = re2.sub(r"'(?:computer-systems|cpp-fundamentals|game-math|ue-core)':\s*\{[^}]+\}", fix_root, output, flags=re2.DOTALL)

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
    
    
    # Preserve existing quizzes
    try:
        with open(OUTPUT, 'r', encoding='utf-8') as f:
            old = f.read()
        qn = old.find('const QUIZ_NOTES = {')
        qd = old.find('const QUIZ_DATA = {')
        ref = old.find('const REFERENCE')
        if qn > 0 and qn < (ref if ref > 0 else len(old)):
            quiz_block = old[qn:ref if ref > 0 else len(old)]
            # Strip trailing whitespace/newlines
            quiz_block = quiz_block.rstrip()
            if quiz_block:
                # Insert before REFERENCE
                ref_pos = output.find('const REFERENCE')
                if ref_pos > 0:
                    output = output[:ref_pos] + quiz_block + '\n\n' + output[ref_pos:]
    except:
        pass
    # Write data files
    import json as json2
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Extract quizzes from data.js if exists
    old_quizzes = {'quizzes': {}, 'quiz_notes': {}}
    if os.path.exists(OUTPUT):
        with open(OUTPUT, 'r', encoding='utf-8') as f:
            old_data = f.read()
        ref_pos = old_data.find('const REFERENCE')
        if ref_pos > 0:
            import re as re3
            for m in re3.finditer(r"QUIZ_DATA\['([^']+)'\] = (\{.*?\});", old_data[:ref_pos], re3.DOTALL):
                try: old_quizzes['quizzes'][m.group(1)] = json2.loads(m.group(2))
                except: pass
            qn = old_data.find('const QUIZ_NOTES = {')
            if qn > 0:
                qn_end = old_data.find('\n};\n', qn) + 4
                for m in re3.finditer(r"'([^']+)':\s*\[(.*?)\]", old_data[qn:qn_end], re3.DOTALL):
                    notes = re3.findall(r"'([^']+)'", m.group(2))
                    old_quizzes['quiz_notes'][m.group(1)] = notes
    
    # Build notes.json
    notes_out = {}
    for name, obj in notes_content.items():
        notes_out[name] = {'content': obj['content'], 'folder': obj['folder']}
    with open(os.path.join(OUTPUT_DIR, 'notes.json'), 'w', encoding='utf-8') as f:
        json2.dump(notes_out, f, indent=2)
    
    # Build folders.json
    with open(os.path.join(OUTPUT_DIR, 'folders.json'), 'w', encoding='utf-8') as f:
        json2.dump(folder_groups, f, indent=2)
    
    # Build reference.json
    ref_out = {}
    for rn, rc in reference.items():
        ref_out[rn] = rc
    with open(os.path.join(OUTPUT_DIR, 'reference.json'), 'w', encoding='utf-8') as f:
        json2.dump(ref_out, f, indent=2)
    
    # Preserve existing quizzes
    quiz_path = os.path.join(OUTPUT_DIR, 'quizzes.json')
    if not os.path.exists(quiz_path):
        with open(quiz_path, 'w', encoding='utf-8') as f:
            json2.dump(old_quizzes, f, indent=2)
    
    # Run build.py
    r = subprocess.run(['python', os.path.join(os.path.dirname(OUTPUT_DIR), 'build.py')], capture_output=True, text=True)
    if r.returncode != 0:
        print(f"build.py FAILED:\n{r.stderr[-600:]}")
        sys.exit(1)
    print(r.stdout.strip())
    print(f"Done. {len(notes_content)} notes converted.")
    for fid, _, _, _, _ in FOLDER_MAP:
        print(f"  {fid}: {len(notes_flat[fid])} notes, {len(quiz_notes[fid])} quizzes, {len(groups[fid])} groups")

if __name__ == '__main__':
    main()
