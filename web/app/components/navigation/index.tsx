'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./logo";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logoutButton/logoutbutton";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const {isAuthenticated} = useAuth0()

  const links = [
    {
      id: 1,
      link: "/",
      title:"Home"
    },
    {
      id:2,
      link:"/goals-tree",
      title:"goals"
    }
    
  ];

  return (
    <div className="flex z-10 justify-between items-center w-full h-20 px-4 text-white bg-[var(--primary-color)] fixed nav">
      <div>
          <Logo/>
      </div>

      <ul className="hidden md:flex">
      
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <a href={link}>{title}</a>
          </li>
        ))}
        {!isAuthenticated ? <a href="/login">Login</a> : <LogoutButton/>}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars  size={30} />}
      </div>

      {nav &&
        <ul className="flex flex-col z-9 justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer z-10 capitalize py-6 text-4xl"
            >
              <a onClick={() => setNav(!nav)} href={link}>{title}</a>
            </li>
          ))}
           {!isAuthenticated ? <a href="/login">Login</a> : <LogoutButton/>}
        </ul>
      }
    </div>
  );
};

export default Navbar;