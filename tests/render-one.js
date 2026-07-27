
var fs = require('fs');
var vm = require('vm');

// Load NOTES_CONTENT and REFERENCE from data.js directly into global
var dataCode = fs.readFileSync('D:/User/Desktop/DeepVault/js/data.js', 'utf-8');
new vm.Script(dataCode).runInThisContext();

// Load modules in order (matching index.html script tag order)
var base = 'D:/User/Desktop/DeepVault/js/';
['code-highlight.js', 'wiki-link.js', 'learn.js'].forEach(function(f) {
  var code = fs.readFileSync(base + f, 'utf-8');
  new vm.Script(code).runInThisContext();
});

// Read markdown file, strip frontmatter, render
var filePath = process.argv[2];
var raw = fs.readFileSync(filePath, 'utf-8');
var md = raw.replace(/^---[\r\n]+[\s\S]*?[\r\n]+---[\r\n]+/, '').trim();
var html = LearnView.md2html(md);
process.stdout.write(html);
