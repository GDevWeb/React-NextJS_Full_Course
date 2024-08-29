/*  
  30.Adding a Shared Header & more State Management
  32. Handling Form Submission
  Error has occurred with the basic code for the modal "hard coded" , i have to use <modal> from react-dom 
  39. Understanding & Adding Routing - Install react-router
  40. Adding Routes - "/", "create-post"
  41. Working with Layout Routes 
    1.create layout
    2.nested routes
  42. Refactoring Route Components & More Nesting
  44. Data Fetching via loader()s
    1.use loader feature from react-dom to fetch data posts
    2.refactorize code

*/

import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";
import "./App.css";

function Posts() {
  // 1.***State***

  // 2.***Functions***
  // 3.***Render***
  return (
    <>
      <Outlet />
      <main>
        <h1 className="text-3xl font-bold text-center">
          Hello React and NextJs
        </h1>
        <h2 className="text-3xl font-bold text-center">Awesome Full course</h2>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}
