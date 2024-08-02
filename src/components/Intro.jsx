import React from "react";
import resume from "../assets/Resume.pdf";
import { IoMdDownload } from "react-icons/io";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Miroj Rai
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className=" text-m max-w-xl mb-6 font-bold">
        I would like to describe myself as a learner who is always keen to learn
        new skills and would like to experience everything the life has to
        offer. I am a Computer Science student with a strong interest in
        fullstack web application development and machine learning. I love to
        solve problems in the most effecient way possible.
        <br />
        <br />I am a huge football and <span className=" text-red-600">Ba</span>
        <span className=" text-red-500">r</span>
        <span className=" text-red-400">c</span>
        <span className=" text-blue-400">e</span>
        <span className=" text-blue-500">l</span>
        <span className=" text-blue-600">ona</span> fan! I also love playing
        chess.
      </p>
      <button className=" flex justify-center items-center border p-2 rounded-lg">
        <a href={resume} download="Resume.pdf">
          Download CV
        </a>{" "}
        <IoMdDownload />
      </button>
    </div>
  );
};

export default Intro;
