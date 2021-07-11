import React from 'react';
import { useState } from 'react';
import socket from '../socket';
import {StyleChat, StyleChatUsers, StyleChatMessages, StyleMessages, StyleMessage} from './style/style__Chat';

function Chat ({users, messages, roomId}) {
    const [messageValue, setMessageValue] = useState('');
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
          <StyleMessage>
            <p>Привет! Как дела?</p>
            <div>
              <span>Коля</span>
            </div>
          </StyleMessage>

        </StyleMessages>
        <form>
          <textarea
                    value={messageValue}
                    onChange={({target}) => setMessageValue(target.value)}
                    className="form-control"
                    rows="3">
         </textarea>
          <button> Отправить</button>
        </form>
      </StyleChatMessages>
    </StyleChat>
  )
}

export default Chat;