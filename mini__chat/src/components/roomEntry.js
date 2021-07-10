import React from 'react';
import StyledRoomEntry from './style/style__RoomEntry.js';

function RoomEntry () {
return (
  <StyledRoomEntry>
    <input
          type="text"
          placeholder="Room entry to ID"
      />
      <input
          type="text"
          placeholder="Your name"
      />
      <button> Enter </button>
  </StyledRoomEntry>
)
}

export default RoomEntry;