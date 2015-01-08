(function(){

  var mongo = require('mongoskin'),
    Server = mongo.Server,
    config = require('./../config')

  var connection = new mongo.Db( config.mongo.name, new Server( config.mongo.host, 27017), { native_parser: true, w: 1 } )

  console.log('Trying to connect to database' )

  connection.open(function ( error, db ){

    if( error ){

      console.log('Connection to database failed ' )

      return
    }

    console.log('Successfully connected to database' )

  })

  exports.db = connection

})()
