import React from 'react';
import StyledRoomEntry from './style/style__RoomEntry.js';
import {useState} from 'react';
import axios from 'axios';


function RoomEntry ({onLogin}) {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEnter = async () => {
    setIsLoading(true);

    const obj = {
      roomId,
      userName
    }
    await axios.post('/rooms', obj);
    onLogin(obj)
  }


return (
  <StyledRoomEntry>
    <input
          type="text"
          placeholder="Room entry to ID"
          value={roomId}
          onChange={({target}) => setRoomId(target.value)}
          required
          title="Обязательное поле"
      />
      <input
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={({target}) => setUserName(target.value)}
          required
          title="Обязательное поле"
      />
      <button disabled={isLoading} onClick={onEnter}> 
      {isLoading ? 'Log In' : 'Sign In' } </button>
  </StyledRoomEntry>
)
}

export default RoomEntry;