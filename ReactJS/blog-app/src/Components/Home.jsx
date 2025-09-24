import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getAllPosts = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("Can't get posts");
        setPosts([]);
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then((res) => {
        console.log(res);
        getAllPosts();
      })
      .catch((err) => {
        console.log(err);
        setError("Can't get posts");
      });
  };

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#D2C1B6] min-h-[90vh] p-6 md:pd-10 lg:p-20">
      {error && <p className="text-red-500">{error}</p>}
      {posts.map((post) => (
        <div
          className=" bg-[#1B3C53] p-4 rounded-2xl h-[300px] text-white relative"
          key={post.id}
        >
          <h2 className="text-2xl mb-2">{post.title}</h2>
          <p>
            {post.description.slice(0, 170)}{" "}
            <span
              className="text-blue-400 cursor-pointer underline"
              onClick={() => navigate(`/details/${post.id}`)}
            >
              ... Read More
            </span>
          </p>
          <div className="flex justify-between absolute bottom-6 left-10 right-10">
            <button
              className="bg-blue-500 hover:bg-blue-600 active:scale-95 rounded px-4 py-2 outline-none border-none cursor-pointer transition duration-200"
              onClick={() => navigate(`/edit-post/${post.id}`)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 active:scale-95 rounded px-4 py-2 outline-none border-none cursor-pointer transition duration-200"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
