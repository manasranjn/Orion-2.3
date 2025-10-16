import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-gray-400 p-2 right-0 left-0 flex justify-between flex-col items-center">
      <ul className=" flex gap-8">
        <li className="text-white hover:text-gray-200 hover:font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-white hover:text-gray-200 hover:font-semibold">
          <Link to="/create">Create Post</Link>
        </li>
      </ul>
      <p>Copyright @ 2025</p>
    </div>
  );
};

export default Footer;
