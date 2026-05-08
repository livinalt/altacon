import React from "react";
import clsx from "clsx";

const baseStyles =
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none";

const variants = {
  primary:
    "bg-[#1266C8] text-white hover:bg-[#0d4ea3] shadow-md",
  secondary:
    "bg-black text-white hover:bg-gray-800",
  outline:
    "border border-[#1266C8] text-[#1266C8] hover:bg-[#1266C8] hover:text-white",
  ghost:
    "text-gray-700 hover:text-[#1266C8]",
  pill:
    "border border-[#1266C8] text-[#1266C8] rounded-full hover:bg-[#1266C8] hover:text-white",
};

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-2 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        "rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;