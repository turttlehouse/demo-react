import React, { useState } from "react";
// import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ApplyForm from "./components/ApplyForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<ApplyForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
