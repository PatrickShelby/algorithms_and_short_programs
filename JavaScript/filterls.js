// This JavaScript program also uses the fs module and takes a directory path and extension name as command line arguments. This function returns a filtered listed of files in that directory with that extension name, mimicking the Unix "ls" command.


var fs = require('fs')
var directory = process.argv[2]
var arg = process.argv[3]

function printIfArg(element, index, array) {
  if (element.split('.')[1] === arg) {
    console.log(element);
  }
}

function readFiles(err, textData){
  if (err) return console.error(err);
    textData.forEach(printIfArg);
}


fs.readdir(directory, readFiles);