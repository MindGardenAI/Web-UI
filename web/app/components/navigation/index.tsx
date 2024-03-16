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
    <header className="header sticky top-0 navbar-color shadow-md flex items-center justify-   px-8 py-02">
    <h1 className="w-3/12">
        <a href="/">
          <Logo></Logo>
        </a>
    </h1>

    <nav className="nav navbar-color font-semibold text-lg">
        <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <a href="">Accueil</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Produits</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Collections</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Contact</a>
            </li>
        </ul>
    </nav>

    <div className="w-3/12 flex justify-end">
    {!isAuthenticated ? <a href="/login">Login</a> : <LogoutButton/>}
    </div>
</header>
  );
};

export default Navbar;