import React from "react";

const Caterogory = (props) => {
  console.log(props);

  return (
    <div>
      <img src={props.image} alt="" style={{ height: "80px" }} />
      <h2>Name: {props.name}</h2>
    </div>
  );
};

export default Caterogory;
