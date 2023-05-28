import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  const [num, setNum] = useState("Hello");
  const [show, setShow] = useState(true);
  return (
    // <div className="App">
    //   <Header num={num} setNum={setNum} setShow={setShow} show={show} />
    //   <Counter />
    //   <Footer num={num} />
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
