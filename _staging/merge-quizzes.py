"""Merge batch quiz JSON into data/quizzes.json"""
import json, sys, os

DEEPVAULT = r"D:\User\Desktop\DeepVault"
batch_file = sys.argv[1] if len(sys.argv) > 1 else os.path.join(DEEPVAULT, "_staging", "batch1-quizzes.json")
quizzes_file = os.path.join(DEEPVAULT, "data", "quizzes.json")

# Load batch
with open(batch_file, 'r', encoding='utf-8') as f:
    batch = json.load(f)

# Load existing quizzes
with open(quizzes_file, 'r', encoding='utf-8') as f:
    quizzes_data = json.load(f)

# Validate batch format
if not isinstance(batch, list):
    print(f"ERROR: batch must be a list, got {type(batch)}")
    sys.exit(1)

# Merge
added = 0
skipped = 0
for entry in batch:
    name = entry.get('noteName', '')
    questions = entry.get('questions', [])
    
    if not name:
        print(f"WARNING: entry missing noteName: {entry}")
        continue
    
    if name in quizzes_data['quizzes']:
        print(f"SKIP: '{name}' already has quizzes — use --force to overwrite")
        skipped += 1
        continue
    
    # Validate questions
    for qi, q in enumerate(questions):
        qtype = q.get('question', '')
        if not qtype:
            print(f"ERROR: {name} Q{qi} missing 'question' field")
            sys.exit(1)
        if not q.get('explanation'):
            print(f"ERROR: {name} Q{qi} missing 'explanation'")
            sys.exit(1)
        
        if q.get('options'):
            # MC question
            if len(q['options']) < 2:
                print(f"ERROR: {name} Q{qi} has <2 options")
                sys.exit(1)
            ca = q.get('correctAnswer', '')
            if not ca:
                print(f"ERROR: {name} Q{qi} missing correctAnswer")
                sys.exit(1)
            if ca not in q['options']:
                print(f"ERROR: {name} Q{qi} correctAnswer '{ca[:50]}' not in options")
                sys.exit(1)
        else:
            # Text question: correctAnswer or acceptableAnswers[0]
            ca = q.get('correctAnswer', '')
            acc = q.get('acceptableAnswers', [])
            if not ca and acc:
                ca = acc[0]
                q['correctAnswer'] = ca
            if not ca:
                print(f"ERROR: {name} Q{qi} text question missing correctAnswer and acceptableAnswers")
                sys.exit(1)
    
    quizzes_data['quizzes'][name] = {'questions': questions}
    added += 1
    print(f"  + {name} ({len(questions)} questions)")

# Save
with open(quizzes_file, 'w', encoding='utf-8') as f:
    json.dump(quizzes_data, f, indent=2, ensure_ascii=False)

print(f"\nDone: {added} added, {skipped} skipped")
