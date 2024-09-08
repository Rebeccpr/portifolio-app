import React from "react";
import me from "../assets/me.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#AEBDCA] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-20 px-4">
          <div className="sm:text-left text-2xl pl-6 ">
            <p>Hi. I´m Rebecca, nice to meet you.</p>
            <div className="pb-8 pl-4 py-4 max-w-[1000px] sm:text-left text-sm">
              <p>I am currently studying my 5th year in Applied Computer Science at NTNU Gjøvik. </p>
              <p>
                <b>Linkedin: </b> <a className="hover:font-bold" href={'https://www.linkedin.com/in/rebecca-ruud-585975222/'}>Rebecca Ruud</a>
              </p>
              <p>
                <b>E-mail: </b> rebeccaruuud@gmail.com
              </p>
              <p>
                <b>Mobil: </b> +47 95922659
              </p>
              <p>
                <b>Birthday: </b> 11.06.1999
              </p>
            </div>
            <div>
              <p className="sm:text-left text-2xl">Education</p>
              <div className="pb-8 pl-4 py-4 max-w-[1000px] sm:text-left text-sm">
                <p>
                  <p className="font-bold ">
                    The Norwegian University of Science and Technology (NTNU)
                  </p>
                  <a className="hover:font-bold" href={'https://www.ntnu.no/studier/bit'}>Bachelor's degree in
                    informatics | 2020 - 2023</a> <br/>

                  <a className="hover:font-bold" href={'https://www.ntnu.no/studier/bit'}>Masters's degree in Applied
                    Computer Science | 2023 - 2025</a>
                </p>
                <p className="font-bold">
                  {" "}
                  <br/> Hamar Cathedral School
                </p>
                Higher education, general study specialization | 2015-2018
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-end align-bottom h-full">
              <img
                className="object-contain md:object-scale-down h-auto hidden md:block max-w-xs"
                src={me}
                alt="imageMe"
                style={{ width: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
