
var fs = require('fs');
var vm = require('vm');

// Load NOTES_CONTENT and REFERENCE from data.js
var sandbox = { NOTES_CONTENT: {}, REFERENCE: {} };
vm.createContext(sandbox);
var dataCode = fs.readFileSync('D:/User/Desktop/DeepVault/js/data.js', 'utf-8');
new vm.Script(dataCode).runInContext(sandbox);
Object.assign(global, sandbox);

// Load learn.js
var code = fs.readFileSync('D:/User/Desktop/DeepVault/js/learn.js', 'utf-8');
new vm.Script(code).runInThisContext();

// Read markdown file, strip frontmatter, render
var filePath = process.argv[2];
var raw = fs.readFileSync(filePath, 'utf-8');
var md = raw.replace(/^---[\r\n]+[\s\S]*?[\r\n]+---[\r\n]+/, '').trim();
var html = LearnView.md2html(md);
process.stdout.write(html);
