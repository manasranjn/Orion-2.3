import React from "react";
import PersonalDetails from "./PersonalDetails";

const StudentData = ({ name, age, address }) => {
  return (
    <div>
      <h1>Student Data</h1>
      <PersonalDetails name={name} age={age} address={address} />
    </div>
  );
};

export default StudentData;
