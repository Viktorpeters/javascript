const express = require('express');
const { createServer } = require('http');
const app = express();
const server = createServer(app);
const PORT = 3000;
const { join } = require('path');
const { Server } = require('socket.io')
const io = new Server(server)

app.use('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});


io.on('connection', (socket) => {
    console.log('a user connected');
})



server.listen(PORT, () => {
  // server listening
});
