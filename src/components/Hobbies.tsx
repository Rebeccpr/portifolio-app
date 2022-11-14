import React from "react";

const Hobbies = () => {
  return (
    <div
      id="hobbies"
      className="w-full min-h-screen sm:h-screen p-5 sm:p-0 bg-[#AEBDCA] text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pt-10 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              My Hobbies
            </p>
          </div>
        </div>
        <div className="sm-text-right px-20 pt-10">
          <p className="text-sm">
            <p className="sm:text-left text-2xl">
              {" "}
              I'd like to share a bit about my many hobbies with you so you can
              get to know me better.{" "}
            </p>{" "}
            <br />
            <p className="font-bold"> Fotball </p>- I have always played soccer
            and think this is the best sport out there
            <p className="font-bold"> Horseback riding</p>- One of the most
            enjoyable activities is horseback riding, which I try to do
            frequently.
            <p className="font-bold"> Climbing </p>- Climbing is something I
            started doing while I was a student and it's a lot of fun because I
            enjoy physical activity.
            <p className="font-bold"> Cooking </p>- I've always like to cook,
            and getting to test out new foods is enjoyable and intriguing.
            <p className="font-bold"> Other things </p>
            - I am also very fond of going for walks and outdoor activities.{" "}
            <br />
            - Most sports are fun for me, especially team sports. I've
            participated in a variety of activities and enjoy both dance,
            running, padel and many more. <br />- Being a very social person, I
            frequently participate in all activities with friends and
            acquaintances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
