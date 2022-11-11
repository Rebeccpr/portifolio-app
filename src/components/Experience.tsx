import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="w-full h-screen bg-[#E8DFCA] text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-flow-row-dense grid-cols-2 gap-10">
          <div className="sm:text-right pl-4">
            <p className="text-3xl font-bold border-b-4 border-gray-700 ;">
              Work Experience
            </p>
            <p className="text-sm text-left pl-4 ;"> 
              <ul className="pt-4">
                <li className="font-bold">Teaching assistant, Excitet NTNU (AUG 2021 - d.d)</li>
                 <p>- Teaching assistant at Centre of Excellent IT Education <br/>
                 - Assists first-year students in all subjects as a student assistant <br/>
                 - Various projects within recruitment, motivation etc. <br/>
                 - Project coordinator for the group Academic research assistance<br/>
                 </p>
                <li className="font-bold pt-4">Marihøna farm and outdoor kindergarten (APR 2020 - d.d)</li>
                <p>- Plan and carry out games and activities, both indoors and outdoors <br/>
                - Responsibility and interaction with the children
                 </p>
                 <li className="font-bold pt-4">The army (JUL 2018 - JUL 2019)</li>
                <p>- Served firs service in the army <br/>
                - Trustee in the squad
                 </p>
                 <li className="font-bold pt-4">Heartbreake managment, Modeling agency (2015 - d.d)</li>
                <p>- Modeling for different brands
                 </p>
              </ul> 
            </p>
            </div>
            <div>
              <p className="text-3xl font-bold border-b-4 border-gray-700 ;">
                Voluntary Work
              </p>
              <p className="text-sm text-left pl-4 ;">
              <ul >
              <li className="font-bold pt-4">Subjects and courses committee, Line association Online (AUG 2020 - d.d)</li>
                <p>- Responsibility for Online's booking round <br/>
                - Arranging and conducting courses
                 </p>
                 <li className="font-bold pt-4">The It excursion committee, Line association Online (FEB 2022 - SEP 2022)</li>
                <p>- Responsibility for booking companies <br/>
                - Plan and implement events during ITEX
                 </p>
              </ul>
              </p>
            </div>       
        </div>
      </div>
    </div>
  );
};

export default Experience;
