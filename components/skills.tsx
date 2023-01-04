import React from "react";

export default function Skills() {
  return (
    <div className="bg-zinc-800 py-20">
      <h2 className="lg:text-8xl font-black text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">
        Skills
      </h2>
      <div className="lg:w-2/3 mx-auto my-8">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl my-4 text-white">Web design</h2>
            <h3 className="text-4xl text-yellow-500 font-bold">4/5</h3>
          </div>
          <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
