import React from "react";
import "./App.css";
import ImportHistory from "./components/importHistory.jsx";
import ImportSolde from "./components/importSolde.jsx";

function App() {
  return (
  <div className="App">

    <ImportSolde />
    <ImportHistory />
  
  </div>
  );
}

export default App;