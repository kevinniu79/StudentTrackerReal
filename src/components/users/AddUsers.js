import React, {useState} from "react";
import './AddUsers.css'; 
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState(""); 
    const [enteredAge, setEnteredAge] = useState(""); 

    function addUserHandler(event){
        event.preventDefault(); 

        if(+enteredAge < 1){
            return; 
        }
        if(enteredUsername.trim().length === 0 || enteredAge.trim() === 0){
            return; 
        }
        console.log(enteredUsername, enteredAge)

        setEnteredAge(""); 
        setEnteredUsername(""); 
    }

    function usernameChangeHandler(event){
        setEnteredUsername(event.target.value); 
    }

    function ageChangeHandler(event){
        setEnteredAge(event.target.value); 
    }


    return(
        <Card>
      <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="sumbit">Add User</Button>
        </form>

        </Card>
  

    ); 

};

export default AddUser;  