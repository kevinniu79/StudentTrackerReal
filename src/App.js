import React, {useState} from 'react';
import AddUser from './components/users/AddUser.js';
import UsersList from './components/users/UsersList.js';

function App() {

  const [usersList, setUsersList] = useState([]);
  return (
    <div>
      <AddUser></AddUser>
      <UsersList users={[]}></UsersList>
    </div>
  );
};

export default App;
