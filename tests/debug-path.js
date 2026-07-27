var fs = require('fs');
var dir = 'D:/User/Desktop/DeepVault/Obsidian/Game Development/Game Math/Geometric Algebra';
console.log('Listing:', dir);
var entries = fs.readdirSync(dir);
console.log(entries);

// Try each file
for (var i = 0; i < entries.length; i++) {
  var full = dir + '/' + entries[i];
  console.log(entries[i], '-> exists:', fs.existsSync(full));
}
