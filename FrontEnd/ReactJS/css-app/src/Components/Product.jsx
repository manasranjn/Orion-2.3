import React from "react";

const Product = () => {
  return (
    <div className="h-screen bg-red-200 p-12 flex justify-center items-center">
      <div className="bg-[#f1f1f1] px-10 py-6 rounded-lg shadow-lg shadow-amber-500 border-8 border-green-500">
        <h2 className="text-xl text-red-600">Name</h2>
        <p>Price</p>
        <p>Description</p>
      </div>
    </div>
  );
};

export default Product;
