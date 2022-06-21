import React, {useState} from "react";
import './AddUsers.css'; 
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState(""); 
    const [enteredAge, setEnteredAge] = useState(""); 
    const [error, setError] = useState(); 
   
    function addUserHandler(event){
        event.preventDefault(); 

        if(+enteredAge < 1){
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (age >0)"
            }); 
            return; 
        }
        if(enteredUsername.trim().length === 0 || enteredAge.trim() === 0){
            setError({
                title: "Invalid input", 
                message: "Please enter a valid nameand age (non-empty values"
            })
            return; 
        }
        props.onAddUser(enteredUsername, enteredAge); 

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
        <div>     
            <ErrorModal title = "An error occurred" message="Something went wrong"></ErrorModal>
            <Card>
      <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="sumbit">Add User</Button>
        </form>

        </Card>
        </div>
   
  

    ); 

};

export default AddUser;  