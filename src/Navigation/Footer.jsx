import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>

      <footer className="bg-black text-white py-6 border-t-2 border-slate-900 font-poppins">
        <div className="text-center grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <div className="space-y-4 ">
            <p className=" text-xl">Designed & Developed by <span className="  text-3xl font-semibold font-Sacramento text-blue-500 ">Saurav G.C.</span></p>
            
            <p>click on the home page grid  for<span className="text-blue-500"> background ripple effect </span></p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-semibold mb-4">Let's Connect!</p>
            <div className="flex justify-center space-x-4 mb-6">
              <a href="https://github.com/Saurav433">
                <FaGithub className="text-white text-3xl transition-transform hover:scale-125 duration-300" />
              </a>
              <a href="https://linkedin.com/in/saurav-g-c-885964324">
                <FaLinkedin className="text-3xl text-[#1469C7] transition-transform hover:scale-125 duration-300" />
              </a>
              <a href="mailto:Sauravgc2060@gmail.com">
                <SiGmail className="text-3xl text-[#EB493B] transition-transform hover:scale-125 duration-300" />
              </a>
              <a href="https://x.com/S4URAVgc">
                <FaXTwitter className="text-3xl text-white transition-transform hover:scale-125 duration-300" />
              </a>
              <a href="https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv">
                <FaInstagram className="text-3xl text-pink-500 transition-transform hover:scale-125 duration-300" />
              </a>
            </div>
            <p className="text-md text-white mt-5">
              &copy; {new Date().getFullYear()} Saurav G.C. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
