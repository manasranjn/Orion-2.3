import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-white px-10 py-4 justify-end gap-4 font-semibold hidden md:flex">
        <Link to="/" className="hover:text-[#FF6464]">
          Home
        </Link>
        <Link to="/blogs" className="hover:text-[#FF6464]">
          Blogs
        </Link>
        <Link to="/works" className="hover:text-[#FF6464]">
          Works
        </Link>
        <Link to="/contact" className="hover:text-[#FF6464]">
          Contact
        </Link>
      </div>

      <div className="bg-white p-4 justify-end flex md:hidden">
        <RxHamburgerMenu size={28} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && (
        <div className="bg-black text-white px-10 py-4 gap-4 font-semibold md:hidden flex flex-col w-[70%] h-screen absolute top-0">
          <RxCross2
            size={28}
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-4 right-4"
          />
          <Link to="/" className="hover:text-[#FF6464]">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-[#FF6464]">
            Blogs
          </Link>
          <Link to="/works" className="hover:text-[#FF6464]">
            Works
          </Link>
          <Link to="/contact" className="hover:text-[#FF6464]">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
