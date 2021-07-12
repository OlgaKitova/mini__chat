import React from 'react';
import socket from './socket';
import axios from 'axios';
import RoomEntry from './components/roomEntry';
import Chat from './components/chat';
import {useReducer, useEffect} from 'react';
import reducer from './reducer';

function App() {
  // add data in the state
  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,
    roomId: null,
    userName: null,
    users: [],
    messages: []
  });

  // An async function that is passed by props to roomEntry.js and is called when you click on the "Login" button
  const onLogin = async (obj) => {
  // transmit dispatch about user authentication
    dispatch({
      type: 'ISAUTH',
      payload: obj,
    });
    // sends a socket request with data user and room id
    socket.emit('ROOM:JOIN', obj);
    // get data: users, room  and save messages
    const {data} = await axios.get(`/rooms/${obj.roomId}`);
    // transmit dispatch save state => users and messages
    dispatch({
      type: 'SET_DATA',
      payload: data
    })
  }
 // add message in реу state messages
  const addMessage = (message) => {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: message
    })
  }
  // write users in the state
 const setUsers = (users) => {
  dispatch({
      type: 'SET_USERS',
      payload: users,
    })
 }

 // update new users and messages
  useEffect(() => {

  socket.on('ROOM:SET_USERS', setUsers);
  socket.on('ROOM:NEW_MESSAGE', addMessage)

  }, [])

  return (
    <div className="App">

      {!state.isAuth ? <RoomEntry onLogin={onLogin}/> : <Chat {...state} onAddMessage={addMessage}/>}
      
    </div>
  );
}

export default App;
