# Contributing to DeepVault

Thanks for wanting to help! Here's how.

## How It Works

```
data/                    ← 7 independent JSON/JS source files
├── notes.json           ← Note content (vault → convert.py)
├── quizzes.json         ← Quiz questions (safe to edit)
├── folders.json         ← Folder structure
├── projects.json        ← Project notes (vault → convert.py)
├── reference.json       ← Glossary, Guide, Learning Paths
├── exercises.json       ← Game math exercise templates
└── exercises-data.js    ← Generated JS variable (exercise data)

python build.py          ← Combines sources → js/data.js (validates first)
index.html               ← Double-click to launch
```

- The vault at `Obsidian/Game Development/` is the **source of truth** — all educational content lives there
- `python build.py` combines `data/*.json` into `js/data.js` — validates quizzes before building
- Write quizzes to `data/quizzes.json`, then run `python build.py` to rebuild
- Users who clone the repo get the compiled `data.js` — they don't need a vault or Python

## 🤖 Use AI

**The easiest way to contribute is with an AI.** Load [SKILL.md](SKILL.md) into any AI (ChatGPT, Claude, Gemini, or local models) — it has every pitfall from dozens of commits, and the exact build procedure. Without SKILL.md, your AI will make the same mistakes we already solved. With it, you can add quizzes, notes, and features in minutes.

This entire project was built with AI. You should contribute with it too.

---

## Ways to Contribute

### 1. Add Quiz Questions

Find a note that needs quizzes, read the note content, and add questions to `data/quizzes.json`.

**Format:**
```javascript
{
  "quizzes": {
    "Note Name": {
      "questions": [
        {
          "question": "What is X?",
          "options": ["A", "B", "C"],
          "correctAnswer": "B",
          "explanation": "Because..."
        },
        {
          "question": "Explain Y",
          "correctAnswer": "The correct answer",
          "acceptableAnswers": ["alt phrasing 1", "alt phrasing 2"],
          "explanation": "Because..."
        }
      ]
    }
  }
}
```

**Rules:**
- 2-4 options for multiple choice — don't force exactly 4
- Every question MUST have an explanation
- Extract answers directly from the note content — never fabricate
- Run `python build.py` after editing — it validates your quizzes before building

### 2. Add New Notes

Write `.md` files in the vault at `Obsidian/Game Development/`, then run `python convert.py` to sync to `data/notes.json` and `python build.py` to rebuild.

**Note format:**
```markdown
# Note Title

## Section

Content here...

### Subsection

More content with `inline code`, **bold**, *italic*.

> [!info] Callout
> Callout content here.

Code blocks:
\`\`\`cpp
void example() { }
\`\`\`

Wiki links: [[Other Note]]
```

### 3. Add a Brand New Category

See the full guide in [README.md](README.md#add-a-brand-new-category). Short version:
1. Create a folder in your vault with `.md` notes
2. Add one entry to `FOLDER_MAP` in `convert.py`
3. Run `python convert.py` — everything else is automatic

### 4. Fix Bugs or Add Features

- **Read [SKILL.md](SKILL.md) first** — it has every pitfall from dozens of commits of development
- JavaScript: ES5-compatible for core init files (`app.js`, `router.js`). Learn and quiz files can use modern syntax
- CSS: Use CSS variables (`var(--bg-primary)`) — all 4 themes must work
- After any CSS edit, verify braces
- After any JS edit, run `node -c` on the file
- Commit locally before risky changes

### 5. Improve Documentation

Fix typos, improve explanations, add examples. Update the Obsidian vault source, then run `python build.py`.

### 6. Add Game Math Exercises

The exercise system is separate from quizzes — it's a mastery-gated practice system for game math.

**Architecture:**
```
data/exercises.json       ← Question templates with randomized parameters
data/exercises-data.js    ← Generated JS variable (load via <script>)
js/exercises-engine.js    ← Core engine (validation, streak, levels, localStorage)
js/exercises-dashboard.js ← UI (dashboard cards, topic page, practice session, results)
css/exercises.css         ← All exercise styling
```

**Template format (in `data/exercises.json`):**
```json
{
  "id": "vec-l1-001",
  "level": 1,
  "params": {"p1x": "randint(-30,30)", "p1y": "randint(-30,30)"},
  "scenario": "Player A at ({{p1x}}, {{p1y}})... What is the vector FROM A TO B?",
  "solution": "[p2x - p1x, p2y - p1y]",
  "answerType": "vector3d",
  "hints": ["Subtract B's coordinates from A's.", "B - A, component by component."],
  "visual": {"type": "vector-2d", "fromLabel": "A", "toLabel": "B"}
}
```

**Rules:**
- Formula NEVER appears in the scenario — only in hints or solution
- Use game dev / engine / 3D software contexts, not abstract math
- Every template must have 2-3 progressive hints
- Available visual types: `right-triangle`, `unit-circle`, `vector-2d`, `reflection`, `fov-cone`
- Available answer types: `vector3d`, `scalar_magnitude`, `scalar_degrees`, `scalar_dot`, `yes_no`, `left_right`, `cw_ccw`
- After editing `exercises.json`, regenerate `exercises-data.js` with `python -c "import json; ..."`
- See `SKILL.md` § Exercise System for the full reference

## Pull Request Process

1. Create a branch for your change
2. Make your changes and commit
3. Run `python build.py` if you changed any vault files or quizzes
4. Verify: `node test.js` (must pass 20/20)
5. Open a PR with a clear description

## Questions?

Open an issue or start a discussion.
