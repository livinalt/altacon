import React from "react";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center bg-[#093262] text-white p-8 sm:p-12 lg:p-16 h-[60vh]">
      <div className="mb-8 lg:mb-0 lg:w-1/2 text-center lg:text-left">
        <h3 className="text-lg sm:text-xl mb-4">Contact</h3>
        <p className="mb-6">Have ideas you want to collaborate on?</p>
        <button className="px-6 sm:px-10 py-2 border rounded-3xl hover:bg-blue-700 transition-all">
          <span className="flex items-center gap-2">
            Let's Connect!
            <a href="">
              <FontAwesomeIcon
                icon={faExternalLink}
                size="sm"
                style={{ color: "#ffffff" }}
              />
            </a>
          </span>
        </button>
      </div>

      <div className="lg:w-1/2 text-center lg:text-left">
        <h3 className="text-lg sm:text-xl mb-4">Links</h3>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
          <a href="" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="" className="hover:text-blue-400 transition-colors">
            Solutions
          </a>
          <a href="" className="hover:text-blue-400 transition-colors">
            Academy
          </a>
          <a href="" className="hover:text-blue-400 transition-colors">
            Privacy
          </a>
          <a href="" className="hover:text-blue-400 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
