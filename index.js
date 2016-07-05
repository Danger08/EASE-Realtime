var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'easetech',
  password : 'summer08',
  database : 'easetech'
});
connection.connect();
//
users = [];
connection = [];
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('chat message' , 'a user conected');


  socket.on('disconnect', function(){
  console.log('user disconnected');
  });

  socket.on('chat message' , function(msg){
    io.emit('chat message' , msg);
  });
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});
