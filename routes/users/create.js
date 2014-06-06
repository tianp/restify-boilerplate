(function(){

  var _ = require('underscore'),
    moment = require('moment'),
    Controllers = require('./../../controllers')

  module.exports = function( request, response, next ) {

    var params = {
      fullName: request.params.fullName,
      email: request.params.email,
      password: request.params.password
    }

    Controllers.users.create( params, function ( error, user ){

      if( error ){

        response.json( error.status, { code: error.code, message: error.message } )

        next( error )

        return
      }

      user.__timestamp = moment().valueOf() // unix miliseconds timestamp

      response.json( 200, user )

      next()

    })
  }

})()
