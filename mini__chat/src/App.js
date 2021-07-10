import './App.css';
import socket from './socket';
import RoomEntry from './components/roomEntry';
import Chat from './components/chat';

function App() {
  return (
    <div className="App">
      <RoomEntry/>
    </div>
  );
}

export default App;
