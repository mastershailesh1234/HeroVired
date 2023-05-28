import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  const [num, setNum] = useState("Hello");
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Header num={num} setNum={setNum} setShow={setShow} show={show} />
      <Counter />
      <Footer num={num} />
    </div>
  );
}

export default App;
