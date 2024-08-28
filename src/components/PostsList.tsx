/* 
  24.Exercise 1 - create a component with props
  29.State and conditional content
  30.Adding a Shared Header & more State Management
    32. Handling Form Submission
    Error has occurred with the basic code for the modal "hard coded" , i have to use <modal> from react-dom 
  34. Outputting List Data
  35. Adding a Backend to the React SPA
  36. Sending a POST HTTP Request
  37. Handling Side Effects with useEffect()

 */
import { useEffect, useState } from "react";
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
  // Get all :
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState<Post[]>([]);
  // 2.***Functions***

  const addPostHandler = (postData: Post) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
    // Post :
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      {posts.length > 0 ? (
        <ul className={classes.postsList}>
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                author={post.author}
                text={post.body}
                date={getDate()}
              />
            );
          })}
        </ul>
      ) : (
        <div>
          <h1 className="text4xl font-bold text-center text-orange-500 ">
            There are not post yet
          </h1>
          <h1 className="text4xl font-bold text-center text-black ">
            Start post some!
          </h1>
        </div>
      )}
    </>
  );
}

export default PostsList;
