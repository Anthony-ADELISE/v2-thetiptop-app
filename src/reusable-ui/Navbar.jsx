"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="px-3 lg:px-12 pt-14 flex justify-between w-full items-center font-bold text-white text-base max-w-[1560px] mx-auto">
        {/* left navbar */}
        <div className="hidden lg:flex items-center gap-x-14">
          <Link href="/">Home</Link>
          <Link href="/">Jeux concours</Link>
          <Link href="/">Mon compte</Link>
        </div>
        {/* logo */}
        <div>
          <Logo />
        </div>
        {/* right SideBar */}
        <div className="hidden lg:flex items-center gap-x-20">
          <div className="flex gap-x-8">
            <a href="">IG</a>
            <a href="">FB</a>
            <a href="">Lkn</a>
          </div>
          <button className="bg-greenTip py-5 px-9 rounded-full text-backgroundTip hover:text-white">
            Se connecter
          </button>
        </div>
      </nav>

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
