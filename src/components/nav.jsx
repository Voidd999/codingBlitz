import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./nav.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="flex justify-between items-center h-24 max-w-auto mx-auto px-10 text-white"
      id="navbar"
    >
      <h1
        className="md:text-3xl sm:text-3xl text-3xl font-bold md:py-2  px-2 mr-3.5 mb-2.5 ease-in-out duration-500"
        id="title"
      >
        Intern
        <span style={{ color: "#5299fc" }} id="n">
          N
        </span>
        exus
      </h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Blogs</li>
        <li className="p-4">Webinars</li>
        <li className="p-4">About</li>
        <li className="p-4  px-7" id="contactbutton">
          <span className="px-4 py-1.5 h-auto" id="contact">
            Contact
          </span>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden ease-in-out duration-500"
      >
        {nav ? (
          <AiOutlineClose
            size={20}
            style={{ color: "black", cursor: "pointer" }}
          />
        ) : (
          <AiOutlineMenu
            size={20}
            style={{ color: "black", cursor: "pointer" }}
          />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] h-full  border-r-gray-900 bg-[#ffffff] px-8 py-5 ease-in-out duration-500"
            : "ease-in-out duration-500 px-8 py-5 fixed left-[-100%]  h-full top-0 w-[50%]  "
        }
      >
        <h1
          className="md:text-3xl sm:text-3xl text-3xl font-bold md:py-2  px-4 mr-3.5 mb-2.5 ease-in-out duration-500"
          id="title"
        >
          Inter
          <span style={{ color: "#5299fc" }} id="n">
            N
          </span>
          exus
        </h1>
        <li className="p-4 border-b border-[#00bbff00]">Home</li>
        <li className="p-4 border-b border-[#00bbff00]">Company</li>
        <li className="p-4 border-b border-[#00bbff00]">Resources</li>
        <li className="p-4 border-b border-[#00bbff00]">About</li>
        <li className="p-4 border-b border-[#00bbff00]">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
