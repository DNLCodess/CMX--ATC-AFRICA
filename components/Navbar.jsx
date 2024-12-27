"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/assests/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 lg:px-12 py-4">
        {/* Logo */}
        <Image
          src={logo}
          alt="image showing logo"
          height={50}
          width={50}
          className="cursor-pointer"
        />

        {/* Hamburger/Close Icon */}
        <div
          className="lg:hidden cursor-pointer text-black z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes size={24} className="text-blue-500" />
          ) : (
            <FaBars size={24} className="text-black" />
          )}
        </div>

        {/* Nav Links */}
        <ul
          className={`flex flex-col lg:flex-row lg:gap-8 gap-6 lg:items-center fixed lg:static inset-0 lg:inset-auto bg-white lg:bg-transparent pt-20 lg:pt-0 pl-8 lg:pl-0 h-full lg:h-auto w-full lg:w-auto transition-transform duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <li>
            <a
              href="/"
              className="text-black lg:text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=" https://www.cmxhub.com/"
              className="text-black lg:text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              About CMX Connect
            </a>
          </li>
          <li>
            <a
              href="https://photos.google.com/u/1/"
              className="text-black lg:text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              Past Event
            </a>
          </li>
          <li>
            <a
              href="/Organizers"
              className="text-black lg:text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              Organizers
            </a>
          </li>
          {/* Sponsor Us Button */}
          <li>
            <a
              href="/sponsor"
              className="bg-blue-500 text-white rounded-lg px-4 py-2 lg:px-6 lg:py-2.5 transition-transform duration-300 hover:bg-blue-600 hover:scale-105"
            >
              Sponsor Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
