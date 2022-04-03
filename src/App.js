import React, { useState } from "react"; //use state hook used to create and update variables
import DisplayPost from "./Components/DisplayPost/DisplayPost";
import CreatePost from "./Components/CreatePost/CreatePost";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [posts, setPosts] = useState([
    { name: "Earl", post: "How cool is Earl" },
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts]; //Spead operator
    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
      <DisplayPost parentEntries={posts} />
      <CreatePost addNewPostProperty={addNewPost} />
    </div>
  );
}

export default App;
