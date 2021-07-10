import React from 'react';
import socket from '../socket';

function Chat () {
  return (
     <div className="chat">
      <div className="chat-users">
        Комната:
        <ul></ul>
      </div>
      <div className="chat-messages">
        <div className="messages"></div>
        <form>
          <textarea
                    className="form-control"
                    rows="3">
         </textarea>
          <button type="button" className="btn btn-send"> Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default Chat;