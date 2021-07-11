import './App.css';
import socket from './socket';
import axios from 'axios';
import RoomEntry from './components/roomEntry';
import Chat from './components/chat';
import {useReducer, useEffect} from 'react';
import reducer from './reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,
    roomId: null,
    userName: null,
    users: [],
    messages: []
  });

  const onLogin = async (obj) => {
    
    dispatch({
      type: 'ISAUTH',
      payload: obj,
    });

    socket.emit('ROOM:JOIN', obj);
    const {data} = await axios.get(`/rooms/${obj.roomId}`);
    setUsers(data.users);
    console.log(data.users);
  }

  const addMessage = (message) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message
    })
  }
 const setUsers = (users) => {
  dispatch({
      type: 'SET_USERS',
      payload: users,
    })
 }

  useEffect(() => {

  socket.on('ROOM:SET_USERS', setUsers);
  socket.on('ROOM:NEW_MESSAGE', addMessage)

  }, [])

 console.log(state);
  return (
    <div className="App">

      {!state.isAuth ? <RoomEntry onLogin={onLogin}/> : <Chat {...state} onAddMessage={addMessage}/>}
      
    </div>
  );
}

export default App;
