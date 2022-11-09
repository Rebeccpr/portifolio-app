import React from "react";

const Hobbies = () => {
  return (
    <div id="hobbies" className="w-full h-screen bg-[#78a7ad] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
            My Hobbies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;