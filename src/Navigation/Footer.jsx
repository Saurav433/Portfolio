
// import React from "react";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0F1725] text-white border-t border-slate-800 font-poppins  shadow-lg shadow-black relative overflow-hidden">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#0F1725] via-[#1E293B] to-[#0F1725] opacity-50"></div>

//       {/* Glass Morphism Effect */}
//       {/* <div className="absolute inset-0 backdrop-blur-md"></div> */}

//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-evenly space-y-6 md:space-y-0 relative z-10">
     
       

//         {/* Right Section - Social Media */}
//         <div className="flex flex-col items-center md:items-end">
//           <p className="text-lg md:text-xl font-semibold pb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
//             Let's Connect!
//           </p>
//           <div className="flex justify-center space-x-6">
//             <a
//               href="https://github.com/Saurav433"
//               className="hover:scale-125 transition-transform duration-300"
//             >
//               <FaGithub className="text-white text-3xl hover:text-blue-500" />
//             </a>
//             <a
//               href="https://linkedin.com/in/saurav-g-c-885964324"
//               className="hover:scale-125 transition-transform duration-300"
//             >
//               <FaLinkedin className="text-3xl text-[#1469C7] hover:text-blue-500" />
//             </a>
//             <a
//               href="mailto:Sauravgc2060@gmail.com"
//               className="hover:scale-125 transition-transform duration-300"
//             >
//               <SiGmail className="text-3xl text-[#EB493B] hover:text-blue-500" />
//             </a>
//             <a
//               href="https://x.com/S4URAVgc"
//               className="hover:scale-125 transition-transform duration-300"
//             >
//               <FaXTwitter className="text-3xl text-white hover:text-blue-500" />
//             </a>
//             <a
//               href="https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv"
//               className="hover:scale-125 transition-transform duration-300"
//             >
//               <FaInstagram className="text-3xl text-pink-500 hover:text-blue-500" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section - Copyright */}
//       <div className="text-center mt-8 text-sm md:text-md text-white opacity-80 relative z-10">
//         &copy; {new Date().getFullYear()} Saurav G.C. All Rights Reserved.
//       </div>

     
      
      

//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0F1725] text-white py-6 text-center font-poppins border-t border-gray-700">
      <p className="text-sm opacity-75">&copy; {new Date().getFullYear()} Saurav G.C. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
