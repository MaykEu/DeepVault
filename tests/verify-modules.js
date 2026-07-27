var vm = require('vm');
var fs = require('fs');
var base = 'D:/User/Desktop/DeepVault/js/';

// Load in browser order
var order = [
  'data.js',
  'code-highlight.js',
  'wiki-link.js',
  'learn.js'
];

for (var i = 0; i < order.length; i++) {
  var path = (order[i] === 'data.js') ? 'D:/User/Desktop/DeepVault/js/data.js' : base + order[i];
  var code = fs.readFileSync(path, 'utf-8');
  new vm.Script(code).runInThisContext();
}

// Verify everything loaded
console.log('LearnView:', typeof LearnView);
console.log('LearnView.md2html:', typeof LearnView.md2html);
console.log('LearnView.hicpp:', typeof LearnView.hicpp);
console.log('CodeHighlight.highlight:', typeof CodeHighlight.highlight);
console.log('WikiLink.resolveAll:', typeof WikiLink.resolveAll);

// Quick render test
var md = '# Hello\n\nThis is a [[test]] link.\n\n```cpp\nint main() { return 0; }\n```';
var html = LearnView.md2html(md);
console.log('\nRender test: ' + html.length + ' bytes');
console.log(html.substring(0, 200));
