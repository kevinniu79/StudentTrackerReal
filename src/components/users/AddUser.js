import React, {useState} from 'react';
import './AddUser.css';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';

const AddUser = (props) => {

    const[enteredUsername, setEnteredUsername] = useState("");
    const[enteredAge, setEnteredAge] = useState("");

    function usernameChangeHandler(event){
        setEnteredUsername(event.target.value);
    }

    function ageChangeHandler(event){
        setEnteredAge(event.target.value);
    }

    function addUserHandler(event){
        event.preventDefault();
        if(+enteredAge<1) {
            return;
        }
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        console.log(enteredUsername, enteredAge);

        setEnteredUsername("");
        setEnteredAge("");
    }

    return(
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}></input>

                <label htmlFor='age'>Age</label>
                <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler}></input>

                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );

};

export default AddUser;