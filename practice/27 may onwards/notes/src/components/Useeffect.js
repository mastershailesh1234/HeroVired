import React, { useEffect } from "react";

const Useeffect = () => {
  console.log(1);
  let a = 10;
  let ele1 = document.getElementById("header");
  console.log(ele1);
  useEffect(() => {
    let ele2 = document.getElementById("header");
    console.log(ele2);
    console.log(2);
  }, []);
  console.log(3);
  return (
    <div>
      Useeffect {a}
      <div id="header">Hello</div>
    </div>
  );
};

export default Useeffect;
