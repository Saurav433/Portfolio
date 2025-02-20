// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// export const projects = [
//   {
//     title: "Uncensored!",
//     photo:"s.jpg",
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "Not published yet!",
//     photo:'sau.jpg',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "No project yet :(",
//     photo:'saurav.jpg',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "Just a demo :)",
//     photo:'bgBlack.avif',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "wait for my projects!",
//     photo:'background.png',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },
//   {
//     title: "Not yet!",
//     photo:'background.avif',
//     description:
//       "By clicking on the image may lead to my instragram account",
//     link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
//   },

// ];

// export const HoverEffect = () => {
//   let [hoveredIndex, setHoveredIndex] = useState(null); 

//   return (
//     <div className="lg:max-w-4xl mx-auto px-6">
//       <div className="grid grid-cols-3 md:grid-cols-2  lg:grid-cols-3  py-14">
//         {projects.map((project, idx) => (
//           <div
//             key={idx}
//             className="relative group block p-2 h-full w-full"
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <AnimatePresence>
//               {hoveredIndex === idx && (
//                 <motion.span
//                   className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
//                   layoutId="hoverBackground"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: 1,
//                     transition: { duration: 0.15 },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     transition: { duration: 0.15, delay: 0.2 },
//                   }}
//                 />
//               )}
//             </AnimatePresence>
//             <div className="rounded-2xl h-full w-full lg:p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-40">
//               <div className="relative z-40">
//                 <div className="lg:p-4">
//                   <h4 className="text-zinc-100 font-bold tracking-wide mt-4">
//                     {project.title}
//                   </h4>
//                   <a href={`${project.link}`} className="">
//                   <img src={`${project.photo}`} alt="project screenshots" className="rounded-lg lg:h-52 lg:w-72 object-cover object-center pt-1"/>
//                   </a>
//                   <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default HoverEffect;
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const projects = [
  {
    title: "Uncensored!",
    photo: "s.jpg",
    description: "By clicking on the image may lead to my Instagram account",
    link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
  },
  {
    title: "Not published yet!",
    photo: "sau.jpg",
    description: "By clicking on the image may lead to my Instagram account",
    link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
  },
  {
    title: "No project yet :(",
    photo: "saurav.jpg",
    description: "By clicking on the image may lead to my Instagram account",
    link: "https://www.instagram.com/sauravgc73?igsh=MjU0cnI1dXAzNTJv",
  },

];

export const HoverEffect = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 py-14">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative group block p-3 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-40">
              <div className="relative z-40">
                <div className="p-4">
                  <h4 className="text-zinc-100 font-bold tracking-wide mt-4 text-lg text-center">
                    {project.title}
                  </h4>
                  <a href={project.link} className="block mt-2">
                    <img
                      src={project.photo}
                      alt="project screenshot"
                      className="rounded-lg w-full h-52 object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm text-center">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverEffect;
