import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="h-[60vh] sm:h-[80vh] lg:h-[100vh] flex items-center justify-center">
        <h2 className="text-center font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mt-[10vh] sm:mt-[15vh] md:mt-[20vh] lg:mt-[25vh] mb-[10vh] sm:mb-[15vh] md:mb-[20vh] lg:mb-[25vh] bg-gradient-to-r from-[#1266C8] to-[#093262] bg-clip-text text-transparent">
          About
        </h2>
      </section>

      {/* Experience section */}
      <section className="p-5 sm:p-10 bg-gray-200">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">Experience</h2>

        {/* Experience 1 */}
        <section className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 py-4 sm:py-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl w-full sm:w-[40vw] lg:w-[30vw]">
            Product Design (UI/UX Design) | <br />
            <span className="text-gray-400">2023 - Present</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg w-full">
            Providing guidance and mentorship to aspiring product designers,
            focusing on user-centered design principles and best practices. I
            help mentees develop their skills in UI/UX design, design thinking,
            and prototyping, enabling them to create effective and engaging
            digital products.
          </p>
        </section>

        {/* Experience 2 */}
        <section className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 py-4 sm:py-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl w-full sm:w-[40vw] lg:w-[30vw]">
            Front-End Development | <br />
            <span className="text-gray-400">2023 - Present</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg w-full">
            Specializing in building responsive, interactive, and user-friendly
            web applications using modern front-end technologies like React,
            HTML, CSS, and JavaScript. I collaborate with design and back-end
            teams to implement features, optimize performance, and ensure
            cross-browser compatibility.
          </p>
        </section>

        {/* Experience 3 */}
        <section className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 py-4 sm:py-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl w-full sm:w-[40vw] lg:w-[30vw]">
            Web3 Applications Development | <br />
            <span className="text-gray-400">2023 - Present</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg w-full">
            Developing decentralized applications (DApps) on blockchain
            platforms, focusing on smart contract integration, security, and
            scalability. I work with technologies like Solidity, Ethereum, and
            IPFS to create innovative solutions that leverage the power of
            blockchain.
          </p>
        </section>
      </section>

      {/* Abilities */}
      <section className="p-5 sm:p-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">Skills and Tools</h2>
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 p-4 lg:p-10">
          <div className="flex-1">
            <p className="p-2 sm:p-4">Web Design</p>
            <p className="p-2 sm:p-4">Graphics Design</p>
            <p className="p-2 sm:p-4">Interactive Design</p>
            <p className="p-2 sm:p-4">Prototyping</p>
            <p className="p-2 sm:p-4">User Experience Design</p>
            <p className="p-2 sm:p-4">Project Management</p>
          </div>

          <div className="flex-1">
            <p className="p-2 sm:p-4">HTML</p>
            <p className="p-2 sm:p-4">CSS</p>
            <p className="p-2 sm:p-4">JavaScript</p>
            <p className="p-2 sm:p-4">Bootstrap</p>
            <p className="p-2 sm:p-4">TailwindCSS</p>
            <p className="p-2 sm:p-4">ReactJs</p>
          </div>

          <div className="flex-1">
            <p className="p-2 sm:p-4">Solidity</p>
            <p className="p-2 sm:p-4">Cairo</p>
            <p className="p-2 sm:p-4">Contract Testing</p>
            <p className="p-2 sm:p-4">Foundry</p>
            <p className="p-2 sm:p-4">Hardhat</p>
            <p className="p-2 sm:p-4">Remix IDE</p>
            <p className="p-2 sm:p-4">Security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
