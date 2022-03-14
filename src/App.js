import React from "react";
import "./App.css";
import AddTache from "./Components/AddTache";
import ListeTaches from "./Components/ListeTaches";

function App() {
  return (
    <div className="App">
      <AddTache />
      <ListeTaches />
    </div>
  );
}

export default App;
