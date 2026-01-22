import React, { useState } from "react";
// import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ApplyForm from "./components/ApplyForm";
import UserDetails from "./pages/UserDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    // routing setup react ma
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<ApplyForm />} />

          <Route path="/details/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
