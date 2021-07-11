import React from 'react';
import StyledRoomEntry from './style/style__RoomEntry.js';
import {useState} from 'react';
import axios from 'axios';


function RoomEntry ({onLogin}) {
  const [roomId, setroomId] = useState('');
  const [userName, setuserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEnter = async () => {
    setIsLoading(true);
    await axios.post('/rooms', {
      roomId,
      userName
    }).then(onLogin)
  }


return (
  <StyledRoomEntry>
    <input
          type="text"
          placeholder="Room entry to ID"
          value={roomId}
          onChange={({target}) => setroomId(target.value)}
          required
          title="Обязательное поле"
      />
      <input
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={({target}) => setuserName(target.value)}
          required
          title="Обязательное поле"
      />
      <button disabled={isLoading} onClick={onEnter}> 
      {isLoading ? 'Log In' : 'Sign In' } </button>
  </StyledRoomEntry>
)
}

export default RoomEntry;