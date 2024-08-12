import React, { useState, useEffect } from "react";
import { Box, RadioCards, Flex, Text } from "@radix-ui/themes";
import '../components/Contact.css'
import pr1 from "../assets/Projects/pr1.jpg";
import pr2 from "../assets/Projects/pr2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Project One",
    imgSrc: pr1,
    link: "/project/1",
    category: "UIUX",
  },
  {
    id: 2,
    name: "Project Two",
    imgSrc: pr2,
    link: "/project/2",
    category: "FrontEnd",
  },
  {
    id: 3,
    name: "Project Three",
    imgSrc: pr1,
    link: "/project/3",
    category: "Web3 DApp",
  },
  {
    id: 4,
    name: "Project Four",
    imgSrc: pr1,
    link: "/project/4",
    category: "UIUX",
  },
  {
    id: 5,
    name: "Project Five",
    imgSrc: pr2,
    link: "/project/5",
    category: "FrontEnd",
  },
  {
    id: 6,
    name: "Project Six",
    imgSrc: pr1,
    link: "/project/6",
    category: "Web3 DApp",
  },
];

const getRandomColor = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F333FF",
    "#FF33A1",
    "#33FFF2",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Home = () => {
  const navigate = useNavigate();
  const [isStickyVisible, setStickyVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("project-nav");
      const sectionOffsetTop = section.offsetTop;

      if (window.scrollY >= sectionOffsetTop) {
        setStickyVisible(true);
      } else {
        setStickyVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleImageClick = (link) => {
    navigate(link);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      {/* Hero section */}
      <section className="heroBackground h-[100vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-xl sm:text-4xl lg:text-7xl max-w-6xl mx-auto bg-gradient-to-r from-[#1266C8] to-[#093262] bg-clip-text text-transparent leading-tight">
          Transforming Ideas into Interactive Masterpieces with Cutting-Edge
          Design and Development
        </h2>
        <div className="relative mt-8 p-4 rounded-full">
          <div className="absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300 ease-in-out hover:border-gradient-to-r hover:from-[#1266C8] hover:to-[#093262]">
            <FontAwesomeIcon
              icon={faCircleChevronDown}
              size="3x"
              className="relative text-[#cdcdcd] transition-colors duration-300 ease-in-out hover:text-[#1266C8]"
            />
          </div>
        </div>
      </section>

      {/* Projects with sticky navigation */}
      <section id="project-nav">
        <Box
          maxWidth="100%"
          className={`sticky top-0 left-0 bg-white p-4 shadow-lg z-50 transition-opacity duration-500 ${
            isStickyVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex justify-center space-x-4 mt-4 mb-8">
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-4 py-2 border rounded-md"
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("UIUX")}
              className="px-4 py-2 border rounded-md"
            >
              UIUX
            </button>
            <button
              onClick={() => setSelectedCategory("FrontEnd")}
              className="px-4 py-2 border rounded-md"
            >
              FrontEnd
            </button>
            <button
              onClick={() => setSelectedCategory("Web3 DApp")}
              className="px-4 py-2 border rounded-md"
            >
              Web3 DApp
            </button>
          </div>

        </Box>


        {/* Project Display */}
        <div
          id="uiux"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onClick={() => handleImageClick(project.link)}
            >
              <img
                src={project.imgSrc}
                alt={project.name}
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: getRandomColor() }}
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm mb-2">{project.category}</p>
                  <a
                    href={project.link}
                    className="px-4 py-2 border border-white rounded-3xl bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center h-[100vh] p-10 md:p-20 bg-gray-200">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl w-full md:w-7/12 mb-4">
            Join the Next Generation of Innovators
          </h2>
          <p className="text-base md:text-lg w-full md:w-9/12 mb-6">
            Expert-led courses to master the art of UI/UX design, front-end
            development, and smart contract programming.
          </p>
          <button className="px-8 py-2 border border-blue-600 rounded-3xl text-blue-600 hover:bg-[#1266C8] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-300">
            Discover More
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={pr1}
            alt="academy_section_image"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
