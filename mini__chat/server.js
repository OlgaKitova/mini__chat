const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

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
io.on('connection', (socket) => {

  socket.on('ROOM: JOIN', ({roomId, userName}) => {
    socket.join(roomId);
    [...rooms.get(roomId).get("users")].set(socket.id, userName);
    const users =  [...rooms.get(roomId).get("users").values()];
    socket.to(roomId).broadcast.emit('ROOM: JOINED', users)
  })

  console.log("User connected", socket.id)
})


server.listen(PORT, (err) => {
  if(err) throw Error(err);
  console.log("Сервер запущен на порту")
});
