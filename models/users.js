(function(){

  var _ = require('underscore'),
    moment = require('moment'),
    db = require('./../libs/connection').db

  var Users = function() {

    db.bind( 'users' )

    _.extend( this, db.users )
  }

  Users.prototype.create = function( params, done ){

    var defaults = {
      dateSubmitted: {
        timestamp: moment().unix(),
        iso: moment().toISOString()
      }
    }

    var user = _.defaults( params, defaults )

    var options = { w: 1 } // write concern

    this.insert( user, options, function( error, result ) {

      if( error ){

        done( error ) // something happens

        return
      }

      done( null, result[0] ) // return back the recorded user

    })
  }

  module.exports = Users

})()
