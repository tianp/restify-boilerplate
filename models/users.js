(function(){

  var _ = require('underscore'),
    moment = require('moment'),
    db = require('./../libs/connection').db

  var Users = function() {

    db.bind( 'users' )

    _.extend( this, db.users )
  }

  module.exports = Users

})()
