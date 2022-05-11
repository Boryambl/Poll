import './App.css';
import Poll from './Poll/index.tsx';
import { Classes } from "@blueprintjs/core";
import React from "react";
import classNames from "classnames";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        
  </header> */}
      <div style={{ width: "55%" }}>
        <Poll/>
      </div>
    </div>
  );
}

export default App;
