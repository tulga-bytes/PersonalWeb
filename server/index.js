var express = require('express')
var http = require('http')
var config = require('./config')
var path = require('path')
var morgan = require('morgan')
var app = express()

var fs = require('fs')

var server = http.createServer(app)

server.listen(config.port, function(){
  console.log('Express server listening on %d port', config.port)
})

app.use(morgan('dev'));

app.use(express.static(path.join(config.root, '/client/dist')))
app.use(express.static(path.join(config.root, '/client/src')))

var distIndex = path.resolve(config.root, 'client/dist/index.html')
var srcIndex = path.resolve(config.root, 'client/src/index.html')

app.route('/*')
  .get(function(req, res) {
    var indexFile = fs.existsSync(distIndex) ? distIndex : srcIndex
    return res.sendFile(indexFile, function(err) {
      if (err) {
        res.status(err.status || 500).end()
      }
    });
  });
