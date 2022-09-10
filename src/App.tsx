import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/header/header";
import Home from "./components/home/home";
import PathFinder from "./components/pathfinder/pathfinder";
import Test from "./pages/test/test";
import Visualizer from "./pages/visualizer/visualizer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algorithm-visualizer" element={<Visualizer />} />
          <Route path="/pathfinder" element={<PathFinder />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
