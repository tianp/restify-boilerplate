(function(){

  var mongo = require('mongoskin'),
    Server = mongo.Server

  var connection = new mongo.Db( "dbName", new Server( "mongoHost", 27017), { native_parser: true, w: 1 } )

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
