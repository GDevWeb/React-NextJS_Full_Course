/*  
  30.Adding a Shared Header & more State Management
*/

import { MdMessage, MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p className={classes.button}>
        <MdPostAdd size={18} />
        <Link to="/create-post">New Post</Link>
      </p>
    </header>
  );
}

export default MainHeader;
