'use client'
import React from "react";
import LoginButton from "../components/loginButton/loginbutton";

const Login = () => {

  return (<div className="flex">
    <div className="container drop-shadow-lg max-w-[480px] bg-[var(--primary-color)] rounded-2xl mx-auto mt-40 p-4 pb-8">
      <div className="w-full justify-center">
        <h1 className="text-5xl text-center my-10">LOGIN</h1>
      </div>
      <div className="container drop-shadow-lg flex">
        <div className="mx-auto">
          <LoginButton/>
        </div>
      </div>
    </div>
  </div>);
};

export default Login;