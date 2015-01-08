(function(){

  var restify = require('restify'),
    Routes = require('./routes')

  var server = restify.createServer({
    name: 'restify-boilerplate',
    version: '0.1.0'
  })

  server.use( restify.bodyParser() )
  server.use( restify.queryParser() )

  server.get( '/users', Routes.users.list )
  server.post( '/users', Routes.users.create )
  server.get( '/users/:id', Routes.users.detail )
  server.put( '/users/:id', Routes.users.update )
  server.del( '/users/:id', Routes.users.delete )

  server.listen( process.env.port, function() {

    var startMessage = process.env.NODE_ENV + ' environment ' + server.name + ' is listening at ' + server.url

    console.log( startMessage )

  })

})()
