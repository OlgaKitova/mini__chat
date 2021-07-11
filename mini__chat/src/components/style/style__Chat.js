import styled from 'styled-components';

export const StyleChat = styled.div`
 display: flex;
  height: 500px;
  border: 1px solid rgba(159, 183, 197, 0.2);
  border-radius: 8px;
  overflow: hidden;
`;
export const StyleChatUsers = styled.div`
  border-right: 1px solid rgba(159, 183, 197, 0.1);
  padding: 20px;
  width: 200px;
  background-color: #f6f9fa;
  ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul > li {
  margin-top: 10px;
  border-radius: 3px;
  background-color: #fff;
  padding: 8px 14px;
  box-shadow: 0 3px 5px rgba(159, 183, 197, 0.1);
  font-weight: 500;
}
`;

export const StyleChatMessages = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 30px;
  div {
    flex: 1;
    height: calc(100% - 155px);
  }
  form {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  button {
  padding: 5px 10px;
  cursor: pointer;
  border: none; 
  border-radius: 5px;
  font-size: 1.15rem;
  outline: none;
  background: #000;
  color: #FFF;
  transition: all 0.3 easy-in;
}
button:hover {
  transition: all 0.3 easy-in;
  background: #333;
}
}

form textarea {
  width: 100%;
  margin-bottom: 10px;
}
`;

export const StyleMessages = styled.div`
  flex: 1;
  height: calc(100% - 155px);
  overflow: auto;
`;


export const StyleMessage = styled.div`
 margin-bottom: 20px;

 p {
  display: inline-flex;
  border-radius: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #7160ff;
  padding: 10px 15px 15px;
  color: #fff;
  margin-bottom: 2px;
 }
 div > span {
  opacity: 0.5;
  font-size: 14px;
 }

`;