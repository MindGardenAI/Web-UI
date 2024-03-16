import React from "react";
import Link from "next/link";
import Logo from "./logo";

// import Button from "./button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 navbar-color sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
             


            </ul>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;