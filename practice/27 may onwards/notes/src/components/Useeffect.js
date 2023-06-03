import React, { useEffect, useState } from "react";
import axios from "axios";
const Useeffect = () => {
  console.log(1);
  let a = 10;
  let ele1 = document.getElementById("header");
  const [count, setCount] = useState(0);
  //   dummyjson.com/products
  https: console.log(ele1);
  useEffect(() => {
    let ele2 = document.getElementById("header");
    const getdata = async () => {
      let response = await axios.get("https://dummyjson.com/products");
      console.log(response.data);
    };
    getdata();
    console.log(ele2);
    console.log(2);
  }, [count]);
  console.log(3);
  return (
    <div>
      Useeffect {a}
      <div id="header">Hello</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default Useeffect;
