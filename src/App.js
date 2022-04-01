import React, { useState } from "react"; //use state hook used to create and update variables
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";

function App() {
  const [entries, setEntries] = useState([
    { Name: "Earl", Post: "How cool is Earl" },
  ]);

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
