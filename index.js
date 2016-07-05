var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
users = [];
connection = [];
app.get('/', function(req, res){
  res.sendFile('index.html');
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

http.listen(3000, function(){
  console.log('listening on *:3000');
});
