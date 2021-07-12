import React from 'react';
import { useState, useRef, useEffect } from 'react';
import socket from '../socket';
import {StyleChat, StyleChatUsers, StyleChatMessages, StyleMessages, StyleMessage, StyleMessageLeft} from './style/style__Chat';

function Chat ({users, messages, roomId, userName, onAddMessage}) {
  // add state value input to textarea
    const [messageValue, setMessageValue] = useState('');
  // hook is needed to fwt to the last message
    const messageRef = useRef(null);
  // click 
  const onSendMessage = () => {
    // send a socket request to the server with the data
    socket.emit('ROOM:NEW_MESSAGE', {
      text: messageValue,
      userName,
      roomId
    });
    // add data to state
    onAddMessage({
      text: messageValue,
      userName
    })
    //clear textarea
    setMessageValue('');
  }
  // follow the messages and auto scroll down
  useEffect(() => {
    messageRef.current.scroll(0, messageRef.current.scrollHeight)
  }, [messages])

  return (
     <StyleChat>
      <StyleChatUsers>
        <b>Комната чата № {roomId}</b>
        <br/>
        <br></br>
        <b>Сейчас онлайн: ({users.length})</b>
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