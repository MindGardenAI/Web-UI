'use client'

import DailyMentalHealth from "./mentalhealthtip";
import ObjectivesList from "./objectives";
import UserSection from "./usersection";

export default function dashboard() {
    return (
      <div className="flex flex-col">
        <div className="container mx-auto mt-40">
          <UserSection/>
        </div>
        <div>
          <ObjectivesList/>
        </div>
        <div>
          <DailyMentalHealth/>
        </div>
     </div>
    );
  }