/*
  18.Building first component
  19.Outputting dynamic value
  20.Reusing Component
  34. Outputting List Data
*/

interface PostProps {
  author: string;
  text: string;
  createdAt: string;
}

import classes from "./Post.module.css";

function Post({ author, text, createdAt }: PostProps) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>
        From : <span>{author}</span>
      </p>
      <p className={classes.text}>
        Send : <span>{text}</span>
      </p>

      <div className="footerPost">
        <p className={classes.createdAt}>
          <span>{createdAt}</span>
        </p>
      </div>
    </div>
  );
}

export default Post;
