import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [created, setCreated] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      setMessage("Please fill all the fields");
      setCreated("");
      return;
    }

    const data = {
      title,
      description,
    };

    axios
      .post("http://localhost:5000/posts", data)
      .then((res) => {
        console.log("Created Successfully", res.data);
        setTitle("");
        setDescription("");
        setCreated("Post Created Successfully");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Something went wrong");
        setCreated("");
      });
  };

  return (
    <div className="h-[90vh] flex justify-center items-center bg-[#D2C1B6] ">
      <form className="flex flex-col gap-3 bg-[#1B3C53] p-10 rounded-2xl w-[90%] max-w-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-white text-center">
          Create Post
        </h1>
        <input
          type="text"
          placeholder="Enter Title"
          className="bg-white p-2 rounded outline-none border-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Enter Description"
          className="bg-white p-2 rounded outline-none border-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="bg-green-500 p-2 rounded outline-none border-none text-white cursor-pointer hover:bg-green-600 active:scale-95 transition duration-300"
          onClick={handleSubmit}
        >
          Create Post
        </button>
        {created && <p className="text-white text-center text-lg">{created}</p>}
        {message && (
          <p className="text-red-500 text-center text-lg">{message}</p>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
