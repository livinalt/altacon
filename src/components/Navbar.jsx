import React from "react";
import { Link } from "react-router-dom";
import "@radix-ui/themes/styles.css";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 bg-white p-2 shadow-lg z-50">
      <div className="flex justify-between container p-5 text-sm">
        <img src="" alt="" />
        <div className="flex justify-between gap-10">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/solutions" className="hover:text-blue-500">
            Solutions
          </Link>
          <Link to="/academy" className="hover:text-blue-500">
            Academy
          </Link>
        </div>
        <button className="px-10 py-2 border rounded-3xl bg-gradient-to-r from-[#1266C8] to-[#093262] bg-blue-600 text-white">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
