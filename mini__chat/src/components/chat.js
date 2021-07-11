import React from 'react';
import { useState } from 'react';
import socket from '../socket';
import {StyleChat, StyleChatUsers, StyleChatMessages, StyleMessages, StyleMessage} from './style/style__Chat';

function Chat () {
    const [messageValue, setMessageValue] = useState('');
  return (
     <StyleChat>
      <StyleChatUsers>
        <b>Room:</b>
        <b>Online User(s):</b>
        <ul>
          <li>Test User</li>
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