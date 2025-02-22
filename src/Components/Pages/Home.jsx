import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import BackgroundCellAnimation from "../AnimationPages/BackgroundCellAnimation";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "../../Navigation/Footer";
import { Link } from "react-scroll";
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

  return (
    <>
      <div className="font-poppins  text-white -mt-16" id="home">
        <BackgroundCellAnimation />

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 grid gap-6 md:gap-8 lg:gap-10 z-40 opacity-95 w-full px-4 sm:px-6 lg:px-8">
  {/* Heading */}
  <p className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Oswald p-1 opacity-85 text-slate-100">
    Hey, I'm <span className="font-Oswald text-blue-500">Saurav G.C.</span>
  </p>

  {/* Subheading */}
  <h1 className="max-w-3xl mx-auto font-base text-sm sm:text-base md:text-lg lg:text-xl font-poppins text-center p-2 opacity-70">
  I'm a{" "}
  <span className="border-b border-purple-500 max-w-fit inline-block">Web Developer</span>
  <span>
    {" "}
    building and managing Websites and Web Applications that lead to impactful
    designs and enhance user engagement.
  </span>
</h1>

  {/* Connect Button */}
  <div className="flex text-lg justify-center text-blue-400 transition-all duration-300 ease-in-out">
    <Link
      to="contact"
      smooth={true}
      duration={500}
      className="flex items-center justify-center gap-2 text-lg text-blue-400 transition-all duration-300 ease-in-out hover:scale-105 hover:text-blue-500 cursor-pointer"
    >
      Connect with me
      <RiArrowRightSLine className="-ml-2 text-center text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
    </Link>
  </div>
</div>

        <div className="absolute hidden lg:grid top-1/3 left-0 z-40">
          {logo.map((item, index) => {
            return (
              <a
                href={`${item.to}`}
                key={index}
                className={`flex flex-cols-2 p-2 gap-7 -translate-x-28  hover:translate-x-[0.1px] hover:rounded-r-lg duration-700 delay-0  text-center items-center justify-end   bg-gradient-to-l from-slate-800 to-blue-300 opacity-90 cursor-pointer 
                 ${item.name === "Email"
                    ? `border-b  rounded-br-lg shadow border-[#EB493B]`
                    : `shadow-none`
                  }
                 ${item.name === "Github"
                    ? ` border-t rounded-tr-lg shadow-t-md `
                    : `shadow-none`
                  }
                  `}
              >
                <h1 className="text-lg font-poppins text-black font-medium ">
                  {item.name}
                </h1>
                <p className={`text-${item.color}   text-2xl text-center`}>
                  {item.icon}
                </p>
              </a>
            );
          })}
        </div>
        <div className="absolute bottom-3 flex  justify-center items-center opacity-8  w-full lg:pl-8">
        <div className="w-4 h-8 border border-gray-400 rounded-full flex justify-center ">
          <motion.div
            className="w-2 h-2 bg-blue-500 rounded-full"
            animate={{ y: [5, 15, 5] }}
            transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
          />
        </div>
       
      </div>
      </div>
    
     

      <div >
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
};
export default Home;
