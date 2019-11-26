let express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
let io = require('socket.io').listen(http);

app.use(express.static('public'));
express.static('public');

require('./neuro-mind')(io);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
