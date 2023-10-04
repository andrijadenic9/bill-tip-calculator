import './App.css';
import Bill from './Bill';
import Message from './Message';
import Tip from './Tip';
import Reset from './Reset';
import { useState } from 'react';

function App() {
  const [bill, setBill] = useState('');
  const [myTip, setMyTip] = useState('');
  const [friendTip, setFriendTip] = useState('');

  return (
    <div className='container'>
      <Bill
        bill={bill}
        setBill={setBill} />
      <Tip
        tip={myTip}
        onSelect={setMyTip}>
        How did you like the service?
      </Tip>
      <Tip
        tip={friendTip}
        onSelect={setFriendTip}>
        How did your friend like the service?
      </Tip>
      <Message
        bill={bill}
        myTip={myTip}
        friendTip={friendTip} />
      <Reset
        setBill={setBill}
        setMyTip={setMyTip}
        setFriendTip={setFriendTip} />
    </div>
  );
}

export default App;
