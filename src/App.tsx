import React from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

// Components
import Header from "./components/header/header";
import HomePage from "./pages/home/home";
import Test from "./pages/test/test";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
