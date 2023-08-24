import Logo from "@/reusable-ui/Logo";
import Link from "next/link";
import React from "react";

const NavbarMobile = () => {
  return (
    <nav className="lg:hidden z-30 fixed rounded-t-xl bottom-0 h-2/3 px-3 lg:px-12 pt-14 flex flex-col justify-around w-full items-center font-semibold bg-backgroundTip text-greenTip text-xl max-w-[1560px] mx-auto">
      {/* left navbar */}
      <div className="flex flex-col lg:hidden items-center space-y-16">
        <Link href="/">Home</Link>
        <Link href="/">Jeux concours</Link>
        <Link href="/">Mon compte</Link>
      </div>
      {/* logo */}
      <div className="hidden">
        <Logo width={80} height={80} />
      </div>
      {/* right SideBar */}
      <div className="flex flex-col lg:hidden items-center gap-y-10 text-base font-bold">
        <div className="flex gap-x-8">
          <a href="">IG</a>
          <a href="">FB</a>
          <a href="">Lkn</a>
        </div>
        <button className="bg-greenTip py-5 px-9 rounded-full text-backgroundTip hover:text-white">
          Se connecter
        </button>
      </div>
      <div className="absolute left-0">
        <img src="/images/kiss-green-tea-left.png" alt="" />
      </div>
      <div className="absolute right-0 -top-16">
        <img src="/images/kiss-green-tea-right.png" alt="" />
      </div>
    </nav>
  );
};

export default NavbarMobile;
