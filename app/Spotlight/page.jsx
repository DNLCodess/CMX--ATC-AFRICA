"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import logo from "../../public/assests/CMX Connect Ibadan Logo.png";

const Footer = () => {
  const phoneNumber = "+2348123051357"; // Replace with your phone number
  const message = "Will like to Sponsor/Partner";

  const handleClick = (event) => {
    event.preventDefault();
    if (typeof window !== "undefined") {
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  const quickLinks = [
    { href: "/Spotlight", label: "Community Spotlight" },
    { href: "#", label: "Sponsor", onClick: handleClick },
    { href: "/Organizers", label: "Organizer" },
    { href: "/", label: "Merch" },
  ];

  const connectLinks = [
    {
      href: "https://chat.whatsapp.com/HNFdaaieX4h1OnSUzOUVmo",
      label: "Join CMX Connect Ibadan",
    },
    { href: "https://www.cmxhub.com", label: "Contact Us" },
    {
      href: "https://www.linkedin.com/company/cmx-connect-ibadan/posts/?feedView=all",
      label: "Follow Us",
    },
  ];

  return (
    <footer className="bg-primary w-full flex flex-col md:flex-row h-max items-center justify-between gap-10 px-8 md:px-36 py-8">
      {/* Logo Section */}
      <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
        <Image
          src={logo}
          alt="Logo"
          className="h-16 w-auto mx-auto md:mx-0"
          layout="intrinsic"
          priority
        />
      </div>

      {/* Footer Links Container */}
      <div className="flex flex-col md:flex-row justify-between w-full md:w-auto gap-10">
        {/* Quick Links Section */}
        <div className="w-full md:w-auto">
          <ul className="flex flex-col gap-4 text-center md:text-left">
            <li className="font-bold text-white">Quick Links</li>
            {quickLinks.map(({ href, label, onClick }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={onClick}
                  className="text-white hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Section */}
        <div className="w-full md:w-auto">
          <ul className="flex flex-col gap-4 text-center md:text-left">
            <li className="font-bold text-white">Connect</li>
            {connectLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/company/cmx-connect-ibadan/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 text-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/CmxIbadan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 text-lg"
                aria-label="Twitter"
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
