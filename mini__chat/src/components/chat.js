import React from 'react';
import { useState } from 'react';
import socket from '../socket';
import {StyleChat, StyleChatUsers, StyleChatMessages, StyleMessages, StyleMessage} from './style/style__Chat';

function Chat ({users, messages, roomId, userName, onAddMessage}) {
  
    const [messageValue, setMessageValue] = useState('');

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      text: messageValue,
      userName,
      roomId
    });
    onAddMessage({
      text: messageValue,
      userName
    })
    setMessageValue('');
  }

  return (
     <StyleChat>
      <StyleChatUsers>
        <b>Room: {roomId}</b>
        <br/>
        <b>Online User(s): {users.length}</b>
        <ul>
      {users.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </StyleChatUsers>
      <StyleChatMessages>
        <StyleMessages>
          {messages.map((message) => {
              <StyleMessage>
                <p>{message.text}</p>
                <div>
                  <span>{message.userName}</span>
                </div>
              </StyleMessage>

          })}
          
        </StyleMessages>
        <form>
          <textarea
                    value={messageValue}
                    onChange={({target}) => setMessageValue(target.value)}
                    className="form-control"
                    rows="3">
         </textarea>
          <button onClick={onSendMessage}> Отправить</button>
        </form>
      </StyleChatMessages>
    </StyleChat>
  )
}

export default Chat;