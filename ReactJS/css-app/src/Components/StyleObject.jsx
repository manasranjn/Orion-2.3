import React from "react";

const StyleObject = () => {
  const heading = {
    width: "300px",
    height: "100px",
    borderRadius: "10px",
    color: "red",
    backgroundColor: "green",
  };
  return (
    <div>
      <h1 style={heading}>Style Object</h1>
      <h1 style={heading}>Style Object</h1>
      <h1 style={heading}>Style Object</h1>
      <h1 style={heading}>Style Object</h1>
      <h1 style={heading}>Style Object</h1>
      <h1 style={heading}>Style Object</h1>
    </div>
  );
};

export default StyleObject;
