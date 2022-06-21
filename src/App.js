import React from 'react';
import AddUser from './components/users/AddUsers';
import UsersList from './components/users/UsersList';

function App() {
  return (
    <div>
<AddUser></AddUser>
<UsersList users={[]}></UsersList>
    </div>
  );
}

export default App;
