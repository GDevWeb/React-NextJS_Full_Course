/* 
  24.Preparing th app for the state management
  25.Adding event listener
  26.Working with the state
  27.Lifting State up
  31.Adding form buttons
  32. Handling Form Submission
    Error has occurred with the basic code for the modal "hard coded" , i have to use <modal> from react-dom 

*/

import { useState } from "react";
import classes from "./NewPost.module.css";

interface NewPostProps {
  onCancel: () => void;
  onAddPost: (postData: { body: string; author: string }) => void;
}

function NewPost({ onCancel, onAddPost }: NewPostProps) {
  // 1.***State***
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  // 2.***Functions***
  const onBodyChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setEnteredBody(value);
  };
  const onAuthorChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setEnteredAuthor(value);
  };
  const getDate = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentHours = new Date().toLocaleTimeString();

    const currentDateMessage = `Send the ${currentDate} at ${currentHours}`;

    return currentDateMessage;
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
      createdAt: getDate(),
    };
    onAddPost(postData);
    console.log(postData);
    // onCancel();
  };

  // 3.***Render***
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="enteredBody">Text</label>
          <textarea
            name="enteredBody"
            id="enteredBody"
            required
            rows={3}
            onChange={onBodyChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="enteredAuthor">Your Name</label>
          <input
            type="text"
            name="enteredAuthor"
            id="enteredAuthor"
            required
            onChange={onAuthorChangeHandler}
          />
        </div>
        <p className={classes.actions}>
          <button type="submit">Send</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </p>
      </form>
    </>
  );
}

export default NewPost;
