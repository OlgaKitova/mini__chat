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
    userName: null
  });

  const onLogin = (obj) => {
    
    dispatch({
      type: 'ISAUTH',
      payload: obj,
    });

    socket.emit('ROOM: JOIN', obj);
  }

  

  useEffect(() => {

  socket.on('ROOM: JOINED', (users) => {
    console.log("Новый пользователь вошел в чат", users)
  })

  }, [])

 console.log(state);
  return (
    <div className="App">

      {!state.isAuth ? <RoomEntry onLogin={onLogin}/> : <Chat/>}
      
    </div>
  );
}

export default App;
