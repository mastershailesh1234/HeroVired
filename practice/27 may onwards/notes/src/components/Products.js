import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/products.css";
import { Link } from "react-router-dom";
const Products = () => {
  console.log(1);
  let a = 10;
  let ele1 = document.getElementById("header");
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  //   dummyjson.com/products
  console.log(ele1);
  useEffect(() => {
    const getdata = async () => {
      await axios.get("https://dummyjson.com/products").then((res) => {
        console.log(res.data);
        setData(res.data.products);
      });
    };
    getdata();
  }, []);

  useEffect(() => {
    let ele2 = document.getElementById("header");
    console.log(ele2);
    console.log(2);
  }, [count]);
  console.log(3);
  return (
    <div className="container">
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <h1>{count}</h1> */}
      {data &&
        data.map((ele) => {
          return (
            <div className="products">
              <h3>{ele.title}</h3>
              <img src={ele.thumbnail} alt="" />
              <p>{ele.description}</p>
              <button>Add to cart</button>
              <button>View</button>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
