import { Link, useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className="p-6 bg-white rounded-md shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Could not find post</h1>
          <p className="mb-4">
            Unfortunately, the requested post could not be found.
          </p>
          <p>
            <Link
              to=".."
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className="p-6 bg-white rounded-md shadow-lg">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          {post.author}
        </p>
        <p className="text-gray-700">{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  const data = await response.json();
  return data.post || null;
}
