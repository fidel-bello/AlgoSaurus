import React from "react";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
