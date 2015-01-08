(function(){

  var moment = require('moment')

  module.exports = function(){

    var now = {
      'timestamp': moment().unix(),
      'iso': moment().toISOString()
    }

    return now
  }


})()
