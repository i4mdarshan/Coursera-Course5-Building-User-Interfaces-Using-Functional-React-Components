import { useEffect, useState } from 'react';
import FriendList from './FriendList';
import ConversationThread from './ConversationThread';
import axios from 'axios';
import './App.css';

function App() {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState({});

  useEffect(() => {
    async function fetchFriends() {
      const friendsResponse = await axios(`http://localhost:3001/friends`);
      setFriends(friendsResponse.data);
    }

    fetchFriends();
    // Make axios call to get all the friends and call setFriends.
  }, []);

  const showConversationThread = (friend) => {
    setSelectedFriend(friend);
  };

  return (
    <div className="conversation-container">
      <header className="App-header">Insta Chat</header>
      <div className="container">
        <FriendList friends={friends} onFriendSelected={showConversationThread}></FriendList>
        <ConversationThread friend={selectedFriend}></ConversationThread>
      </div>
    </div>
  );
}

export default App;
