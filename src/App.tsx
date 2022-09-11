import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

// Components
import Error from "./components/error/error";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Visualizer from "./pages/visualizer/visualizer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algorithm-visualizer" element={<Visualizer />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
