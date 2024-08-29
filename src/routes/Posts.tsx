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

function Posts() {
  return (
    <>
      <Outlet />
      <main className="container mx-auto grid lg:grid-cols-3 gap-4 p-4">
        <section className="lg:col-span-1 flex flex-col items-center justify-center bg-orange-400 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-white text-center">
            Hello React and NextJs
          </h1>
          <h2 className="text-2xl font-semibold text-white text-center mt-4">
            React Crash Course
          </h2>
        </section>
        <section className="lg:col-span-2 grid grid-cols-1 gap-4">
          <PostsList />
        </section>
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
