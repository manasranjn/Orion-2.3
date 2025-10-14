import React from "react";
import ProductImages from "../../Components/ClientSideComponents/ProductDetailsComponents/ProductImages";
import ProductDescription from "../../Components/ClientSideComponents/ProductDetailsComponents/ProductDescription";
import PriceCard from "../../Components/ClientSideComponents/ProductDetailsComponents/PriceCard";

const ProductDetails = () => {
  return (
    <div className="bg-gray-50 px-10 py-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <ProductImages />
        <ProductDescription />
      </div>
      <PriceCard />
    </div>
  );
};

export default ProductDetails;
