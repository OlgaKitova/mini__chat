
const express = require('express');
const socket = require('socket.io');

const PORT = process.env.PORT || 3000;
const app = express();
const server = require('http').Server(app);
const io = socket(server);

// accept the body of the request
app.use(express.json())

// database
const rooms = new Map();

app.get('/rooms', (req, res) => {
  res.json(rooms)
});

app.post('/rooms', (req, res) => {

  const {roomId, useName} = req.body;

  if(!rooms.has(roomId)) {
    rooms.set(roomId, new Map([
      ["users", new Map()],
      ["messages", []]
    ]))
  }
    res.send("отправлен")
});

//enable socket 
io.on('connection', () => {
  console.log("User connected")
})


server.listen(PORT, (err) => {
  if(err) throw Error(err);
  console.log("Сервер запущен на порту")
});
