var express = require('express')
var http = require('http')
var config = require('./config')
var path = require('path')
var morgan = require('morgan')
var app = express()

var server = http.createServer(app)

server.listen(config.port, function(){
  console.log('Express server listening on %d port', config.port)
})

app.use(express.static(path.join(config.root, '/client/dist')))
app.use(express.static(path.join(config.root, '/client/src')))

app.route('/*')
  .get(function(req, res) {
    console.log('new Request!')
    return res.sendFile(path.resolve(config.root, 'client/src/index.html'));
  });

app.use(morgan('dev'));
