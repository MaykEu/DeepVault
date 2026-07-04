"""DeepVault Quiz CLI — safe QUIZ_DATA management without data.js surgery.

Usage:
  python quiz-cli.py add quizzes.json    # Insert quizzes from JSON into data.js
  python quiz-cli.py list                # List all quiz entries with counts
  python quiz-cli.py verify              # Verify all quizzes have valid answers
  python quiz-cli.py backup              # Backup QUIZ_DATA to quizzes_backup.json
  python quiz-cli.py restore file.json   # Restore from backup
"""

import json, re, os, sys, shutil
from datetime import datetime

DATAJS = r"D:\User\Desktop\DeepVault\js\data.js"
BACKUP = r"D:\User\Desktop\DeepVault\quizzes_backup.json"

def read_data():
    with open(DATAJS, 'r', encoding='utf-8') as f:
        return f.read()

def write_data(data):
    tmp = DATAJS + '.tmp'
    with open(tmp, 'w', encoding='utf-8') as f:
        f.write(data)
    os.replace(tmp, DATAJS)

def find_section_bounds(data, section_name):
    """Find exact { } boundaries of a const section."""
    start = data.find(f"const {section_name} = {{")
    if start < 0:
        return None, None
    depth = 0
    i = start + len(f"const {section_name} = {{") - 1
    for i in range(start, len(data)):
        if data[i] == '{': depth += 1
        elif data[i] == '}': depth -= 1
        if depth == 0:
            return start, i + 1
    return None, None

def cmd_add(args):
    if len(args) < 1:
        print("Usage: python quiz-cli.py add quizzes.json")
        return 1
    with open(args[0], 'r', encoding='utf-8') as f:
        new_quizzes = json.load(f)

    data = read_data()
    
    # Find insertion point: right before const REFERENCE
    ref_start, ref_end = find_section_bounds(data, "REFERENCE")
    if not ref_start:
        print("ERROR: REFERENCE section not found")
        return 1
    
    inserted = 0
    skipped = 0
    for quiz in new_quizzes:
        name = quiz.get('note', '')
        if not name:
            print("SKIP: entry missing 'note' field")
            skipped += 1
            continue
        
        if f"QUIZ_DATA['{name}']" in data[:ref_start]:
            print(f"SKIP: {name} (already exists)")
            skipped += 1
            continue
        
        qd = {"questions": quiz.get("questions", [])}
        entry = f"\nQUIZ_DATA['{name}'] = {json.dumps(qd)};\n"
        data = data[:ref_start] + entry + data[ref_start:]
        print(f"ADDED: {name} ({len(qd['questions'])}Q)")
        inserted += 1
    
    # Update QUIZ_NOTES arrays
    # Find all quiz note names
    all_quizzes = set(re.findall(r"QUIZ_DATA\['([^']+)'\]", data[:ref_start]))
    
    # Read FOLDER_GROUPS to map notes to folders
    fg_start, fg_end = find_section_bounds(data, "FOLDER_GROUPS")
    note_to_folder = {}
    if fg_start:
        for m in re.finditer(r"'([^']+)':\s*\{([^}]+)\}", data[fg_start:fg_end]):
            fid = m.group(1)
            for nm in re.finditer(r"'([^']+)':\s*\[(.*?)\]", m.group(2)):
                for n in re.findall(r"'([^']+)'", nm.group(2)):
                    note_to_folder[n] = fid
    
    # Rebuild QUIZ_NOTES per folder
    folders = {'computer-systems': [], 'cpp-fundamentals': [], 'game-math': [],
               'ue-core': [], 'ue-networking': [], 'big-o': []}
    for qn in all_quizzes:
        fid = note_to_folder.get(qn)
        if fid in folders:
            folders[fid].append(qn)
    
    qn_start, qn_end = find_section_bounds(data, "QUIZ_NOTES")
    if qn_start:
        lines = ["const QUIZ_NOTES = {"]
        for fid in ['computer-systems', 'cpp-fundamentals', 'game-math', 'ue-core', 'ue-networking', 'big-o']:
            notes = sorted(set(folders[fid]))
            lines.append(f"  '{fid}': [\n    '" + "',\n    '".join(notes) + "'\n  ],")
        lines.append("};")
        new_qn = "\n".join(lines)
        data = data[:qn_start] + new_qn + data[qn_end:]
    
    write_data(data)
    print(f"\nDone: {inserted} added, {skipped} skipped. Total: {len(all_quizzes)} quizzes")
    return 0

def cmd_list(args=None):
    data = read_data()
    ref = data.find("const REFERENCE")
    quizzes = re.findall(r"QUIZ_DATA\['([^']+)'\]", data[:ref])
    print(f"{len(quizzes)} quizzes:")
    
    from collections import Counter
    # Map to folders via simple heuristic
    counts = Counter()
    for q in quizzes:
        if any(q.startswith(p) for p in ['00','01','02','03','04','05','06','07','08','09',
            '10','11','12','13','14','15','16','C','D','S','T','F']):
            counts['computer-systems'] += 1  # rough
        else:
            counts['other'] += 1
    
    # Better: count questions
    total_q = 0
    for q in quizzes:
        match = re.search(rf"QUIZ_DATA\['{re.escape(q)}'\] = ({{[^}}]+}});", data)
        if match:
            try:
                obj = json.loads(match.group(1))
                total_q += len(obj.get('questions', []))
            except:
                pass
    
    print(f"Total questions: ~{total_q}")
    return 0

def cmd_verify(args=None):
    data = read_data()
    ref = data.find("const REFERENCE")
    quizzes = re.findall(r"QUIZ_DATA\['([^']+)'\] = (\{.*?\});", data[:ref])
    
    # Fallback: parse object literal format using Node.js
    if not quizzes:
        qds = data.find('const QUIZ_DATA = {')
        if qds != -1:
            import subprocess, tempfile, os
            brace_start = data.find('{', qds)
            depth = 0
            for i in range(brace_start, len(data)):
                if data[i] == '{': depth += 1
                elif data[i] == '}': depth -= 1
                if depth == 0: break
            raw_obj = data[brace_start:i+1]
            # Write to temp file, eval with node, read back
            tmpf = tempfile.NamedTemporaryFile(mode='w', suffix='.js', delete=False, encoding='utf-8')
            tmpf.write(f"process.stdout.write(JSON.stringify(({raw_obj})));")
            tmpf.close()
            result = subprocess.run(['node', tmpf.name], capture_output=True, text=True)
            os.unlink(tmpf.name)
            if result.returncode == 0:
                try:
                    obj = json.loads(result.stdout)
                    for name, qdata in obj.items():
                        quizzes.append((name, json.dumps(qdata)))
                except json.JSONDecodeError:
                    pass
    
    errors = 0
    for name, raw in quizzes:
        try:
            obj = json.loads(raw)
        except json.JSONDecodeError as e:
            print(f"ERROR: {name} — invalid JSON: {e}")
            errors += 1
            continue
        
        questions = obj.get('questions', [])
        for i, q in enumerate(questions):
            qtype = 'MC' if 'options' in q else 'text'
            if qtype == 'MC':
                if 'correctAnswer' not in q:
                    print(f"ERROR: {name} Q{i+1}: MC missing correctAnswer")
                    errors += 1
                elif q.get('options') and q['correctAnswer'] not in q['options']:
                    print(f"ERROR: {name} Q{i+1}: correctAnswer '{q['correctAnswer']}' not in options")
                    errors += 1
            if 'explanation' not in q:
                print(f"WARN: {name} Q{i+1}: missing explanation")
    
    print(f"\n{len(quizzes)} quizzes checked, {errors} errors")
    return 0 if errors == 0 else 1

def cmd_backup(args=None):
    data = read_data()
    ref = data.find("const REFERENCE")
    quizzes = re.findall(r"QUIZ_DATA\['([^']+)'\] = (\{.*?\});", data[:ref])
    
    backup = []
    for name, raw in quizzes:
        try:
            obj = json.loads(raw)
            backup.append({"note": name, "questions": obj.get("questions", [])})
        except:
            print(f"WARN: skipping {name} (invalid JSON)")
    
    with open(BACKUP, 'w', encoding='utf-8') as f:
        json.dump(backup, f, indent=2)
    
    print(f"Backed up {len(backup)} quizzes to {BACKUP}")
    return 0

def cmd_restore(args):
    if len(args) < 1:
        args = [BACKUP]
    if not os.path.exists(args[0]):
        print(f"File not found: {args[0]}")
        return 1
    return cmd_add(args)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(0)
    
    cmd = sys.argv[1]
    args = sys.argv[2:]
    
    commands = {
        'add': cmd_add,
        'list': cmd_list,
        'verify': cmd_verify,
        'backup': cmd_backup,
        'restore': cmd_restore,
    }
    
    if cmd in commands:
        sys.exit(commands[cmd](args))
    else:
        print(f"Unknown command: {cmd}")
        print(__doc__)
        sys.exit(1)
