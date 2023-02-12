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
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/IT2805/2019/1#tab=omEmnet'}>Web Technologies (IT2805)</a> <br/>
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/TDT4109#tab=omEmnet'}>Information Technology (TDT4109)</a> <br/>
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/TDT4100#tab=omEmnet'}>Object-Oriented Programming (TDT4100)</a> <br/> 
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/TDT4180#tab=omEmnet'}>Human-Computer Interaction (TDT4180)</a> <br/> 
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/TTM4185#tab=omEmnet'}>Security and robustness in ICT systems (TTM4185)</a> <br/> 
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/TDT4120#tab=omEmnet'}>Algorithms and Data Structures (TDT4120)</a> <br/> 
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/IT1901#tab=omEmnet'}>Informatics, Project I (IT1901)</a> <br/>
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/TDT4145#tab=omEmnet'}>Data Modelling, Databases and Database Management Systems (TDT4145)</a> <br/>
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/TDT4140#tab=omEmnet'}>Software Engineering (TDT4140)</a> <br/>
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/TDT4175#tab=omEmnet'}>Information Systems (TDT4175)</a> <br/>
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/IT2810#tab=omEmnet'}>Web Development (IT2810)</a> <br/>
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/TDT4237/#tab=omEmnet'}>Software Security and Data Privacy (TDT4237)</a> <br/>
            <a className="hover:font-bold" href={'https://www.ntnu.edu/studies/courses/IT2901#tab=omEmnet'}>Informatics Project II (IT2901)</a> <br/>
            </p>
           
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-110 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Design} alt="Design icon" />
            <p className="my-4 font-semibold">Experience with </p>
            <p className="my-4 text-center">
            I have experience with Git, Agile development methodologys and a various programming languages and frameworks like:<br />
           django <br/>
          Python <br/>
          java <br/>
          React <br/>
          Svelte <br/>
          Tailwind <br/>
          Javascript <br/>
          Typescript <br/>
          HTML <br/>
          CSS <br/>
          SQL <br/>
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};



export default Skills;
