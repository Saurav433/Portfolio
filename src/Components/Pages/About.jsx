
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { SiAdobephotoshop, SiTailwindcss } from "react-icons/si";

const About = () => {
  const skill = [
    { id: 1, name: "HTML5", icon: <FaHtml5 />, color: "text-[#E34F26]" },
    { id: 2, name: "CSS3", icon: <FaCss3Alt />, color: "text-[#1572B6]" },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJsSquare />,
      color: "text-[#F7DF1E]",
    },
    { id: 4, name: "React", icon: <FaReact />, color: "text-[#61DBFB]" },
    {
      id: 5,
      name: "Photoshop",
      icon: <SiAdobephotoshop />,
      color: "text-[#F24E1E]",
    },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-[#38BDF8]",
    },
    { id: 7, name: "Figma", icon: <FaFigma />, color: "text-[#F24E1E]" },
    { id: 8, name: "GitHub", icon: <FaGithub />, color: "text-white" },
  ];

  return (
    <div
      className="font-poppins text-white bg-[#020617] min-h-screen py-6  px-5 lg:px-20"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-5">
        <p className="text-4xl font-semibold max-w-full text-center text-blue-600">
         ABOUT ME <span className='text-red-500 text-4xl font-Londrina'>.</span> <span className='text-yellow-500 text-4xl font-Londrina'>.</span>  <span className='text-green-700 text-4xl font-Londrina'>.</span>
        </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 ">
          {/* About Me Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-blue-400 text-center">
              GET TO KNOW ME!
            </h2>
            <div className="flex justify-center">
              {/* Creative Photo Design */}
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 bg-slate-800 rounded-lg transform rotate-6"></div>
                <img
                  src="saurav2.jpg"
                  alt="Saurav"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg transform -rotate-6 transition-transform duration-300 hover:rotate-0"
                />
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm <span className="text-cyan-500 font-semibold">Saurav</span>, a
              passionate{" "}
              <span className="font-semibold">web developer</span>{" "}
              dedicated to transforming ideas into interactive and responsive
              websites. With a strong focus on clean design and efficient coding
              practices, I craft digital experiences that truly resonate with
              users. Let's collaborate to bring your vision to life!
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-blue-400 text-center">
              My Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skill.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#111827] rounded-lg p-4 flex flex-col items-center justify-center space-y-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-md hover:shadow-cyan-500/20"
                >
                  <div className={`${item.color} text-3xl`}>{item.icon}</div>
                  <h3 className="text-gray-300 text-sm font-semibold">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

