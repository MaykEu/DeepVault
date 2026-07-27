var vm = require('vm');
var fs = require('fs');
var code = fs.readFileSync('D:/User/Desktop/DeepVault/js/code-highlight.js', 'utf-8');
new vm.Script(code).runInThisContext();
console.log('OK');
console.log('highlight:', typeof CodeHighlight.highlight);
console.log('escape:', typeof CodeHighlight.escape);
console.log('tokenize:', typeof CodeHighlight.tokenize);

// Quick test: highlight some C++
var cpp = '#include <iostream>\nint main() { return 0; }';
var html = CodeHighlight.highlight(cpp);
console.log('\nTest output:', html);
