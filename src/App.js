import React, { useState } from "react"; //use state hook used to create and update variables
import DisplayPost from "./Components/DisplayPost/DisplayPost";
import CreatePost from "./Components/CreatePost/CreatePost";
import NavBar from "./Components/NavBar/NavBar";
import "./Components/App.css";
function App() {
  const [posts, setPosts] = useState([
    { name: "Earl", post: "How cool is Earl" },
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts]; //Spead operator
    setPosts(tempPosts);
  }

  return (
    <div className="container-fluid">
      <NavBar />
      <div classname="row">
        <div className="border-box">
          <CreatePost addNewPostProperty={addNewPost} />
        </div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>
      <div className="border-box">
        <DisplayPost parentEntries={posts} />
      </div>
    </div>
  );
}

export default App;
