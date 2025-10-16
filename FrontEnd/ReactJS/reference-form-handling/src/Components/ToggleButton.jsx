import React, { useState } from "react";

const ToggleButton = () => {
  const [headings, setHeadings] = useState([]);

  const handleClick = () => {
    setHeadings((prevHeadings) => [...prevHeadings, "New Heading"]);
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <button
        className="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer"
        onClick={handleClick}
      >
        Click
      </button>

      {headings.map((h, index) => (
        <h1 key={index} className="text-3xl">
          {h} {index}
        </h1>
      ))}
    </div>
  );
};

export default ToggleButton;
