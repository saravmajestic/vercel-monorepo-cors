import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const onClick = async () => {
    const headers: HeadersInit = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    const response = await fetch(
      `http://localhost:5005/api/serverless-example/handler`,
      {
        method: "GET",
        mode: "cors",
        headers,
      }
    );

    if (!response.ok) {
      alert(`Error: ${response.statusText}`);
    }

    alert(await response.text());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className="App-link" onClick={onClick}>
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
