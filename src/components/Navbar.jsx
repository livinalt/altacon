import React from "react";
import { Link } from "react-router-dom";
import "@radix-ui/themes/styles.css";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 bg-white p-2 shadow-lg z-50">
      <div className="flex justify-between items-center container mx-auto p-5 text-sm">
        {/* Logo Section */}
        <img src="" alt="Logo" className="w-12 h-12" />

        {/* Navigation Links */}
        <div className="hidden md:flex justify-between gap-8">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/solutions"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Solutions
          </Link>
          <Link
            to="/academy"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Academy
          </Link>
        </div>

        <button className="px-5 py-2 border rounded-3xl bg-gradient-to-r from-[#1266C8] to-[#093262] text-white transition-transform duration-300 hover:scale-105 hover:from-[#0b3a7d] hover:to-[#05294c]">
          Contact
        </button>

      </div>
    </div>
  );
};

export default Navbar;
