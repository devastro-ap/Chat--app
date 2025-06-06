const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Serve static files from 'public' folder
app.use(express.static('public'));

// Socket.io logic
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(process.env.PORT || 3000, () => {
  console.log('Server running');
});
