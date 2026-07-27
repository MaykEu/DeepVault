var fs = require('fs');
var vm = require('vm');
var code = fs.readFileSync('D:/User/Desktop/DeepVault/js/learn.js', 'utf-8');
try {
  new vm.Script(code);
  console.log('OK');
} catch(e) {
  console.log('ERROR:', e.message);
  if (e.stack) {
    var lines = e.stack.split('\n');
    console.log(lines[0]);
    console.log(lines[1]);
  }
}
