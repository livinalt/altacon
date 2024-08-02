import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"; 

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#093262] text-white">
      <hr className="w-full opacity-10" />
      <div className="text-center flex justify-between p-8">
        <p className="text-xs items-center">
          Made by AltaconSolutions — Copyright 2023
        </p>
        <div className="flex justify-evenly gap-4">
          <a href="">
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="sm"
              style={{ color: "#ffffff" }}
            />
          </a>

          <a href="">
            <FontAwesomeIcon
              icon={faBasketballBall}
              size="sm"
              style={{ color: "#ffffff" }}
            />
          </a>

          <a href="">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="sm"
              style={{ color: "#ffffff" }}
            />
          </a>

          <a href="">
            <FontAwesomeIcon
              icon={faTwitter}
              size="sm"
              style={{ color: "#ffffff" }}
            />
          </a>

          <a href="">
            <FontAwesomeIcon
              icon={faBehance}
              size="sm"
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
