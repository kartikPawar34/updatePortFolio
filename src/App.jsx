import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Home";
import Aboutme from "./pages/AboutMe";
import Projects from "../src/pages/Project";
import Certificate from "./pages/Certificate";
import Footers from "../src/pages/footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Certificates" element={<Certificate />} />
      </Routes>
    </Router>
  );
}

export default App;