import React from "react";
import Design from "../assets/design-icon.png";
import Developing from "../assets/developing-icon.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full sm:h-screen bg-[#7895B2]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-grey-500">
            Skills
          </p>
          <p className="py-4">Take a look at my skills</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 text-center py-8">
          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img
              className="w-10 mx-auto"
              src={Developing}
              alt="Developing icon"
            />
            <p className="my-4 font-semibold">Courses <br/> (The most relevant ones)</p>
            <p className="my-4">
            Web Technologies (IT2805) <br/>
            Information Technology (TDT4109) <br/>
            Object-Oriented Programming (TDT4100) <br/>
            Human–Computer Interaction (TDT4180) <br/>
            Security and robustness in ICT systems (TTM4185) <br/>
            Algorithms and Data Structures (TDT4120) <br/>
            Informatics, Project I (IT1901) <br/>
            Data Modelling, Databases and Database Management Systems (TDT4145) <br/>
            Software Engineering (TDT4140) <br/>
            Information Systems (TDT4175) <br/>
            Web Development (IT2810) <br/>
            </p>
           
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Design} alt="Design icon" />
            <p className="my-4 font-semibold">Experience with </p>
            <p className="my-4 text-center">
            I have experience with Git, Agile development methodologys and a various programming languages and frameworks like:<br />
          <li> django </li>
          <li> Python </li>
          <li> java </li>
          <li> React </li>
          <li> Tailwind </li>
          <li> Javascript </li>
          <li> Typescript </li>
          <li> HTML </li>
          <li> CSS </li>
          <li> SQL </li>
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Skills;

//Programmeringsspråk
//Andre skills (Presentation) (kan klikke seg inn på bilder av foredrag og arbeid jeg har gjort)
//Design

//Arrangering
