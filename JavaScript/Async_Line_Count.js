
// This is a JavaScript line counter which takes one command line argument, a file path and uses the fs module to read an input stream into the callback "countLines".

var fs = require('fs')
var file = process.argv[2]

var countLines = function(err, textData) {
  if (err) return console.error(err);
  console.log(textData.split('\n').length - 1);
}

fs.readFile(file, 'utf8', countLines)
