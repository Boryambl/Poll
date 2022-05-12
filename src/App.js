import './App.css';
import Poll from './Poll/index.tsx';
import React from "react";
function App() {
  return (
    <div className="App">
      <div style={{ width: "55%" }}>
        <Poll/>
      </div>
    </div>
  );
}

export default App;
