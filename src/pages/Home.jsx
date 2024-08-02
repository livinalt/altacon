import React from "react";
import { Box, RadioCards, Flex, Text } from "@radix-ui/themes";
import pr1 from "../assets/Projects/pr1.jpg";
import pr2 from "../assets/Projects/pr2.jpg";

const Home = () => {
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
        <div id="uiux" className="flex flex-wrap mt-8">
          <div className="flex flex-wrap justify-between">
            <img
              src={pr1}
              alt="image_one"
              className="w-full sm:w-1/2 lg:w-1/3 h-auto"
            />
            <img
              src={pr2}
              alt="image_two"
              className="w-full sm:w-1/2 lg:w-1/3 h-auto"
            />
            <img
              src={pr1}
              alt="image_three"
              className="w-full sm:w-1/2 lg:w-1/3 h-auto"
            />
            <img
              src={pr1}
              alt="image_four"
              className="w-full sm:w-1/2 lg:w-1/3 h-auto"
            />
            <img
              src={pr2}
              alt="image_five"
              className="w-full sm:w-1/2 lg:w-1/3 h-auto"
            />
            <img
              src={pr1}
              alt="image_six"
              className="w-full sm:w-1/2 lg:w-1/3 h-auto"
            />
          </div>
        </div>

        {/* FrontEnd Section */}
     

        {/* Web3 Section */}
        
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
