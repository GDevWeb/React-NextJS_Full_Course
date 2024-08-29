/*  
  30.Adding a Shared Header & more State Management
*/

import { MdMessage, MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <header className="flex justify-between items-center p-4 bg-purple-600 text-white shadow-md">
      <h1 className="text-xl font-bold flex items-center space-x-2">
        <MdMessage size={24} />
        <span>React Poster</span>
      </h1>
      <p className="flex items-center space-x-2">
        <MdPostAdd size={18} />
        <Link
          to="/create-post"
          className="px-3 py-2 bg-purple-700 rounded hover:bg-purple-800 transition text-white"
        >
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
