/*
  18.Building first component
  19.Outputting dynamic value
  20.Reusing Component
  34. Outputting List Data
*/

import { Link } from "react-router-dom";

interface PostProps {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

function Post({ id, author, text, createdAt }: PostProps) {
  return (
    <Link
      to={id}
      className="block mb-4 bg-purple-500 hover:bg-purple-600 transition rounded-lg p-4 text-white shadow-md"
    >
      <div>
        <p className="text-lg font-semibold">
          From: <span>{author}</span>
        </p>
        <p className="mt-2">
          Send: <span>{text}</span>
        </p>
        <div className="mt-4 text-right">
          <p className="text-sm italic">
            <span>{createdAt}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Post;
