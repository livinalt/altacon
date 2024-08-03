import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import pr1 from "../assets/Projects/pr1.jpg";

const Case = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="h-[60vh] sm:h-[80vh] lg:h-[100vh] bg-[#DD1B00] flex items-center justify-center">
        <h2 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] mt-[10vh] sm:mt-[15vh] md:mt-[20vh] lg:mt-[25vh] mb-[10vh] sm:mb-[15vh] md:mb-[20vh] lg:mb-[25vh] text-white">
          E-Mentoring Spaces for Coaches
        </h2>
      </section>

      {/* Experience section */}
      <section className="p-4 sm:p-8 md:p-12 lg:p-16 h-auto">
        <h3 className="text-lg sm:text-xl">G3</h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl my-4">
          E-Mentoring Spaces for Coaches
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="uppercase text-gray-500 text-xs sm:text-sm">Client</p>
            <p className="text-base sm:text-lg font-medium">Promax</p>
          </div>
          <div>
            <p className="uppercase text-gray-500 text-xs sm:text-sm">Role</p>
            <p className="text-base sm:text-lg font-medium">
              Frontend Engineer
            </p>
          </div>
          <div>
            <p className="uppercase text-gray-500 text-xs sm:text-sm">
              Industry
            </p>
            <p className="text-base sm:text-lg font-medium">Health</p>
          </div>
          <div>
            <p className="uppercase text-gray-500 text-xs sm:text-sm">
              Duration
            </p>
            <p className="text-base sm:text-lg font-medium">1 Week</p>
          </div>
        </div>

        {/* Case Brief */}
        <section className="mt-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl py-4">Case Brief</h2>
          <p className="py-10 text-sm sm:text-base lg:text-lg text-justify leading-relaxed">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences. I must explain to you how all
            this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound
            the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences. I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness.
          </p>
        </section>
      </section>

      {/* Technologies */}
      <section className="p-4 sm:p-8 md:p-12 lg:p-16 bg-[#F0F0F0] flex flex-col lg:flex-row gap-10 items-start lg:items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">Technologies</h2>
        <div className="flex flex-wrap gap-4">
          <p className="text-base sm:text-lg font-regular px-4">Web Design</p>
          <p className="text-base sm:text-lg font-regular px-4">
            Graphics Design
          </p>
          <p className="text-base sm:text-lg font-regular px-4">
            Interactive Design
          </p>
          <p className="text-base sm:text-lg font-regular px-4">Prototyping</p>
          <p className="text-base sm:text-lg font-regular px-4">
            User Experience Design
          </p>
          <p className="text-base sm:text-lg font-regular px-4">
            Project Management
          </p>
        </div>
      </section>

      {/* Live Project */}
      <section className="h-[100vh] p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl py-4 lg:py-0">
            Live Project
          </h2>

          <p className="mb-4">
            Expert-led courses to master the art of UI/UX design, front-end
            development, and smart contract programming.
          </p>

          <button className="px-6 sm:px-10 py-2 border rounded-3xl hover:bg-blue-700 transition-all">
            <span className="flex items-center gap-2">
              Live Link
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FontAwesomeIcon icon={faExternalLink} size="sm" />
              </a>
            </span>
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src={pr1}
            alt="project_preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Code Repository Project */}
      <section className="h-[100vh] p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl py-4 lg:py-0">
            Code Repository
          </h2>

          <p className="mb-4">
            Expert-led courses to master the art of UI/UX design, front-end
            development, and smart contract programming.
          </p>

          <button className="px-6 sm:px-10 py-2 border rounded-3xl hover:bg-blue-700 transition-all">
            <span className="flex items-center gap-2">
              Live Link
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FontAwesomeIcon icon={faExternalLink} size="sm" />
              </a>
            </span>
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src={pr1}
            alt="project_preview"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-[#9DB3FF] h-[100vh] flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
        <div>
          <h2 className=" text-center text-2xl sm:text-3xl lg:text-4xl mb-4">
            Conclusion
          </h2>
          <p className="text-sm text-justify sm:text-base lg:text-lg leading-relaxed text-justify">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences. I must explain to you how all
            this mistaken idea of denouncing pleasure and praising pain was born
            and I will give you a complete account of the system, and expound
            the actual teachings of the great explorer of the truth, the
            master-builder of human happiness.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Case;
