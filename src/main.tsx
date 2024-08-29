/* 
  40. Adding Routes - "/", "create-post"
  42. Refactoring Route Components & More Nesting
    1.remove App into /routes and rename it in "Posts"
    2.refactorize components 
    3.create a nested route "/create-post"
  44. Data Fetching via loader()s
    1.use loader feature from react-dom to fetch data posts
    2.refactorize code

*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetail";
import Posts, { loader as postLoader } from "./routes/Posts";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          { path: ":id", element: <PostDetails />, loader: postDetailsLoader },
        ],
      },
      { path: "/hello", element: <h1>Hello Page</h1> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
