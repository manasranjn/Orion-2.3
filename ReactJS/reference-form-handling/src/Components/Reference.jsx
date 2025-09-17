import React, { useRef } from "react";

const Reference = () => {
  const referenceObj = useRef();
  console.log(referenceObj);

  const handleClick = () => {
    referenceObj.current.style.color = "red";
    console.log(referenceObj.current);
    referenceObj.current.textContent = "This is a new heading";
  };
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 ref={referenceObj} className="text-3xl ">
        This is a heading
      </h1>
      <button
        onClick={handleClick}
        className="px-4 py-2 rounded bg-gray-500 text-white"
      >
        Click
      </button>
    </div>
  );
};

export default Reference;
