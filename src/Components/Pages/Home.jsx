import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BackgroundCellAnimation from "../AnimationPages/BackgroundCellAnimation";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../../Navigation/Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const logo = [
    {
      id: 0,
      icon: <FaGithub />,
      name: "Github",
      color: "white",
      to: "https://github.com/Saurav433",
    },
    {
      id: 1,
      icon: <FaLinkedin />,
      name: "LinkedIN",
      color: "blue-600",
      to: "https://linkedin.com/in/saurav-g-c-885964324",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      name: "Instagram",
      color: "pink-500",
      to: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
    },
    {
      id: 3,
      icon: <FaXTwitter />,
      name: "Twitter",
      color: "white",
      to: "https://x.com/S4URAVgc",
    },
    {
      id: 4,
      icon: <FaRegEnvelope />,
      name: "Email",
      color: "[#EB493B]",
      to: "mailto:Sauravgc2060@gmail.com",
    },
  ];
  const navigate = useNavigate();
  const gotoproject = () => {
    navigate("/project");
  };
  return (
    <>
      <div className="font-poppins  text-white ">
        <BackgroundCellAnimation />

        <div className="absolute top-1/2 lg:translate-x-1/2   -translate-y-1/3 grid gap-10 z-40 opacity-95">
          <p className="text-center font-bold text-7xl font-Oswald p-1 opacity-85">
            Hey, I'm <span className=" font-Oswald">Saurav G.C.</span>
          </p>
          <h1 className="max-w-3xl font-base text-xl font-poppins text-center p-1 opacity-70">
            I'm a dynamic{" "}
            <span className="border-b border-purple-500 border-opacity-70">
              Web Developer
            </span>{" "}
            building and managing Websites and Web Applications that leads to
            impactful designs that enhance user engagement.
          </h1>
          <div className="max-h-max  p-3  text-center">
            <button
              onClick={gotoproject}
              className=" max-h-md max-w-md px-20 py-3 shadow-md opacity-85 hover:opacity-100 shadow-slate-900 hover:shadow-slate-700  transition-transform hover:scale-105 delay-105 bg-gradient-to-l from-blue-600 to-cyan-500 hover:bg-gradient-to-r from-blue-600 to-cyan-500 duration-75 text-center rounded-lg text-xl font-medium "
            >
              Projects
            </button>
          </div>
        </div>

        <div className="absolute hidden lg:grid top-1/3 left-0 z-40">
          {logo.map((item, index) => {
            return (
              <a
                href={`${item.to}`}
                key={index}
                className={`flex flex-cols-2 p-2 gap-6 -translate-x-28  hover:translate-x-[0.1px] hover:rounded-r-lg duration-700 delay-0  text-center items-center justify-end   bg-gradient-to-l from-slate-800 to-blue-300 opacity-90 cursor-pointer 
                 ${
                   item.name === "Email"
                     ? `border-b  rounded-br-lg shadow border-[#EB493B]`
                     : `shadow-none`
                 }
                 ${
                   item.name === "Github"
                     ? ` border-t rounded-tr-lg shadow-t-md `
                     : `shadow-none`
                 }
                  `}
              >
                <h1 className="text-lg font-poppins text-black font-medium ">
                  {item.name}
                </h1>
                <p className={`text-${item.color} text-3xl text-center`}>
                  {item.icon}
                </p>
              </a>
            );
          })}
        </div>
      </div>

      <div>
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
};
export default Home;
