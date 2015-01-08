(function(){

  var uuid = require('node-uuid')

  module.exports = function(){

    // Generate UUID based ID
    return uuid.v1()
  }


})()
