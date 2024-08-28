// /*
// 18.Building first component
// 19.Outputting dynamic value
// 20.Reusing Component
// */

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
