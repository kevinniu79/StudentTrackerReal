import React, {useState} from 'react';
import AddUser from './components/users/AddUser.js';
import UsersList from "./components/users/UsersList.js";

function App() {

  const[usersList, setUsersList] = useState([]);
  
  function addUserHandler(username, inputAge) {
    const newUser = {
    name: username,
    age: inputAge,
    id: Math.random().toString()
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
