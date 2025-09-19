import React, { useContext } from "react";
import { example } from "../App";

const PersonalDetails = () => {
  console.log(example);
  const data = useContext(example);
  console.log(data);

  return (
    <div>
      <h1>PersonalDetails</h1>
      <h2>Name: {data}</h2>
    </div>
  );
};

export default PersonalDetails;
