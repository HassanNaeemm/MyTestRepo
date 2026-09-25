var express = require('express')
var server = express()

server.get('/', (req, res) => {
  res.send('Hello, World!')
})

module.exports = server