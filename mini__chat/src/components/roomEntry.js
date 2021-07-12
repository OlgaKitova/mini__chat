import React from 'react';
import StyledRoomEntry from './style/style__RoomEntry.js';
import {useState} from 'react';
import axios from 'axios';


function RoomEntry ({onLogin}) {

  // get room id and user name and write in state
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');

  // async func in click on the button
  const onEnter = async () => {
    // field check
    if( !roomId || !userName) {
      return alert("Вы заполнили не все поля");
      
    }
    // create obj data
    const obj = {
      roomId,
      userName
    }

    // send obj in the server
    await axios.post('/rooms', obj);

    // call func from app.js
    onLogin(obj)
  }


return (
  <StyledRoomEntry>
    <input
          type="text"
          placeholder="Номер комнаты чата"
          value={roomId}
          onChange={({target}) => setRoomId(target.value)}
          required
          title="Обязательное поле"
      />
      <input
          type="text"
          placeholder="Ваше имя"
          value={userName}
          onChange={({target}) => setUserName(target.value)}
          required
          title="Обязательное поле"
      />
      <button onClick={onEnter}> 
      Войти</button>
  </StyledRoomEntry>
)
}

export default RoomEntry;