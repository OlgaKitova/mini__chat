import './App.css';
import socket from './socket';
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

  const onLogin = (obj) => {
    
    dispatch({
      type: 'ISAUTH',
      payload: obj,
    });

    socket.emit('ROOM: JOIN', obj);
  }

  
 const setUsers = (users) => {
  dispatch({
      type: 'SET_USERS',
      payload: users,
    })
 }

  useEffect(() => {

  socket.on('ROOM: JOINED', setUsers)

  socket.on('ROOM: SET_USERS', setUsers)

  }, [])

 console.log(state);
  return (
    <div className="App">

      {!state.isAuth ? <RoomEntry onLogin={onLogin}/> : <Chat {...state}/>}
      
    </div>
  );
}

export default App;
