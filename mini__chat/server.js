
const express = require('express');
const socket = require('socket.io');

const PORT = process.env.PORT || 3000;
const app = express();
const server = require('http').Server(app);
const io = socket(server);

// database
const rooms = new Map();

app.get('/rooms', (req, res) => {
  res.json(rooms)
});

app.post('/rooms', (req, res) => {
  console.log("Hello world")
});

//enable socket 
io.on('connection', () => {
  console.log("User connected")
})


server.listen(PORT, (err) => {
  if(err) throw Error(err);
  console.log("Сервер запущен на порту")
});
