import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

import "./App.scss";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <AnimatedRoutes />
      <Footer></Footer>
    </Router>
  );
}

export default App;
