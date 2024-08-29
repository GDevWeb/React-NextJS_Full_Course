# Mini React Poster App with Dummy Backend

This is a simple React application with a dummy backend built using Express.js. The backend serves as a RESTful API to manage posts, and the frontend is a React application that interacts with this backend.

## Project Structure

- **dummy-backend/**: Contains the Express.js server that acts as the backend API.
  - **data/posts.js**: Contains functions for reading and writing posts to a JSON file.
  - **app.js**: The main Express server configuration file.
  - **posts.json**: The JSON file used for storing posts.
- **src/**: Contains the React application code (not shown in the screenshot but assumed to be in the main project directory).

## Prerequisites

- Node.js installed on your machine.
- Yarn or npm for package management.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Navigate to the `dummy-backend` Directory:**

   ```bash
   cd dummy-backend
   ```

3. **Install Backend Dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Start the Backend Server:**

   ```bash
   node app.js
   ```

   The backend server will start on port `8080`.

5. **Start the Frontend (Assuming React):**
   - Open a new terminal and navigate to the root project directory.
   - Install the frontend dependencies:
     ```bash
     npm install
     ```
     or
     ```bash
     yarn install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```
     or
     ```bash
     yarn start
     ```

## Backend API Endpoints

### GET `/posts`

- **Description**: Fetches all stored posts.
- **Response**: Returns a JSON array of posts.

### GET `/posts/:id`

- **Description**: Fetches a single post by ID.
- **Response**: Returns a JSON object containing the requested post.

### POST `/posts`

- **Description**: Stores a new post.
- **Body Parameters**:
  - `body` (string): The content of the post.
  - `author` (string): The name of the author.
- **Response**: Returns a confirmation message and the newly created post.

## Notes

- **CORS**: The backend has CORS headers configured to allow requests from any origin. This is necessary when the frontend and backend are served from different domains during development.

- **Persistent Storage**: The posts are stored in a `posts.json` file within the `dummy-backend` directory. This allows you to simulate a persistent data store.

## How It Works

- The backend reads from and writes to the `posts.json` file to manage posts.
- The frontend interacts with this backend to create, read, and display posts.

## Example of Adding a Post

To add a new post via the backend, you can send a POST request to `/posts` with the following JSON body:

```json
{
  "body": "This is a new post!",
  "author": "John Doe"
}
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to adjust the README content to better fit your specific project setup or to add more details as necessary!
