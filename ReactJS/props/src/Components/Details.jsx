import React from "react";

const Details = ({ name, age, add }) => {
  const arr = [1, 2, 3, 4, 5];
  //   console.log(arr[0]);
  //   console.log(arr[2]);

  //   const [a, b, c, d, e] = arr;
  //   console.log(d);

  const obj = {
    name: "Rahul",
    age: 20,
    address: "Pune",
  };
  //   console.log(obj.name);

  //   const { name, age, address } = obj;
  //   console.log(address);

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Address: {add}</h3>
    </div>
  );
};

export default Details;
