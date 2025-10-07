import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to return active class
  const activeClass = ({ isActive }) =>
    isActive ? "text-[#FF6464]" : "hover:text-[#FF6490] transition-colors";

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="bg-white px-10 py-4 justify-end gap-6 font-semibold hidden md:flex">
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>
        <NavLink to="/blogs" className={activeClass}>
          Blogs
        </NavLink>
        <NavLink to="/works" className={activeClass}>
          Works
        </NavLink>
        <NavLink to="/contact" className={activeClass}>
          Contact
        </NavLink>
      </div>

      {/* Mobile Navbar */}
      <div className="bg-white p-4 justify-end flex md:hidden">
        {isOpen ? (
          <RxCross2
            size={28}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-white transition-transform z-50"
          />
        ) : (
          <RxHamburgerMenu
            size={28}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer transition-transform"
          />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-10 top-0 right-0 h-full w-[70%] bg-black text-white flex flex-col items-start px-10 py-20 gap-6 font-semibold transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <NavLink
          to="/"
          className={activeClass}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={activeClass}
          onClick={() => setIsOpen(false)}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/works"
          className={activeClass}
          onClick={() => setIsOpen(false)}
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={activeClass}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </div>

      {/* Optional Overlay for better UX */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-60 transition-opacity duration-500 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
