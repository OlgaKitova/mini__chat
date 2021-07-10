import React from 'react';
import StyledRoomEntry from './style/style__RoomEntry.js';
import {useState} from 'react-dom';

function RoomEntry () {
  const [roomId, setroomId] = useState('');
  const [userName, setuserName] = useState('');


return (
  <StyledRoomEntry>
    <input
          type="text"
          placeholder="Room entry to ID"
          value={roomId}
      />
      <input
          type="text"
          placeholder="Your name"
          value={userName}
      />
      <button> Enter </button>
  </StyledRoomEntry>
)
}

export default RoomEntry;