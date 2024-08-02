import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faWhatsapp,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#093262] text-white p-4 sm:p-8">
      <hr className="w-full opacity-10 mb-4" />
      <div className="flex flex-col sm:flex-row justify-between items-center text-center">
        <p className="text-xs mb-4 sm:mb-0">
          Made by AltaconSolutions — Copyright 2023
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            aria-label="WhatsApp"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a
            href="#"
            aria-label="Basketball"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon
              icon={faBasketballBall}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </a>
          <a
            href="#"
            aria-label="Behance"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            <FontAwesomeIcon
              icon={faBehance}
              size="lg"
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
