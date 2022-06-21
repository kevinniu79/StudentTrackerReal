import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function addUserHandler(event) {
    event.preventDefault();

    if(+enteredAge < 1) {
      setError(
        {
         title: "Invalid Age",
         message: "Please enter a valid age (age > 0)."
        }
      );
      return;
    }
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError(
        {
          title: "Invalid input",
          message: "Please enter a valid name and age (non-empty values)."
        }
      );
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }

  return (
    <div>
      <ErrorModal title="An error occurred!" message="Something went wrong!"></ErrorModal>
      <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
    
  );
};

export default AddUser;
