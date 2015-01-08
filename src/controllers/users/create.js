(function(){

  var _ = require('underscore'),
    async = require('async'),
    moment = require('moment'),
    bcrypt = require('bcrypt'),
    Models = require('./../../models')

  module.exports = function( params, done ){

    async.waterfall( [

      function( next ){

        next( null, params )
      },

      encryptPassword,

      createNewUser

      ], function( error, result ){

      if( error ){

        done( error )

        return
      }

      done( null, result )

    })
  }

  function encryptPassword( params, done ){

    /*
    * This function will encrypt a string into hashed password
    * First, it will generate a salt
    * Then it will hash the string based on the salt
    * It will return the salt and hashed string
    * We don't need to record the salt on database
    */

    // generate salt
    bcrypt.genSalt( 10, function ( error, salt ){

      if( error ){

        done( error )

        return
      }

      // hash the inputted password
      bcrypt.hash( params.password, salt, function ( error, hashedPassword ){

        if( error ){

          done( error )

          return
        }

        params.password = hashedPassword

        done( null, params )

      })
    })
  }

  function createNewUser( params, done ){

    var Users = new Models.users()

    Users.create( params, done )
  }

})()
