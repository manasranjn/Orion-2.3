import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center gap-6 text-2xl md:text-3xl">
        <FaFacebookSquare className="hover:text-gray-500 cursor-pointer" />
        <FaInstagram className="hover:text-gray-500 cursor-pointer" />
        <FaXTwitter className="hover:text-gray-500 cursor-pointer" />
        <FaLinkedin className="hover:text-gray-500 cursor-pointer" />
      </div>
      <p className="text-center text-xs mt-2">
        Copyright ©2020 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
