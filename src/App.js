import React, {useState} from 'react';
import AddUser from './components/users/AddUsers';
import UsersList from './components/users/UsersList';

function App() {
 
 const [usersList, setUsersList] = useState([]); 
 function addUserHandler(username, InputAge){
  const newUser={
name: username,
age: InputAge,
id: Math.random().toString(),
  }


 setUsersList((prevUsersList) => {
  return [...prevUsersList, newUser];
 })
 }; 
 
  return (
    <div>
<AddUser onAddUser={addUserHandler}></AddUser>
<UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
