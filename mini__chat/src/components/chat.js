import React from 'react';
import socket from '../socket';
import {StyleChat, StyleChatUsers, StyleChatMessages, StyleMessages, StyleMessage} from './style/style__Chat';

function Chat () {
  return (
     <StyleChat>
      <StyleChatUsers>
        Комната:
        <ul></ul>
      </StyleChatUsers>
      <StyleChatMessages>
        <StyleMessages>
          <StyleMessage>
            <p></p>
            <div>
              <span></span>
            </div>
          </StyleMessage>

        </StyleMessages>
        <form>
          <textarea
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