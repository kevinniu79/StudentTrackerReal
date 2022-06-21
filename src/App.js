import React, {useState} from 'react';
import AddUser from './components/users/AddUsers';
import UsersList from './components/users/UsersList';

function App() {
 
 const [usersList, setUsersList] = useState([]); 

  return (
    <div>
<AddUser></AddUser>
<UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
