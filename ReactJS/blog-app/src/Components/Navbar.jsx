import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 py-3 bg-green-300">
      <h1 className="text-xl md:text-2xl font-bold">Blog App</h1>

      <ul className="flex gap-8">
        <li className="text-blue-700 hover:text-blue-800 hover:font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-blue-700 hover:text-blue-800 hover:font-semibold">
          <Link to="/create">Create Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
