import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
    };
    console.log(data);
    setName("");
    setEmail("");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Controlled Form</h1>
      <form className="flex flex-col gap-3 bg-gray-500 p-10 rounded-2xl min-w-xl">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="bg-white rounded p-2 outline-none border-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="bg-white rounded p-2 outline-none border-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default Controlled;
