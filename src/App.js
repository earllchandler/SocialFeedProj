import React, { useState } from "react"; //use state hook used to create and update variables
import DisplayPost from "./Components/DisplayPost/DisplayPost";
import CreatePost from "./Components/CreatePost/CreatePost";

function App() {
  const [entries, setEntries] = useState([
    { Name: "Earl", Post: "How cool is Earl" },
  ]);

  return (
    <div>
      <DisplayPost parentEntries={entries} />
      <CreatePost />
    </div>
  );
}

export default App;
