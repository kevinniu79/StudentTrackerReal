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
active: true  
  }


 setUsersList((prevUsersList) => {
  return [...prevUsersList, newUser];
 })
 }; 

 function deleteUserHandler(userId){
  const userIndex = usersList.findIndex(user => user.id === userId);  
  const updatedUsers = [...usersList]; 
  updatedUsers[userIndex].active = false; 
  setUsersList(updatedUsers); 
 }

  return (
    <div>
<AddUser onAddUser={addUserHandler}></AddUser>
<UsersList users={usersList} deleteUser={deleteUserHandler}></UsersList>
    </div>
  );
}

export default App;
