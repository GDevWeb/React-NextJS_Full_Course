/* 
  24.Exercise 1 - create a component with props
  29.State and conditional content
  30.Adding a Shared Header & more State Management
    32. Handling Form Submission
    Error has occurred with the basic code for the modal "hard coded" , i have to use <modal> from react-dom 


 */
import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./Post.module.css";

interface PostsListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

interface Post {
  body: string;
  author: string;
}

function PostsList({ isPosting, onStopPosting }: PostsListProps) {
  // 1.***State***
  const [posts, setPosts] = useState<Post[]>([]);
  // 2.***Functions***

  const addPostHandler = (postData: Post) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  const getDate = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentHours = new Date().toLocaleTimeString();

    const currentDateMessage = `Send the ${currentDate} at ${currentHours}`;

    return currentDateMessage;
  };
  // 3.***Render***

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.postsList}>
        <Post author={"enteredAuthor"} text={"enteredBody"} date={getDate()} />
      </ul>
    </>
  );
}

export default PostsList;
