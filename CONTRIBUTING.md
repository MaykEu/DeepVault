# Contributing to DeepVault

Thanks for wanting to help! Here's how.

## Ways to Contribute

### 1. Add Quiz Questions
Find a note that needs quizzes, read the note content, and add questions to `QUIZ_DATA` in `js/data.js`.

**Format:**
```javascript
QUIZ_DATA['Note Name'] = {
  questions: [
    {
      type: "multiple_choice",
      question: "What is X?",
      options: ["A", "B", "C"],
      correctIndex: 1,
      explanation: "Because..."
    },
    {
      type: "text_input",
      question: "Explain Y",
      correctAnswer: "The correct answer",
      acceptableAnswers: ["alternative 1", "alternative 2"],
      explanation: "Because..."
    }
  ]
};
```

**Rules:**
- 2-4 options for multiple choice — don't force exactly 4
- Every question MUST have an explanation
- Extract answers directly from the note content — never fabricate
- Don't edit `QUIZ_NOTES` manually — `convert.py` builds it automatically from `QUIZ_DATA`

### 2. Add New Notes
Write `.md` files in your Obsidian vault folder, then run `python convert.py`.

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

### 3. Add a New Category
See the full guide in [README.md](README.md#add-a-brand-new-category). Short version:
1. Create a folder in your vault with `.md` notes
2. Add one entry to `FOLDER_MAP` in `convert.py`
3. Run `python convert.py` — everything else is automatic

### 4. Fix Bugs or Add Features
- **Read [SKILL.md](SKILL.md) first** — it has every pitfall from 58 commits of development
- JavaScript: ES5-compatible for core init files (`app.js`, `router.js`). Learn and quiz files can use modern syntax
- CSS: Use CSS variables (`var(--bg-primary)`) — all 4 themes must work
- After any CSS edit, verify braces: `python -c "c=open('css/components.css').read(); ..."`
- After any JS edit, run `node -c js/data.js`
- Commit locally before risky changes

### 5. Improve Documentation
Fix typos, improve explanations, add examples. Update the Obsidian vault source, then run `python convert.py`.

## AI Contributors

**Use an AI with [SKILL.md](SKILL.md) loaded.** The skill file documents 10 critical rules, the markdown renderer architecture, every pitfall, and the exact convert.py rebuild procedure. Without it, your AI WILL break things — we learned this the hard way.

Recommended workflow:
1. Load SKILL.md into your AI's context
2. Describe your change
3. Review the AI's plan before letting it execute
4. Verify with `node -c js/data.js` after any file changes

## Pull Request Process

1. Create a branch for your change
2. Make your changes and commit
3. Run `python convert.py` if you changed any vault files
4. Verify: `node -c js/data.js` (must pass)
5. Open a PR with a clear description

## Questions?

Open an issue or start a discussion.
