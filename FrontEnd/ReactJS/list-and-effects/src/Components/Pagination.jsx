import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  //   getData()
  useEffect(() => {
    getData();
    console.log("hello");
  }, []);

  const lastIndex = currentPage * postPerPage; // 1 * 12 = 12 // 3 * 12 = 36
  const firstIndex = lastIndex - postPerPage; // 12 - 12 = 0 // 36 - 12 = 24
  const currentPost = data.slice(firstIndex, lastIndex);

  return (
    <div className="bg-slate-400 p-10 text-white">
      <h1>SideEffect</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentPost.map((item, idx) => {
          return (
            <div className="bg-slate-700 p-4 rounded " key={idx}>
              <h1 className="text-2xl font-semibold mb-4 text-green-400">
                {item.title}
              </h1>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-blue-500 h-10 w-18 rounded cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-600"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-2xl bg-green-500 h-10 w-18 rounded text-center">
          {currentPage}
        </span>
        <button
          className="bg-blue-500 h-10 w-18 rounded cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-600"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / postPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
