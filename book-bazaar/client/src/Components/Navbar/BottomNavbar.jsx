import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiSquaresFourFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const BottomNavbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories/getCategories`
      );
      setCategories(response.data);
      setError(null);
      // console.log(response.data);
    } catch (error) {
      // console.log(error);
      setError("Failed to fetch categories. Please try again later.");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="p-2">
      {/* Navbar for Large Screens */}
      <div className="scrollbar hidden lg:flex pb-1 items-center mx-10 xl:mx-20 overflow-scroll text-nowrap element">
        <ul className="flex gap-1 xl:gap-3 items-center text-gray-500 border-gray-200 ">
          {categories.map((c) => (
            <li
              className="hover:bg-blue-100 rounded-full px-4 py-2 cursor-pointer"
              key={c._id}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar For Small Screen */}
      <div className="lg:hidden ">
        <ul className="scrollbar flex gap-3 items-center text-gray-500 overflow-scroll text-sm element">
          {categories.slice(0, 5).map((c) => (
            <li
              className="hover:bg-blue-100 rounded-full px-3 py-2 border text-nowrap"
              key={c._id}
            >
              {c.name}
            </li>
          ))}
          {categories.length > 5 && (
            <li
              className="hover:bg-blue-100 rounded-full border px-4 py-2 flex gap-2 items-center text-nowrap cursor-pointer"
              onClick={() => setIsCategoryOpen(true)}
            >
              More Categories <PiSquaresFourFill size={20} />
            </li>
          )}
        </ul>
      </div>

      {/* Slide-up Drawer for Small Screens */}
      {/* Overlay */}
      {isCategoryOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-40"
          onClick={() => setIsCategoryOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 p-6 rounded-t-2xl transform transition-transform duration-300 
          ${isCategoryOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">More Categories</h2>
          <IoClose
            size={26}
            className="cursor-pointer"
            onClick={() => setIsCategoryOpen(false)}
          />
        </div>

        <ul className="grid grid-cols-1 gap-3 text-gray-700 text-base">
          {categories.slice(5).map((c) => (
            <li
              className="hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer"
              key={c._id}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BottomNavbar;
