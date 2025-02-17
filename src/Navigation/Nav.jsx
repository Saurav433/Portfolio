
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Nav = () => {
  const navitems = [
    { id: 0, name: "Home", target: "home" },
    { id: 1, name: "About", target: "about" },
    { id: 2, name: "Project", target: "project" },
    { id: 3, name: "Contact", target: "contact" },
  ];

  const [selectedLink, setSelectedLink] = useState("Home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Use IntersectionObserver to update the active nav item based on section in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const activeItem = navitems.find((item) => item.target === id);
          if (activeItem) {
            setSelectedLink(activeItem.name);
            moveUnderline(activeItem.name);
          }
        }
      });
    }, options);

    // Observe each section
    navitems.forEach((item) => {
      const section = document.getElementById(item.target);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-3 flex justify-center items-center w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-16"
      }`}
    >
      <div className="relative flex items-center shadow-lg px-4 py-2 rounded-full bg-gray-900 bg-opacity-90 backdrop-blur-3xl shadow-black lg:px-6">
        {/* Logo */}
        <div className="relative flex items-center gap-2 cursor-pointer border-[0.1px] border-purple-300 rounded-full">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setSelectedLink("Home")}
          >
            <img src="saurav1.jpg" alt="Logo" className="w-6 h-6 rounded-full" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="relative flex ml-4 space-x-4 text-white lg:ml-10 lg:space-x-8">
          {navitems.map((item) => (
            <Link
              key={item.id}
              to={item.target}
              smooth={true}
              duration={500}
              className={`relative text-sm lg:text-lg font-sm font-poppins cursor-pointer pb-1 transition-colors ${
                selectedLink === item.name
                  ? "text-blue-400 font-semibold"
                  : "hover:text-blue-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;