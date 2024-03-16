'use client'

import UserSection from "./usersection";

export default function dashboard() {
    return (
    <>
   <div className="container mx-auto px-20">
    <p>Dashboard</p>
    <a href="/">Home</a>
    <UserSection/>
   </div>
    </>
    );
  }