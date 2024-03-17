'use client'
import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { link } from "fs";
import LogoutButton from "../logoutButton/logoutbutton";
import { useAuth0 } from "@auth0/auth0-react";

// import Button from "./button";

const Navbar = () => {
  const {isAuthenticated} = useAuth0()

  return (
    <>
      <div className="w-full h-20 bg-[#A7B897] sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex gap-4 justify-start items-center">
              <Logo />
              <p className="inline h-min text-[25pt]">Mind Garden AI</p>
            </div>
            <ul className="flex">
              <a className="pr-4 font-bold" href="">DashBoard</a>

              <a className="pr-4 font-bold" href="">Journal</a>

              <a className="pr-4 font-bold" href="">Goal Tree</a>
            </ul>
            
            <ul className="hidden md:flex gap-x-6 text-white font-bold">
             <ul>
             {!isAuthenticated ? <a href="/login">Login</a> : <LogoutButton/>}
             </ul>
              {/* <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li> */}
            </ul>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;