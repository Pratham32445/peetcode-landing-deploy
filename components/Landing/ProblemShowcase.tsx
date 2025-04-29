import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const featuresData = [
  {
    title: "Word Break II",
    desc: "Dynamic Programming | String Manipulation",
  },
  {
    title: "Median of Two Sorted Arrays",
    desc: "Binary Search | Divide and Conquer",
  },
  {
    title: "Find Median from Data Stream",
    desc: "Heap | Design",
  },
];

const ProblemShowCase = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <div className="mb-[5px] flex flex-col items-center">
          <p className="text-4xl">Premium Problems, Zero Cost</p>
          <p className="my-2">
            Access top interview problems from leading tech companies
          </p>
        </div>
        <div className="mt-[50px] w-full">
          <div className="p-4 px-10 w-full flex flex-col items-center justify-center">
            <div className="flex my-6 gap-5">
              <div className="bg-[#4F46E5] p-2 px-4 rounded">
                <p>Google</p>
              </div>
              <div className="bg-[#4F46E5] p-2 px-4 rounded">
                <p>Amazon</p>
              </div>
              <div className="bg-[#4F46E5] p-2 px-4 rounded">
                <p>Apple</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center  w-3/4 m-auto gap-4">
            {featuresData.map(({ title, desc }, idx) => (
              <Card
                key={idx}
                className="hover:bg-neutral-800 cursor-pointer w-1/3 p-4" 
              >
                <CardHeader>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription>{desc} </CardDescription>
                </CardHeader>
                <Button className="bg-red-700 text-white">Hard</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemShowCase;
