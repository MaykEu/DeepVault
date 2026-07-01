"""
DeepVault Note Converter — Multi-Folder
Reads all .md notes from all vault folders, strips YAML frontmatter,
JSON-encodes them, and embeds into data.js.

Usage: python convert.py
"""

import json, os, re, sys, subprocess

VAULT_ROOT = r"C:\Users\sofia\iCloudDrive\iCloud~md~obsidian\Game Development"
DATA_JS_PATH = r"D:\User\Desktop\DeepVault\js\data.js"

FOLDERS = {
    'computer-systems': {
        'path': 'Computer Systems',
        'skip': {'From Transistor to Running Program.md'},
        'ref': {'Glossary', 'Learning Path'},
    },
    'cpp-fundamentals': {
        'path': 'C++ Fundamentals',
        'skip': set(),
        'ref': set(),
    },
    'game-math': {
        'path': 'Game Math',
        'skip': set(),
        'ref': set(),
    },
    'ue-core': {
        'path': 'UE Core',
        'skip': set(),
        'ref': set(),
    },
    'ue-networking': {
        'path': 'UE Networking',
        'skip': set(),
        'ref': set(),
    },
    'big-o': {
        'path': 'Big O Notation',
        'skip': set(),
        'ref': set(),
    },
}

def read_note(path):
    with open(path, 'r', encoding='utf-8') as f:
        raw = f.read()
    lines = raw.split('\n')
    if lines and lines[0].strip() == '---':
        try:
            end = lines.index('---', 1)
            return '\n'.join(lines[end+1:]).lstrip('\n')
        except ValueError:
            pass
    return raw

def main():
    all_notes = {}  # key -> {title, content, folder}
    ref_notes = {}  # key -> content

    # Walk all folders recursively
    for folder_id, cfg in FOLDERS.items():
        folder_path = os.path.join(VAULT_ROOT, cfg['path'])
        print(f"\n{folder_id}:")
        for root, dirs, files in os.walk(folder_path):
            # Skip ANKI directories
            dirs[:] = [d for d in dirs if d != "ANKI"]
            for fname in sorted(files):
                if not fname.endswith('.md'): continue
                if fname in cfg['skip']: continue
                path = os.path.join(root, fname)
                name = fname.replace('.md', '')
                content = read_note(path)
                if name in cfg['ref']:
                    ref_notes[name] = content
                    print(f"  [REF] {name}: {len(content)} chars")
                else:
                    all_notes[name] = {
                        'title': name,
                        'content': content,
                        'folder': folder_id,
                    }
                    # Show relative path for notes in subfolders
                    rel = os.path.relpath(root, folder_path)
                    label = f"{rel}/{name}" if rel != '.' else name
                    print(f"  {label}: {len(content)} chars")

    # Read existing data.js
    print("\nReading data.js...")
    with open(DATA_JS_PATH, 'r', encoding='utf-8') as f:
        data = f.read()

    # Replace NOTES_CONTENT
    nc_start = data.find('const NOTES_CONTENT')
    if nc_start < 0:
        print("ERROR: NOTES_CONTENT not found")
        sys.exit(1)

    nc_end = data.find('\n};\n', nc_start)
    if nc_end < 0:
        nc_end = data.find('\n};', nc_start)
    if nc_end < 0:
        print("ERROR: Cannot find end of NOTES_CONTENT")
        sys.exit(1)

    nc_js = 'const NOTES_CONTENT = {\n'
    for name, note in all_notes.items():
        title_json = json.dumps(note['title'], ensure_ascii=False)
        content_json = json.dumps(note['content'], ensure_ascii=False)
        folder_json = json.dumps(note['folder'], ensure_ascii=False)
        nc_js += f"  '{name}': {{\n"
        nc_js += f"    title: {title_json},\n"
        nc_js += f"    folder: {folder_json},\n"
        nc_js += f"    content: {content_json}\n"
        nc_js += f"  }},\n"
    nc_js += '};\n'

    data = data[:nc_start] + nc_js + data[nc_end+4:]

    # Replace REFERENCE
    ref_start = data.find('const REFERENCE')
    ref_js = '\nconst REFERENCE = {\n'
    for name, content in ref_notes.items():
        ref_js += f"  '{name}': {json.dumps(content, ensure_ascii=False)},\n"
    ref_js += '};\n'

    if ref_start >= 0:
        ref_end = data.find('\n};\n', ref_start)
        if ref_end < 0:
            ref_end = data.find('\n};', ref_start)
        if ref_end >= 0:
            data = data[:ref_start] + ref_js + data[ref_end+4:]
        else:
            data += '\n' + ref_js
    else:
        data += '\n' + ref_js

    # Validate
    print("\nValidating...")
    tmp = DATA_JS_PATH + '.validate.js'
    with open(tmp, 'w', encoding='utf-8') as f:
        f.write(data)
    r = subprocess.run(['node', '-c', tmp], capture_output=True)
    if r.returncode != 0:
        print(f"SYNTAX ERROR:\n{r.stderr.decode()[:600]}")
        os.remove(tmp)
        sys.exit(1)
    os.remove(tmp)
    print("  Syntax: OK")

    # Write
    with open(DATA_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(data)

    kb = len(data) / 1024
    print(f"\nDone. {len(data)} bytes ({kb:.0f} KB), {len(all_notes)} content notes, {len(ref_notes)} reference notes.")

if __name__ == '__main__':
    main()
