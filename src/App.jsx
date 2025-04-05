import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUI from "./views/LoginUI";
import Contact from "./views/ContactUI";
import About from "./views/AbouUI";
import HomeUI from "./views/HomeUI";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUI />} />
          <Route path="/login" element={<LoginUI />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
