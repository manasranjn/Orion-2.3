import React from "react";

const PersonalDetails = ({ name, age, address }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Address: {address}</h2>
    </div>
  );
};

export default PersonalDetails;
