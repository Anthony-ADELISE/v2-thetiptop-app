"use client";

import NavbarMobile from "@/components/navbar/NavbarMobile";
import NavbarWeb from "@/components/navbar/NavbarWeb";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      {/* nav web */}
      <NavbarWeb />
      {/* nav mobile */}
      {isOpen && <NavbarMobile />}

      <button
        className=" flex-col justify-center items-center lg:hidden absolute right-10 z-30 top-20"
        onClick={toggleMenu}
        id="button-menu"
        aria-label="button-menu"
      >
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
    </header>
  );
};

export default Navbar;
