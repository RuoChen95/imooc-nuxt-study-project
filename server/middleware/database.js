import mongoose from 'mongoose'
import config from 'config'

// models loading
var models_path = __dirname + '../database/schema'
var walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(function(file) {
      var newPath = path + '/' + file
      var stat = fs.statSync(newPath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath)
        }
      }
      else if (stat.isDirectory()) {
        walk(newPath)
      }
    })
}


export const database = app => {
  mongoose.set('debug', true)

  mongoose.connect(config.dbUrl,{ useNewUrlParser: true })
}
