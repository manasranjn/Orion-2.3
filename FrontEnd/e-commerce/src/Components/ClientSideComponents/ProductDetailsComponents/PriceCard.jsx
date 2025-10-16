import React from "react";
import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";

const PriceCard = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl">
      <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
        Book Name
      </h2>
      <p className="md:text-xl text-gray-500">
        by <span className="text-black">Author Name</span>
      </p>
      <span className="flex text-xl items-center">
        <IoStar size={25} fill="gold" stroke="gold" />
        <IoStar size={25} fill="gold" stroke="gold" />
        <IoStar size={25} fill="gold" stroke="gold" />
        <IoStar size={25} fill="gold" stroke="gold" />
        <FaRegStar size={25} fill="gold" stroke="gold" /> (4.0)
      </span>
      <p className="text-blue-600 text-xl md:text-3xl lg:text-4xl">
        ₹19.99{" "}
        <span className="text-gray-500 text-lg md:text-xl line-through">
          ₹50.00
        </span>
      </p>
      <button className="bg-blue-600 rounded-full w-full text-center p-3 text-white font-semibold mt-4">
        Add to Cart
      </button>
      <button className="bg-green-600 rounded-full w-full text-center p-3 text-white font-semibold mt-4">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
