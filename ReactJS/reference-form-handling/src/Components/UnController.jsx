import React, { useRef } from "react";

const UnController = () => {
  const nameRef = useRef();
  const emalRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emalRef.current.value,
    };
    console.log(data);
    nameRef.current.value = "";
    emalRef.current.value = "";
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="flex flex-col gap-3 bg-gray-500 p-10 rounded-2xl min-w-xl">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="bg-white rounded p-2 outline-none border-none"
          ref={nameRef}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="bg-white rounded p-2 outline-none border-none"
          ref={emalRef}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UnController;
