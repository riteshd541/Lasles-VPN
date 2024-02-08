import React from "react";
import IconLaslesVpn from "./../../assets/Logo.png";

const Navbar = () => {
  const menus = ["About", "Features", "Pricing", "Testimonials", "Help"];
  return (
    <div>
      <header className="container max-w-6xl mx-auto flex flex-row pt-8 items-center space-x-36">
        <img alt="icon-laslesvpn" src={IconLaslesVpn} className="w-36" />
        <div className="flex-1">
          <ul className="flex flex-row space-x-6">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center ">
          <button className="font-bold">Sign In</button>
          <button className="border border-red-500 rounded-full py-2 px-6">
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
