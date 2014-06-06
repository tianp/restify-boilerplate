(function(){

  var _ = require('underscore'),
    async = require('async'),
    moment = require('moment'),
    Models = require('./../../models')

  module.exports = function( params, done ){

    async.waterfall( [

      function( next ){

        next( null, params )
      },

      checkParams,

      createNewUser

      ], function( error, result ){

      if( error ){

        done( error )

        return
      }

      done( null, result )

    })
  }

  function checkParams( params, done ){

    done( null, params )
  }

  function createNewUser( params, done ){

    var Users = new Models.users()

    Users.create( params, done )
  }

})()
