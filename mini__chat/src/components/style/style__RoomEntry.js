import styled from 'styled-components';

const StyledRoomEntry = styled.div`
padding: 10%;
width: 80%;
height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
input {
  outline: none;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
}
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
`;

export default StyledRoomEntry;