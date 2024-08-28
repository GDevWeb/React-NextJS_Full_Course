// /*
// 18.Building first component
// 19.Outputting dynamic value
// 20.Reusing Component
// */

// const names = ["Océane", "Annabeth"];

// const text = [
//   "Play with me",
//   "I'm hungry",
//   "I'm borrowing",
//   "I want eat a breakfast",
// ];

// function Post() {
//   const chosenNames = Math.random() > 0.5 ? names[0] : names[1];
//   const chosenMessages = Math.floor(Math.random() * text.length);
//   return (
//     <div id="postContainer" className="mb-2 border border-orange-600">
//       <p>From : {chosenNames}</p>
//       <p>{text[chosenMessages]}</p>
//     </div>
//   );
// }

// export default Post;

/* 
21.Passing Data to components with Props
22.CS Styling & CSS module 
  1. avoid styling inline
  2. use CSS in external styleSheet
  3. alternatively use a CSS framework like tailwind
  4. use CSS module is powerful to handle style of bigger application
  But for the actual tutorial, look up CSS and CSS modules

*/

interface PostProps {
  author: string;
  text: string;
  date: string;
}

import classes from "./Post.module.css";

function Post({ author, text, date }: PostProps) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>
        From : <span>{author}</span>
      </p>
      <p className={classes.text}>
        Send : <span>{text}</span>
      </p>

      <div className="footerPost">
        <p className={classes.date}>
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
}

export default Post;
