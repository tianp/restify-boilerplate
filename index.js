(function(){

  var restify = require('restify')

  var server = restify.createServer({
    name: 'restify-boilerplate',
    version: '0.0.1'
  })

  server.use( restify.bodyParser() )
  server.use( restify.queryParser() )

  var port = parseInt( process.argv[2] )

  server.listen( port, function() {

    var startMessage = process.env.NODE_ENV + ' environment ' + server.name + ' is listening at ' + server.url

    console.log( startMessage )

  })

})()
