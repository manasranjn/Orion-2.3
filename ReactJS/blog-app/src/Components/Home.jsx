import React from "react";

const Home = () => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#D2C1B6] min-h-[90vh] p-6 md:pd-10 lg:p-20">
      <div className=" bg-[#1B3C53] p-4 rounded-2xl h-[300px] text-white relative">
        <h2 className="text-2xl">Title</h2>
        <p>Description</p>
        <div className="flex justify-between absolute bottom-6 left-10 right-10">
          <button className="bg-blue-500 hover:bg-blue-600 active:scale-95 rounded px-4 py-2 outline-none border-none cursor-pointer transition duration-200">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 active:scale-95 rounded px-4 py-2 outline-none border-none cursor-pointer transition duration-200">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
