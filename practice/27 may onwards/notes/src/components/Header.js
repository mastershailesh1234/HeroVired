import React from "react";
import Title from "./Title";
const Header = ({ num, setNum, setShow, show }) => {
  return (
    <div>
      <h1>Header: {num}</h1>
      <button
        onClick={() => {
          setNum("Herovired");
          setShow(!show);
        }}
      >
        CLICK to change the name
      </button>
      <Title show={show} />
    </div>
  );
};

export default Header;
