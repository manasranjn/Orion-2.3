import React, { useState, useEffect } from "react";

const SideEffect = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  //   getData()
  useEffect(() => {
    getData();
    console.log("hello");
  }, []);

  return (
    <div>
      <h1>SideEffect</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SideEffect;
