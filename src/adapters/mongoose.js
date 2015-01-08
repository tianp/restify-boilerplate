(function(){

  var mongoose = require('mongoose')

  mongoose.connect( process.env.MONGO_CONNECTION_STRING )

  module.exports = mongoose

})()
