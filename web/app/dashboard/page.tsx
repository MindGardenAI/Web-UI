'use client'

import Footer from "../components/footer/footer";
import DailyMentalHealth from "./mentalhealthtip";
import ObjectivesList from "./objectives";
import UserSection from "./usersection";

export default function dashboard() {
    return (
      <div className="flex flex-col z-0">
        <div className="container mx-auto mt-40">
          <UserSection/>
        </div>
        <div className="container mx-auto mt-20">
          <ObjectivesList/>
        </div>
        <div className="container mx-auto my-20">
          <DailyMentalHealth/>
        </div>
        <Footer/>
     </div>
    );
  }