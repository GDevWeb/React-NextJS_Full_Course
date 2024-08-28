/*  
  30.Adding a Shared Header & more State Management
  32. Handling Form Submission
  Error has occurred with the basic code for the modal "hard coded" , i have to use <modal> from react-dom 

*/

import { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  // 1.***State***
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [test, setTest] = useState("");
  // 2.***Functions***
  const showModalHandler = () => {
    setModalIsVisible(true);
  };
  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const testOnChangeHandler = (e) => {
    setTest(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test:", test);
  };
  // 3.***Render***
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <h1 className="text-3xl font-bold text-center">
          Hello React and NextJs
        </h1>
        <h2 className="text-3xl font-bold text-center">Awesome Full course</h2>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
