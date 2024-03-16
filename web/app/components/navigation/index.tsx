'use client'
import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { useAuth0 } from "@auth0/auth0-react";
// import Button from "./button";

const Navbar = () => {
  const {isAuthenticated} = useAuth0()

  return (
    <>
      <div className="w-full h-20 navbar-color sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
             



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