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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const gotocontact = () => {
    navigate("/contact");
  };
  return (
    <div className="font-poppins  lg:space-y-16 space-y-5 h-screen text-white bg-[#020617]  ">
      <div className="grid items-center text-center justify-center lg:space-y-8 pt-5">
        <p className="text-4xl font-semibold max-w-full text-center text-blue-600">
          ABOUT ME <span className='text-red-500 text-4xl font-Londrina'>.</span> <span className='text-yellow-500 text-4xl font-Londrina'>.</span>  <span className='text-green-700 text-4xl font-Londrina'>.</span>
        </p>
        <p className="max-w-2xl text-md lg:text-xl font-light">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="text-center grid gap-5 lg:gap-10 grid-cols-2">
        <div className="text-center space-y-10 lg:space-x-24">
          <h1 className="text-2xl font-semibold whitespace-nowrap text-yellow-400">
            GET TO ME!
          </h1>
          <p className="max-w-full  text-xs  text-start lg:pl-0 pl-5 lg:text-lg">
            I'm <span className="border-b border-cyan-500">Saurav</span>, a
            passionate{" "}
            <span className="border-b border-green-200">web developer</span>{" "}
            dedicated to transforming ideas into interactive and responsive
            websites. With a strong focus on clean design and efficient coding
            practices, I craft digital experiences that truly resonate with
            users. Let's collaborate to bring your vision to life!
          </p>
          <p className="max-w-full  text-xs text-start pl-5 lg:pl-0 lg:text-lg">
            I’m actively seeking job opportunities where I can contribute,
            learn, and grow. If you have an exciting opportunity that aligns
            with my skills and experience, feel free to reach out!
          </p>
          <div className="flex justify-center pl-5 lg:pl-0">
            <button onClick={gotocontact} className="px-8 py-2 md:px-20 md:py-3 transition-transform hover:scale-105 delay-105 bg-gradient-to-l from-blue-500 to-cyan-500 hover:bg-gradient-to-r from-blue-600 to-cyan-500 duration-75 text-center rounded-lg text-xl font-semibold">
              CONTACT
            </button>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-semibold text-yellow-400">My Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-2">
            {skill.map((items) => (
              <div key={items.id} className="grid items-center justify-center">
                <div className="bg-[#111827] flex items-center justify-center lg:w-40 lg:h-24 w-28 h-12 rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <p className={`${items.color} text-xl lg:text-4xl`}>
                      {items.icon}
                    </p>
                    <h2 className="lg:text-lg text-sm font-lg text-[#006d77] text-center">
                      {items.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

