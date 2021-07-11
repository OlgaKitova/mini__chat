const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// accept the body of the request
app.use(express.json());


// database
const rooms = new Map();

app.get('/rooms/:id', (req, res) => {
  const {id: roomId} = req.params;
  const obj = rooms.has(roomId) ? {
    users: [...rooms.get(roomId).get('users').values()],
    messages: [...rooms.get(roomId).get('messages').values()],
  } : {users: [], messages: []}
  res.json(obj)
});

app.post('/rooms', (req, res) => {

  const {roomId, userName} = req.body;

  if(!rooms.has(roomId)) {
    rooms.set(
      roomId, 
      new Map([
        ['users', new Map()],
        ['messages', []]
    ]))
  }
    res.send()
});

//enable socket 
io.on('connection', (socket) => {
  socket.on('ROOM:JOIN', ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get('users').set(socket.id, userName);
    const users = [...rooms.get(roomId).get('users').values()];
    socket.to(roomId).emit('ROOM:SET_USERS', users);
  });

  socket.on('ROOM:NEW_MESSAGE', ({ roomId, userName, text }) => {
    const sendObj = {
      userName,
      text
    };
    rooms.get(roomId).get('messages').push(sendObj)
    socket.to(roomId).emit('ROOM:NEW_MESSAGE', sendObj);
  });

  socket.on('disconnect', () => {
    rooms.forEach((value, roomId) => {
      if (value.get('users').delete(socket.id)) {
        const users = [...value.get('users').values()];
        socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users);
      }
    });
  });

});




server.listen(PORT, (err) => {
  if(err) throw Error(err);
  console.log(`Сервер запущен на порту ${PORT}`)
});
