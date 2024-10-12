import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion,useScroll, useSpring } from "framer-motion";

const Nav = () => {
  const navitems = [
    { id: 0, name: "Home", to: "/" },
    { id: 1, name: "About", to: "/about" },
    { id: 2, name: "Project", to: "/project" },
    { id: 3, name: "Contact", to: "/contact" },
  ];

  const [selectedLink, setSelectedLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };

  const {scrollYProgress}=useScroll();
  const scaleX= useSpring(scrollYProgress);
  return (
    <>
    <div className="fixed flex w-full z-50 ">

      <div className="fixed flex w-full justify-between text-white h-[3.9rem]  items-center bg-[#000000] shadow-black  p-3 z-50 shadow-lg  ">
        
       
        {/* logo */}
        <div className="mx-4 md:mx-20 flex gap-4 items-center">
          
          <img onClick={gotohome} src="Sgc.jpg" alt="" className="h-[3.9rem] w-28 cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        <motion.div
          className={`flex-col md:flex-row md:flex items-center absolute md:static top-14 left-0 w-full bg-[#1b244b] md:bg-transparent md:w-auto`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        {/* navitems */}
        <div className={`flex-col md:flex-row md:flex items-center absolute md:static top-14 left-0 w-full bg-[#1b244b] md:bg-transparent md:w-auto transition-transform duration-300 ${isMenuOpen ? "translate-y-0" : "translate-y-[-200%]"} md:translate-y-0`}>
          <div className="mx-4 md:mx-20 space-y-2 md:space-y-0 md:space-x-10 flex md:flex-row flex-col">
            {navitems.map((item, i) => {
              const isSelected = item.name === selectedLink;
              return (
                <Link
                  key={i}
                  to={item.to}
                  className={`relative text-xl font-semibold leading-10 no-underline ${
                    isSelected ? "font-bold text-blue-600" : "text-white"
                  }`}
                  onClick={() => {
                    setSelectedLink(item.name);
                    setIsMenuOpen(false); // Close menu on item click
                  }}
                >
                  {item.name}
                  {isSelected && (
                    <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[2px]">
                      <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                        <motion.path
                          d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                          stroke="#7043EC"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{
                            strokeDasharray: 84.20591735839844,
                            strokeDashoffset: 84.20591735839844,
                          }}
                          animate={{
                            strokeDashoffset: 0,
                          }}
                          transition={{
                            duration: 1,
                          }}
                        />
                      </svg>
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
       
      </div>

      <motion.div
      className="z-50 rounded-r-3xl bg-gradient-to-r from-purple-500 to-pink-500 lg:h-[1.5px] h-[1px]"
        style={{
          scaleX,
          transformOrigin:'left',
          width:'100%',
          transition:{
            duration:1,
            delay:0.5,

          } 
        }}
        >
        </motion.div>
        </div>
    </>
  );
};

export default Nav;
