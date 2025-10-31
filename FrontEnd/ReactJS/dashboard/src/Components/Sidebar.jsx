import React from "react";
import { MdOutlineDashboard, MdReviews } from "react-icons/md";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { LuSquareMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", path: "/", icons: <MdOutlineDashboard size={20} /> },
    {
      label: "Food Order",
      path: "/orders",
      icons: <FaCartFlatbedSuitcase size={20} />,
    },
    { label: "Manage Menu", path: "/menu", icons: <LuSquareMenu size={20} /> },
    {
      label: "Customer Review",
      path: "/reviews",
      icons: <MdReviews size={20} />,
    },
  ];

  return (
    <div className="p-10 bg-slate-200 h-screen col-span-2">
      <div className="flex gap-2 items-center pb-6 uppercase text-[#5a67ba] font-bold text-sm">
        <span className="bg-[#5A67BA] h-7 w-7 rounded-full text-white flex items-center justify-center">
          G
        </span>
        Goodfood
      </div>
      <div className="flex gap-3 flex-col items-start justify-center py-10">
        <p className="uppercase text-gray-500">Menu</p>
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} className="w-full">
            <div className="flex gap-3 itemcenter cursor-pointer justify-start text-gray-500 active:text-blue-600">
              <span>{item.icons}</span>
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
