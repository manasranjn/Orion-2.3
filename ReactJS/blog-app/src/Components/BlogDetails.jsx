import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();

  const getPost = () => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="bg-[#D2C1B6] min-h-[90vh] p-6 md:pd-10 lg:p-20 flex justify-center items-center">
      <div className="bg-[#1B3C53] p-10 rounded-2xl text-white w-[90%] max-w-xl shadow-2xl">
        <h1 className="text-2xl lg:text-4xl mb-2">{post.title}</h1>
        <p>{post.description}</p>

        <div className="flex justify-between mt-4">
          <button
            className="bg-green-500 hover:bg-green-600 active:scale-95 rounded px-4 py-2 outline-none border-none cursor-pointer transition duration-200"
            onClick={() => window.history.back()}
          >
            Back
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 active:scale-95 rounded px-4 py-2 outline-none border-none cursor-pointer transition duration-200"
            onClick={() => navigate(`/edit-post/${id}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
