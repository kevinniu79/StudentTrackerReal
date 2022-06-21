import React from 'react';
import './AddUser.css';
import Card from '../UI/Card.js'

const AddUser = (props) => {

    function addUserHandler(event){
        event.preventDefault();
    }

    return(
        <Card>
        <form onSubmit={addUserHandler}> 
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (years)</label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
        </Card>
    );

};

export default AddUser;