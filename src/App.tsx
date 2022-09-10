import React from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

// Components
import AlgorithmVisualizer from "./components/graph/graph";
import Header from "./components/header/header";
import PathFinder from "./components/pathfinder/pathfinder";
import HomePage from "./pages/home/home";
import Test from "./pages/test/test";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/algorithm-visualizer"
            element={<AlgorithmVisualizer />}
          />
          <Route path="/pathfinder" element={<PathFinder />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
