"""DeepVault Build System — combines source JSON into data.js.

Source files (in data/):
    notes.json      — NOTES_CONTENT from vault
    quizzes.json    — QUIZ_DATA + QUIZ_NOTES from Worker
    folders.json    — FOLDER_GROUPS from vault
    reference.json  — REFERENCE from vault + guide-content.txt

Run: python build.py
Output: js/data.js
"""

import json, os, re, subprocess, sys

BASE = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE, "data")
OUTPUT = os.path.join(BASE, "js", "data.js")

def load_json(name):
    path = os.path.join(DATA_DIR, name)
    if not os.path.exists(path):
        print(f"ERROR: {path} not found")
        sys.exit(1)
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

# Load all source files
notes = load_json("notes.json")
quiz_data = load_json("quizzes.json")
folders = load_json("folders.json")
reference = load_json("reference.json")

quizzes = quiz_data.get("quizzes", {})
quiz_notes = quiz_data.get("quiz_notes", {})

# Validate quizzes
total_questions = 0
errors = 0
for name, qd in quizzes.items():
    questions = qd.get("questions", [])
    for i, q in enumerate(questions):
        if "options" in q and q.get("correctAnswer") not in q.get("options", []):
            print(f"ERROR: {name} Q{i+1}: correctAnswer not in options")
            errors += 1
        if not q.get("explanation"):
            print(f"WARN: {name} Q{i+1}: missing explanation")
        total_questions += 1

if errors > 0:
    print(f"\n{errors} errors — ABORTING BUILD")
    sys.exit(1)

# Build FOLDERS from FOLDER_GROUPS
folder_list = [
    ("computer-systems", "Computer Systems", "Computer Systems", "🖥", "#58a6ff"),
    ("cpp-fundamentals", "C++ Fundamentals", "C++ Fundamentals", "📝", "#7ee787"),
    ("game-math", "Game Math", "Game Math", "📐", "#d2a8ff"),
    ("ue-core", "Unreal Engine Core", "UE Core", "🎮", "#ff7b72"),
    ("ue-networking", "Unreal Engine Networking", "UE Networking", "🌐", "#ffa657"),
    ("big-o", "Algorithms & Complexity", "Big O Notation", "📊", "#79c0ff"),
]

lines = []

# 1. FOLDERS
lines.append("const FOLDERS = [")
for fid, dname, vfolder, icon, color in folder_list:
    lines.append(f"  {{id:'{fid}', name:'{dname}', icon:'{icon}', color:'{color}'}},")
lines.append("];\n")

# 2. FOLDER_GROUPS — with explicit group ordering per folder
group_order = {
    'computer-systems': ['Hardware/Core', 'Hardware/Storage', 'Hardware/RAM & Virtual Memory',
                          'System Software/Core', 'System Software/Function Calls',
                          'Concurrency'],
    'cpp-fundamentals': ['01 — Primer', '02 — Syntax & Types', '03 — Memory',
                          '04 — OOP & Generics', '05 — Modern C++', '06 — Bridge'],
}
lines.append("const FOLDER_GROUPS = {")
for fid, _, _, _, _ in folder_list:
    if fid in folders and folders[fid]:
        entries = []
        fgroups = folders[fid]
        order = group_order.get(fid, list(fgroups.keys()))
        # Sort groups by their position in the order list
        ordered_groups = sorted(fgroups.items(), 
            key=lambda x: order.index(x[0]) if x[0] in order else 999)
        for group_name, note_list in ordered_groups:
            key = group_name if group_name != "_root" else ""
            nl = ", ".join(f"'{n}'" for n in note_list)
            entries.append(f"    '{key}': [{nl}]")
        lines.append(f"  '{fid}': {{\n" + ",\n".join(entries) + "\n  },")
lines.append("};\n")

# 3. NOTES — flat list per folder
lines.append("const NOTES = {")
for fid, _, _, _, _ in folder_list:
    if fid in folders and folders[fid]:
        all_notes = []
        for group_name in sorted(folders[fid].keys()):
            if group_name == "_root":
                all_notes = folders[fid][group_name] + all_notes
            else:
                all_notes.extend(folders[fid][group_name])
        nl = ", ".join(f"'{n}'" for n in all_notes)
        lines.append(f"  '{fid}': [{nl}],")
lines.append("};\n")

# 4. QUIZ_NOTES
lines.append("const QUIZ_NOTES = {")
for fid, _, _, _, _ in folder_list:
    if fid in quiz_notes:
        nl = ",\n    ".join(f"'{n}'" for n in sorted(set(quiz_notes[fid])))
        lines.append(f"  '{fid}': [\n    {nl}\n  ],")
lines.append("};\n")

# 5. QUIZ_DATA — as assignment statements (backward compatible)
lines.append("const QUIZ_DATA = {};")
for name in sorted(quizzes.keys()):
    qd = quizzes[name]
    lines.append(f"QUIZ_DATA['{name}'] = {json.dumps(qd)};")

# 6. NOTES_CONTENT
lines.append("\nconst NOTES_CONTENT = {")
for name in sorted(notes.keys()):
    note = notes[name]
    content = note.get("content", "")
    folder = note.get("folder", "computer-systems")
    lines.append(f"  '{name}': {{'title': '{name}', 'folder': '{folder}', 'content': {json.dumps(content)}}},")
lines.append("};\n")

# 7. REFERENCE
lines.append("const REFERENCE = {")
for key in sorted(reference.keys()):
    lines.append(f"  '{key}': {json.dumps(reference[key])},")
lines.append("};\n")

output = "\n".join(lines)

# Validate with node --check
tmp = os.path.join(os.environ.get("TEMP", "/tmp"), "dv_build_check.js")
with open(tmp, 'w', encoding='utf-8') as f:
    f.write(output)
r = subprocess.run(['node', '-c', tmp], capture_output=True, text=True)
if r.returncode != 0:
    print(f"SYNTAX ERROR:\n{r.stderr[:600]}")
    os.remove(tmp)
    sys.exit(1)
os.remove(tmp)

# Write
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Built data.js: {len(notes)} notes, {len(quizzes)} quizzes ({total_questions} questions), {len(reference)} reference entries")
