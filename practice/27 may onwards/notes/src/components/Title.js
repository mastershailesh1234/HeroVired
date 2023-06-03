import React from "react";

const Title = ({ show }) => {
  console.log(show);
  return <div>{show && <h1>Title</h1>}</div>;
};

export default Title;
