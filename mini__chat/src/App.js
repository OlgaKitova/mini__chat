import './App.css';
import socket from './socket';
import RoomEntry from './components/roomEntry';
import Chat from './components/chat';
import {useReducer} from 'react';
import reducer from './reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, {
    isAuth: false,

  });

  const onLogin = () => {
    
    dispatch({
      type: 'ISAUTH',
      payload: true,
    })
  }
  console.log(state.isAuth)
  return (
    <div className="App">

      {!state.isAuth && <RoomEntry onLogin={onLogin}/>}
      
    </div>
  );
}

export default App;
