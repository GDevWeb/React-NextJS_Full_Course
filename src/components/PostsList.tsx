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
  38. Handle Loading State

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
  createdAt: string;
}

function PostsList({ isPosting, onStopPosting }: PostsListProps) {
  // 1.***State***
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  // const [errorFetching, setErrorFetching] = useState(false);
  // 2.***Functions***
  // Get all :
  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();

      // if (!response.ok) {
      //   console.warn(`Error fetching data posts ...`);
      //   setErrorFetching(true);
      //   setIsFetching(false);
      //   setPosts([]);
      // }
      setPosts(data.posts);
      setIsFetching(false);
    };
    fetchPosts();
  }, []);

  // Create post :
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

  // 3.***Render***

  return (
    <>
      {!isFetching && isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 ? (
        <ul className={classes.postsList}>
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                author={post.author}
                text={post.body}
                createdAt={post.createdAt}
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
      {isFetching && (
        <h1 className="text4xl font-bold text-center text-orange-500 ">
          Loading posts...
        </h1>
      )}
      {/* {errorFetching && (
        <h1 className="text4xl font-bold text-center text-red-500 ">
          Error fetching data posts ...
        </h1>
      )} */}
    </>
  );
}

export default PostsList;
