import React from 'react';
import { useState, useRef, useEffect } from 'react';
import socket from '../socket';
import {StyleChat, StyleChatUsers, StyleChatMessages, StyleMessages, StyleMessage, StyleMessageLeft} from './style/style__Chat';

function Chat ({users, messages, roomId, userName, onAddMessage}) {
    const [messageValue, setMessageValue] = useState('');
    const messageRef = useRef(null);

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
  useEffect(() => {
    messageRef.current.scroll(0, messageRef.current.scrollHeight)
  }, [messages])

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
        <StyleMessages ref={messageRef}>
          {messages.map((message) => {
            if(message.userName === userName) {
              return (
              <StyleMessage>
                <p>{message.text}</p>
                <div>
                  <span>{message.userName}</span>
                </div>
              </StyleMessage>
          );
            }  else {
              return (
              <StyleMessageLeft>
                <p>{message.text}</p>
                <div>
                  <span>{message.userName}</span>
                </div>
              </StyleMessageLeft>
          );
            }
          })}
          
        </StyleMessages>
        <form>
          <textarea
                    value={messageValue}
                    onChange={({target}) => setMessageValue(target.value)}
                    className="form-control"
                    rows="3">
         </textarea>
          <button onClick={(e) => {
            e.preventDefault();
            onSendMessage();
           }}> Отправить</button>
        </form>
      </StyleChatMessages>
    </StyleChat>
  )
}

export default Chat;