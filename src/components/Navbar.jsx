import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Button from "./ui/Button";
import "@radix-ui/themes/styles.css";

const Navbar = ({ variant = "default" }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * VARIANT STYLES
   */
  const variants = {
    default: "bg-white",
    transparent: "bg-transparent",
    solid: "bg-white shadow-md",
  };

  /**
   * SCROLL STATE STYLES
   */
  const scrollStyles = scrolled
    ? "shadow-md border-b border-gray-100 backdrop-blur-sm"
    : "shadow-none border-none";

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        variants[variant],
        scrollStyles
      )}
    >
      <div className="flex justify-between items-center container mx-auto px-6 py-4 text-sm">
        {/* Logo */}
        <Link to="/" className="font-semibold text-lg">
          CHub
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link className="hover:text-[#1266C8] transition" to="/">
            Home
          </Link>
          <Link className="hover:text-[#1266C8] transition" to="/about">
            About
          </Link>
          <Link className="hover:text-[#1266C8] transition" to="/solutions">
            Solutions
          </Link>
          <Link className="hover:text-[#1266C8] transition" to="/academy">
            Academy
          </Link>
        </div>

        {/* CTA */}
        <Button variant="primary" size="lg">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Navbar;