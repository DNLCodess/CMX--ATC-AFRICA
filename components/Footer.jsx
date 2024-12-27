import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import logo from "../public/assests/logow.png";

const Footer = () => {
  return (
    <footer className="bg-primary w-full flex flex-col md:flex-row items-center justify-between gap-10 px-8 md:px-36 py-8">
      {/* Logo Section */}
      <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
        <Image src={logo} alt="Logo" className="h-16 w-auto mx-auto md:mx-0" />
      </div>

      {/* Footer Links Container */}
      <div className="flex flex-col md:flex-row justify-between w-full md:w-auto gap-10">
        {/* Quick Links Section */}
        <div className="w-full md:w-auto">
          <ul className="flex flex-col gap-4 text-center md:text-left">
            <li className="font-bold text-white">Quick Links</li>
            <li>
              <a href="/community-leads" className="text-white hover:underline">
                Community Leads
              </a>
            </li>
            <li>
              <a href="/sponsor" className="text-white hover:underline">
                Sponsor
              </a>
            </li>
            <li>
              <a href="/Organizers" className="text-white hover:underline">
                Organizer
              </a>
            </li>
            <li>
              <a href="/merch" className="text-white hover:underline">
                Merch
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="w-full md:w-auto">
          <ul className="flex flex-col gap-4 text-center md:text-left">
            <li className="font-bold text-white">Connect</li>
            <li>
              <a href="/cmx-connect" className="text-white hover:underline">
                Join Our CMX Connect
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/follow-us" className="text-white hover:underline">
                Follow Us
              </a>
            </li>
            <li className="flex justify-center md:justify-start gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 text-lg"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 text-lg"
              >
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
