// This is an interface for the filtered list command using a modular programming design.

var module = require('./Filtered_List.js')

function printStuff(err, array) {
  array.forEach(function(elem) {
    console.log(elem)
  })
}

module(process.argv[2],process.argv[3], printStuff)