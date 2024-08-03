import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Academy from "./pages/Academy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import Case from "./pages/Case";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Navbar className="sticky top-0 left-0 bg-white p-8 shadow-lg z-50" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/case" element={<Case />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
