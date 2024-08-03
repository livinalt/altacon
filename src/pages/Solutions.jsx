import React, { useState, useEffect } from "react";
import { Box, RadioCards, Flex, Text } from "@radix-ui/themes";
import pr1 from "../assets/Projects/pr1.jpg";
import pr2 from "../assets/Projects/pr2.jpg";
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
    category: "UIUX",
  },
  {
    id: 3,
    name: "Project Three",
    imgSrc: pr1,
    link: "/project/3",
    category: "FrontEnd",
  },
  {
    id: 4,
    name: "Project Four",
    imgSrc: pr1,
    link: "/project/4",
    category: "FrontEnd",
  },
  {
    id: 5,
    name: "Project Five",
    imgSrc: pr2,
    link: "/project/5",
    category: "Web3 DApp",
  },
  {
    id: 6,
    name: "Project Six",
    imgSrc: pr1,
    link: "/project/6",
    category: "Web3 DApp",
  },
  // Add more projects here
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

const Solutions = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isStickyVisible, setStickyVisible] = useState(false);

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
      <section className="h-[60vh] sm:h-[80vh] lg:h-[100vh] flex items-center justify-center">
        <h2 className="text-center font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mt-[10vh] sm:mt-[15vh] md:mt-[20vh] lg:mt-[25vh] mb-[10vh] sm:mb-[15vh] md:mb-[20vh] lg:mb-[25vh] bg-gradient-to-r from-[#1266C8] to-[#093262] bg-clip-text text-transparent">
          Case Studies
        </h2>
      </section>

      {/* Projects with sticky navigation */}
      <section id="project-nav">
        <Box
          maxWidth="100%"
          className={`sticky top-0 left-0 bg-white p-4 shadow-lg z-50 transition-opacity duration-500 ${
            isStickyVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <RadioCards.Root
            defaultValue="1"
            className="flex justify-center space-x-2 sm:space-x-4"
          >
            <RadioCards.Item value="1" asChild>
              <a href="#uiux">
                <Flex direction="column" align="center" className="h-auto">
                  <Text weight="bold">UI/UX</Text>
                  <Text>Product Design</Text>
                </Flex>
              </a>
            </RadioCards.Item>
            <RadioCards.Item value="2" asChild>
              <a href="#frontend">
                <Flex direction="column" align="center" className="h-auto">
                  <Text weight="bold">FrontEnd</Text>
                  <Text>Applications</Text>
                </Flex>
              </a>
            </RadioCards.Item>
            <RadioCards.Item value="3" asChild>
              <a href="#web3">
                <Flex direction="column" align="center" className="h-auto">
                  <Text weight="bold">Web3</Text>
                  <Text>Decentralised Apps</Text>
                </Flex>
              </a>
            </RadioCards.Item>
          </RadioCards.Root>
        </Box>

        {/* Category Filter */}
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
    </div>
  );
};

export default Solutions;
