"""Vault vs Website Comparison."""
import os, re, sys

VAULT = r"C:\Users\sofia\iCloudDrive\iCloud~md~obsidian\Game Development"
DATAJS = r"D:\User\Desktop\DeepVault\js\data.js"

print("=" * 60)
print("VAULT vs DEEPVAULT WEBSITE COMPARISON")
print("=" * 60)

with open(DATAJS, 'r', encoding='utf-8') as f:
    js = f.read()

# Extract NOTES_CONTENT keys
nc_start = js.find('const NOTES_CONTENT = {')
nc_end = js.find('\n};\n', nc_start)
web_notes = set()
for m in re.finditer(r"'([^']+)':\s*\{", js[nc_start:nc_end]):
    web_notes.add(m.group(1))

# Extract QUIZ_NOTES
qn_start = js.find('const QUIZ_NOTES = {')
qn_end = js.find('\n};\n', qn_start)
web_quizzes = set()
for m in re.finditer(r"'([^']+)':", js[qn_start:qn_end]):
    web_quizzes.add(m.group(1))

# Find vault .md files
vault_notes = {}
for root, dirs, files in os.walk(VAULT):
    dirs[:] = [d for d in dirs if d != 'ANKI' and not d.startswith('.')]
    for f in files:
        if f.endswith('.md'):
            full = os.path.join(root, f)
            rel = os.path.relpath(full, VAULT)
            with open(full, 'r', encoding='utf-8') as fh:
                content = fh.read()
            title = f.replace('.md', '')
            vault_notes[title] = {'path': rel, 'size': len(content), 'lines': content.count('\n')}

print(f"\nVault .md files:  {len(vault_notes)}")
print(f"Website notes:    {len(web_notes)}")
print(f"Website quizzes:  {len(web_quizzes)}")

# Notes in website but NOT in vault
website_only = web_notes - set(vault_notes.keys())
if website_only:
    print(f"\n--- NOTES IN WEBSITE BUT MISSING FROM VAULT ({len(website_only)}) ---")
    for n in sorted(website_only):
        print(f"  MISSING: {n}")
else:
    print("\n--- All website notes exist in vault ✓ ---")

# Notes in vault but NOT in website
vault_only = set(vault_notes.keys()) - web_notes
if vault_only:
    print(f"\n--- NOTES IN VAULT BUT MISSING FROM WEBSITE ({len(vault_only)}) ---")
    for n in sorted(vault_only):
        print(f"  VAULT ONLY: {n} ({vault_notes[n]['path']})")
else:
    print("\n--- All vault notes exist in website ✓ ---")

# Content size differences
print(f"\n--- CONTENT DIFFERENCES ---")
diffs = 0
for note in sorted(web_notes & set(vault_notes.keys())):
    v_path = os.path.join(VAULT, vault_notes[note]['path'])
    with open(v_path, 'r', encoding='utf-8') as fh:
        v_data = fh.read()
    v_size = len(v_data)
    idx = js.find(f"'{note}':")
    if idx > 0:
        content_idx = js.find("content:", idx)
        if content_idx > 0:
            qs = js.find('"', content_idx) + 1
            i = qs
            while i < len(js):
                if js[i] == '\\': i += 2; continue
                if js[i] == '"': qe = i; break
                i += 1
            w_content = js[qs:qe]
            w_size = len(w_content)
            if abs(w_size - v_size) > 200:
                diffs += 1
                print(f"  {note}: vault={v_size:5d}  web={w_size:5d}  (diff={abs(v_size-w_size)})")
if diffs == 0:
    print("  No significant size differences ✓")

# Quiz coverage gap
notes_without_quiz = web_notes - web_quizzes
print(f"\n--- QUIZ COVERAGE GAP ({len(notes_without_quiz)} notes without quizzes) ---")
for n in sorted(notes_without_quiz)[:25]:
    print(f"  NO QUIZ: {n}")
if len(notes_without_quiz) > 25:
    print(f"  ... and {len(notes_without_quiz) - 25} more")

print("\n" + "=" * 60)
print("COMPARISON COMPLETE")
