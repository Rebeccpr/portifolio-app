import React from "react";
import hundImage from "../assets/hund.jpeg";
import hestImage from "../assets/hest.jpeg";
import turImage from "../assets/tur.jpeg";

const Hobbies = () => {
  return (
    <div
      id="hobbies"
      className="w-full min-h-screen sm:h-screen p-5 sm:p-0 bg-[#AEBDCA] text-white"
    >
      <div className="flex flex-row justify-center items-start w-full h-full">

        {/* Text Column */}
        <div className="w-2/3 flex flex-col gap-8 p-20">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-700 mb-4">My Hobbies</p>
          </div>
          <div>
            <p className="font-bold">Football</p>
            <p>
              I have been passionate about football since childhood and find great joy in participating in team-based
              sports. While football remains my primary interest, I also appreciate the teamwork and dynamics involved in other sports.
            </p>
          </div>

          <div>
            <p className="font-bold">Outdoor Activities</p>
            <p>
              I love being in nature, whether it's hiking, walking, or simply enjoying the outdoors. Staying active is important to me, and I particularly enjoy cross-country skiing and snowboarding during the winter months. Camping is another favorite activity, and I spend a lot of time outside with my dog.
            </p>
          </div>

          <div>
            <p className="font-bold">Dog Training</p>
            <p>
              My dog and I enjoy spending time together training. We participate in rally obedience and hunting training, which has been a rewarding experience for both of us. Animals in general is a big interest of mine, and I also like horseback riding and other activities including animals.
            </p>
          </div>

          <div>
            <p className="font-bold">Socializing</p>
            <p>
              Being a social person, I genuinely enjoy spending time with others, especially friends. Whether it's participating in a game, an outdoor adventure, or simply joining in on whatever is happening, I find great joy in shared experiences and being part of the moment.
            </p>
          </div>

          <div>
            <p className="font-bold">Other Interests</p>
            <p>
              I discovered climbing during my university years, and it quickly became a favorite. It's a fun challenge and keeps me active. I also enjoy baking, mostly sweets and different types of buns. I'm quite interested in personalities and how they shape interactions—being an ENFJ myself, I love understanding and engaging with different people.
            </p>
          </div>
        </div>

        {/* Image Column with Grid */}
        <div className="w-1/3 relative pt-24">
          {/* First two images stacked vertically */}
          <div className="flex flex-col gap-2">
            <img
              className="object-contain md:object-scale-down h-auto"
              src={hestImage}
              alt="Horseback Riding"
              style={{ width: "250px" }}
            />
            <img
              className="object-contain md:object-scale-down h-auto"
              src={hundImage}
              alt="Dog Training"
              style={{ width: "250px" }}
            />
          </div>
          {/* Third image to the right of the stacked images */}
          <img
            className="absolute object-contain md:object-scale-down h-auto"
            src={turImage}
            alt="Outdoor Activities"
            style={{
              width: "250px",
              top: "50%", // Center it vertically
              left: "45%", // Move it slightly to the right
              transform: "translateY(-50%)", // Adjust for proper centering
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
