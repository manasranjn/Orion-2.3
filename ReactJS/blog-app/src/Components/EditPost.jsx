import React from "react";

const EditPost = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center bg-[#D2C1B6] ">
      <form className="flex flex-col gap-3 bg-[#1B3C53] p-10 rounded-2xl w-[90%] max-w-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-white text-center">Edit Post</h1>
        <input
          type="text"
          placeholder="Enter Title"
          className="bg-white p-2 rounded outline-none border-none"
        />
        <textarea
          type="text"
          placeholder="Enter Description"
          className="bg-white p-2 rounded outline-none border-none"
        ></textarea>
        <button className="bg-green-500 p-2 rounded outline-none border-none text-white cursor-pointer hover:bg-green-600 active:scale-95 transition duration-300">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
