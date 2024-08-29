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
  44. Data Fetching via loader()s
    1.use loader feature from react-dom to fetch data posts
    2.refactorize code

 */
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./Post.module.css";

interface Post {
  body: string;
  author: string;
  createdAt: string;
}

function PostsList() {
  // 0.***Hooks*** :
  const posts: Post | null = useLoaderData();
  // 1.***State***
  // 2.***Functions***

  // Create post :

  // 3.***Render***

  return (
    <>
      {posts.length > 0 ? (
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
    </>
  );
}

export default PostsList;
