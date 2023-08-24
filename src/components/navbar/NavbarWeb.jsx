import Logo from "@/reusable-ui/Logo";
import Link from "next/link";
import React from "react";

const NavbarWeb = () => {
  return (
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
  );
};

export default NavbarWeb;
