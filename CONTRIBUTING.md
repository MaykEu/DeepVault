# Contributing to DeepVault

Thanks for wanting to help! Here's how.

## How It Works

```
Obsidian vault (.md files) → python convert.py → js/data.js → index.html
```

- The vault is the **source of truth** — all educational content lives there
- `convert.py` reads the vault and builds `data.js` automatically
- `data.js` is a **compiled file** — don't manually edit notes in it (except quiz questions)
- Users who clone the repo get the compiled `data.js` — they don't need a vault or Python


## 🤖 Use AI

**The easiest way to contribute is with an AI.** Load [SKILL.md](SKILL.md) into any AI (ChatGPT, Claude, Gemini, or local models) — it has 10 critical rules, every pitfall from dozens of commits, and the exact build procedure. Without SKILL.md, your AI will make the same mistakes we already solved. With it, you can add quizzes, notes, and features in minutes.

This entire project was built with AI. You should contribute with it too.

---

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
- **Read [SKILL.md](SKILL.md) first** — it has every pitfall from dozens of commits of development
- JavaScript: ES5-compatible for core init files (`app.js`, `router.js`). Learn and quiz files can use modern syntax
- CSS: Use CSS variables (`var(--bg-primary)`) — all 4 themes must work
- After any CSS edit, verify braces: `python -c "c=open('css/components.css').read(); ..."`
- After any JS edit, run `node -c js/data.js`
- Commit locally before risky changes

### 5. Improve Documentation
Fix typos, improve explanations, add examples. Update the Obsidian vault source, then run `python convert.py`.

## Pull Request Process

1. Create a branch for your change
2. Make your changes and commit
3. Run `python convert.py` if you changed any vault files
4. Verify: `node -c js/data.js` (must pass)
5. Open a PR with a clear description

## Questions?

Open an issue or start a discussion.
