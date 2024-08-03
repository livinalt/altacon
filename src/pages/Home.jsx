import React from "react";
import { Box, RadioCards, Flex, Text } from "@radix-ui/themes";
import pr1 from "../assets/Projects/pr1.jpg";
import pr2 from "../assets/Projects/pr2.jpg";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: 1, name: "Project One", imgSrc: pr1, link: "/project/1" },
  { id: 2, name: "Project Two", imgSrc: pr2, link: "/project/2" },
  { id: 3, name: "Project Three", imgSrc: pr1, link: "/project/3" },
  { id: 4, name: "Project Four", imgSrc: pr1, link: "/project/4" },
  { id: 5, name: "Project Five", imgSrc: pr2, link: "/project/5" },
  { id: 6, name: "Project Six", imgSrc: pr1, link: "/project/6" },
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

  const handleImageClick = (link) => {
    navigate(link);
  };

  return (
    <div>
      {/* Hero section */}
      <section className="h-[100vh] flex items-center justify-center">
        <h2 className="text-left font-semibold text-4xl sm:text-5xl md:text-xl lg:text-7xl w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mt-[10vh] sm:mt-[15vh] md:mt-[20vh] lg:mt-[25vh] mb-[10vh] sm:mb-[15vh] md:mb-[20vh] lg:mb-[25vh] ml-4 sm:ml-8 md:ml-12 lg:ml-20 bg-gradient-to-r from-[#1266C8] to-[#093262] bg-clip-text text-transparent">
          Transforming Ideas into Interactive Masterpieces with Cutting-Edge
          Design and Development
        </h2>
      </section>

      {/* Projects with sticky navigation */}
      <section>
        <Box
          maxWidth="100%"
          className="sticky top-0 left-0 bg-white p-4 shadow-lg z-50"
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

        {/* UI/UX Section */}
        <div
          id="uiux"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mt-8"
        >
          {projects.map((project) => (
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
                className="absolute inset-0 flex items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: getRandomColor() }}
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
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

        {/* FrontEnd Section */}
        {/* Add your FrontEnd section here */}

        {/* Web3 Section */}
        {/* Add your Web3 section here */}
      </section>

      {/* Academy section */}
      <section className="flex flex-col md:flex-row items-center h-[100vh] p-10 md:p-20 bg-gray-200">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl w-full md:w-7/12 mb-4">
            Join the Next Generation of Innovators
          </h2>
          <p className="text-base md:text-lg w-full md:w-9/12 mb-6">
            Expert-led courses to master the art of UI/UX design, front-end
            development, and smart contract programming.
          </p>
          <button className="px-8 py-2 border rounded-3xl bg-blue-600 text-white hover:bg-blue-700">
            Connect
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
