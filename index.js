(function(){

  var restify = require('restify'),
    Routes = require('./routes')

  var server = restify.createServer({
    name: 'restify-boilerplate',
    version: '0.0.1'
  })

  server.use( restify.bodyParser() )
  server.use( restify.queryParser() )

  server.get( '/users', Routes.users.list )
  server.post( '/users', Routes.users.create )
  server.get( '/users/:id', Routes.users.detail )
  server.put( '/users/:id', Routes.users.udpate )
  server.del( '/users/:id', Routes.users.delete )

  var port = parseInt( process.argv[2] )

  server.listen( port, function() {

    var startMessage = process.env.NODE_ENV + ' environment ' + server.name + ' is listening at ' + server.url

    console.log( startMessage )

  })

})()
