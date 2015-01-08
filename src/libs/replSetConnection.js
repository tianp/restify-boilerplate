(function(){

  var mongo = require('mongoskin'),
    ReplSetServers = mongo.ReplSetServers,
    config = require('./../config')

    var replSet = new ReplSetServers([
      new Server( config.mongo.replHost[0], 27017),
      new Server( config.mongo.replHost[0], 27017),
      new Server( config.mongo.replHost[0], 27017)
    ])

    var connection = new mongo.Db( config.mongo.name, replSet, { w: 1 } )

    console.log('Initiate connection to database' )

    connection.open(function( error, db ){

      if( error ){

        var log = 'Connection to database failed'

        console.log( log )

        return
      }

      console.log('Successfully connected to database' )

    })

    exports.db = connection

})()
