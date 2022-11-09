import React from "react";
import me from "../assets/me.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#22333b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl ">
            <p>Hi. I´m Rebecca, nice to meet you.</p>
            <div className="pb-8 pl-4 py-4 max-w-[1000px] sm:text-left text-sm">
            <p>I am studying 3rd year computer science at NTNU Trondheim. </p>
            <p><b>Linkedin: </b> Rebecca Ruud </p>
            <p><b>E-mail: </b> rebeccaruuud@gmail.com </p>
            <p><b>Mobil: </b> +47 95922659 </p>
            <p><b>Birthday: </b> 11.06.1999 </p>
            </div>
          </div>
          <div>
            
            <div>
              <img src={me} alt="imageMe" style={{ width: "250px" }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
