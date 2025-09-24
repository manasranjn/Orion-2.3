import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getPost = () => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      alert("Please fill all the fields");
      return;
    }

    const data = {
      title,
      description,
    };

    axios
      .put(`http://localhost:5000/posts/${id}`, data)
      .then((res) => {
        console.log("Updated Successfully", res.data);
        navigate(`/details/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-[90vh] flex justify-center items-center bg-[#D2C1B6] ">
      <form className="flex flex-col gap-3 bg-[#1B3C53] p-10 rounded-2xl w-[90%] max-w-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-white text-center">Edit Post</h1>
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
          onClick={handleUpdate}
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
