/* 
  24.Preparing th app for the state management
  25.Adding event listener
  26.Working with the state
  27.Lifting State up
  31.Adding form buttons
  32. Handling Form Submission
    Error has occurred with the basic code for the modal "hard coded" , i have to use <modal> from react-dom 
  43. Linking & Navigating
      1.add link component from react-router-dom
      2.refactorize code
      

*/

import { Form, Link, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  // 0.***Hooks***
  // 1.***State***
  // 2.***Functions***
  // const getDate = () => {
  //   const currentDate = new Date().toLocaleDateString();
  //   const currentHours = new Date().toLocaleTimeString();

  //   const currentDateMessage = `Send the ${currentDate} at ${currentHours}`;

  //   return currentDateMessage;
  // };

  // 3.***Render***
  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <div>
          <label htmlFor="body">Text</label>
          <textarea name="body" id="body" required rows={3} />
        </div>
        <div>
          <label htmlFor="author">Your Name</label>
          <input type="text" name="author" id="author" required />
        </div>
        <p className={classes.actions}>
          <button type="button">
            <Link to=".." type="button" className={classes.button}>
              Cancel
            </Link>
          </button>
          <button type="submit">Send</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); //under the hood : we create a simple object {key : value}
  // Post :
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
