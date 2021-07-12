// declare variables 
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;

// accept the body of the request
app.use(express.json());


// mini database
const rooms = new Map();

// when making a request when you click the Login button, the onLogin function is triggered
app.get('/rooms/:id', (req, res) => {
  //create room
  const {id: roomId} = req.params;
  // create obj if room => true
  const obj = rooms.has(roomId) ? {
    // pull values
    users: [...rooms.get(roomId).get('users').values()],
    messages: [...rooms.get(roomId).get('messages').values()],
    // or new array
  } : {users: [], messages: []}
  // send obj
  res.json(obj)
});
// create data in the database
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
    // add user in the db
    rooms.get(roomId).get('users').set(socket.id, userName);
    // pull values users
    const users = [...rooms.get(roomId).get('users').values()];

    // send users
    socket.to(roomId).emit('ROOM:SET_USERS', users);
  });

  socket.on('ROOM:NEW_MESSAGE', ({ roomId, userName, text }) => {
    // create in the rooms array messages
    const sendObj = {
      userName,
      text
    };
    // add in the rooms
    rooms.get(roomId).get('messages').push(sendObj)
    //send to the client
    socket.to(roomId).emit('ROOM:NEW_MESSAGE', sendObj);
  });
// call users about leaving the outher users and delete data user
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
