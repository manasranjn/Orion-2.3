import React from "react";
import StudentData from "./StudentData";

const AllStudents = ({ name, age, address }) => {
  return (
    <div>
      <h1>All Students</h1>
      <StudentData name={name} age={age} address={address} />
    </div>
  );
};

export default AllStudents;
