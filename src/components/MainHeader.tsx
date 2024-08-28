/*  
  30.Adding a Shared Header & more State Management
*/

import { MdMessage, MdPostAdd } from "react-icons/md";
import classes from "./MainHeader.module.css";

interface MainHeaderProps {
  onCreatePost: () => void;
}

function MainHeader({ onCreatePost }: MainHeaderProps) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button type="button" className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
