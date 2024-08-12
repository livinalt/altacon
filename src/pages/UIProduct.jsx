import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faExternalLink,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import pr1 from "../assets/Projects/pr1.jpg";
import projects from '../objects/projects'

const UIProduct = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          {/* Hero section */}
          <section className="h-[60vh] sm:h-[80vh] lg:h-[100vh] bg-[#DD1B00] flex items-center justify-center">
            <h2 className="text-center font-semibold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl w-4/5 sm:w-3/4 lg:w-2/3 xl:w-1/2 my-4 text-white">
              {project.title}
            </h2>
          </section>

          {/* Experience section */}
          <section className="p-4 sm:p-8 md:p-12 lg:p-16">
            <h3 className="text-lg sm:text-xl">G3</h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl my-4">
              {project.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="uppercase text-gray-500 text-xs sm:text-sm">
                  Client
                </p>
                <p className="text-base sm:text-lg font-medium">
                  {project.client}
                </p>
              </div>
              <div>
                <p className="uppercase text-gray-500 text-xs sm:text-sm">
                  Role
                </p>
                <p className="text-base sm:text-lg font-medium">
                  {project.role}
                </p>
              </div>
              <div>
                <p className="uppercase text-gray-500 text-xs sm:text-sm">
                  Industry
                </p>
                <p className="text-base sm:text-lg font-medium">
                  {project.industry}
                </p>
              </div>
              <div>
                <p className="uppercase text-gray-500 text-xs sm:text-sm">
                  Duration
                </p>
                <p className="text-base sm:text-lg font-medium">
                  {project.duration}
                </p>
              </div>
            </div>

            {/* Case Brief */}
            <section className="mt-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl py-4">
                Case Brief
                <FontAwesomeIcon
                  icon={faBriefcase}
                  size="sm"
                  opacity="50%"
                  color="blue"
                />
              </h2>
              <p className="py-6 sm:py-10 text-sm sm:text-base lg:text-lg text-justify leading-relaxed">
                {project.caseBrief}
              </p>
            </section>
          </section>

          <section className="mt-8 px-4 sm:px-8 lg:px-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">
              Defining The Problem
              <FontAwesomeIcon
                icon={faQuestionCircle}
                size="sm"
                opacity="50%"
                color="blue"
              />
            </h2>
            <p className="py-6 sm:py-10 text-sm sm:text-base lg:text-lg text-justify leading-relaxed">
              {project.problem}
            </p>

            <div className="w-full">
              <img
                src={project.imgSrc}
                alt="project_preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Repeated sections with adjusted styling */}
          {[
            "Design Process",
            "Ideation",
            "Wireframing",
            "Design System",
            "High Fidelity",
            "Prototype",
          ].map((sectionTitle, index) => (
            <section className="mt-8 px-4 sm:px-8 lg:px-16" key={index}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl py-4">
                {sectionTitle}
              </h2>
              <p className="py-6 sm:py-10 text-sm sm:text-base lg:text-lg text-justify leading-relaxed">
                {project[sectionTitle.toLowerCase().replace(" ", "")]}
              </p>

              <div className="w-full">
                <img
                  src={project.imgSrc}
                  alt="project_preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>
          ))}

          {/* Technologies */}
          <section className="p-4 sm:p-8 md:p-12 lg:p-16 bg-[#F0F0F0]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => (
                <p
                  className="text-base sm:text-lg font-regular px-4"
                  key={index}
                >
                  {tech}
                </p>
              ))}
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
                <span className="flex items-center gap-2 hover:text-white">
                  Live Link
                  <a href={project.liveLink} className="text-blue-600">
                    <FontAwesomeIcon icon={faExternalLink} size="sm" />
                  </a>
                </span>
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src={project.imgSrc}
                alt="project_preview"
                className="w-full h-auto object-cover"
              />
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-[#9DB3FF] h-[100vh] flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
            <div>
              <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl mb-4">
                Conclusion
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-justify leading-relaxed">
                {project.conclusion}
              </p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default UIProduct;
