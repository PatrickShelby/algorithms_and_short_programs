    var fs = require('fs')
    var path = require('path')


    module.exports = function(direct, ext, callback) {
      array = []
      fs.readdir(direct, function (err, list) {
        if (err)
          return callback(err);
        list.forEach(function(elem){
           if (path.extname(elem) === '.' + ext)
              array.push(elem)
        })
        callback(null, array)

    })
  }


