import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary w-full flex flex-col md:flex-row md:justify-end gap-10 px-8 md:px-36 py-8">
      {/* Quick Links Section */}
      <div className="w-full md:w-[25%]">
        <ul className="flex flex-col gap-4">
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
            <a href="/organizer" className="text-white hover:underline">
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
      <div className="w-full md:w-[25%]">
        <ul className="flex flex-col gap-4">
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
          <li className="flex gap-4">
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
    </footer>
  );
};

export default Footer;
