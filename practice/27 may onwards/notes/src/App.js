import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Useeffect from "./components/Useeffect";
function App() {
  
  return (
    <>
      <Header num={0} />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Useeffect />} />
      </Routes>
    </>
  );
}

export default App;
