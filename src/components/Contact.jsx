// import React from "react";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.css';
import {Link} from "react-router-dom"
import Solutions from "../pages/Solutions";
import Privacy from "../pages/Privacy";

const Contact = () => {
  return (
    <div className="contactBackground flex flex-col lg:flex-row justify-between items-center lg:items-center bg-[#093262] text-white p-8 sm:p-12 lg:p-16 h-[60vh]">
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
          
          <Link to="/about" className="hover:underline">
            About
          </Link>

          <Link to="/solutions" className="hover:underline">
            Solutions
          </Link>

          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>

          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link> 

        </div>
      </div>
    </div>
  );
};

export default Contact;
