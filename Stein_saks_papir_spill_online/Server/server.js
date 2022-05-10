const app = require('express')();
const http = require('http').Server(app);
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', function(req, res) {
   res.sendfile('chat.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, function() {
   console.log('listening on *:3000');
});
