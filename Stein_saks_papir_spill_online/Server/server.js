const express = require('express')
const app = express()
const port = 3000
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('chat-example/chat.html');
});

http.listen(3000, function() {
   console.log('listening on *:3000');
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

//Whenever someone disconnects this piece of code executed
socket.on('disconnect', function () {
    console.log('A user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

// This will emit the event to all connected sockets
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

io.on('connection', (socket) => {
  socket.broadcast.emit('hi');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
