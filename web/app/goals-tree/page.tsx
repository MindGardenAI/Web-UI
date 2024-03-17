'use client'
import Image from "next/image";
import "./css.css";
import TreeLeaf from "../components/TreeLeaf/TreeLeaf";
import useGetGoals from "./useGetGoals";
export default function goalsTree() {
  //var { data, isLoading, error} = useGetGoals();
  //var goalsJson = JSON.parse(data);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h1 className="big font-thin mt-2">Goals</h1>
      </div>
      <div className="flex  absolute inset-x-0 bottom-0 justify-center">
        <div className="flex flex-col">
          <div className="mb-6">
            {/* {goalsJson.map((goal:any) => {
              <TreeLeaf
                title={goal.title}
                content={goal.content}
              />;
            })} */}
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/potplant.png"
              width={200}
              height={200}
              alt="plant"
              className="flex justify-self-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
