import React from "react";
import './AddUsers.css'; 
import Card from "../UI/Card";

const AddUser = props => {

    function addUserHandler(event){
        event.preventDefault(); 
    }

    return(
        <Card>
      <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"></input>
            <button type="sumbit">Add User</button>
        </form>

        </Card>
  

    ); 

};

export default AddUser;  