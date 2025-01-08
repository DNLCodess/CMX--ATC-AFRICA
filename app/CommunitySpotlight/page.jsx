"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Ensure animations only render on the client
  }, []);

  const groups = [
    "ALX Oyo",
    "TON Nigeria Community",
    "Social Media Managers Circle",
    "Startup Grind Ibadan",
    "SAFETY NETWORK SOCIETY",
    "Women in Defi Ibadan",
    "Themainceos",
    "Ibadan Tableau User Group",
    "Paperless",
    "3MTT Oyo",
    "Ibadan Entrepreneurship Network",
    "Techies Node",
    "For The Love Defi",
    "Christian Tech Community",
    "Github campus community, UI",
    "Technology Advocacy Initiatives",
    "Google Developers Community",
    "She code Africa UI",
    "RAIN Community Ibadan",
    "AI Saturday Ibadan",
    "SUWA Talents Community",
    "Friends of Figma",
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 200, 0);

      const title = document.getElementById("title");
      const text = document.getElementById("text");

      if (title) title.style.opacity = opacity;
      if (text) text.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return null; // Prevent SSR mismatch

  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[30vh] md:h-[50vh] bg-cover bg-center"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: "url('/assests/image 1.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/10 flex flex-col items-center justify-center gap-3">
          <motion.h1
            id="title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 uppercase tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Community Spotlight
          </motion.h1>
          <motion.p
            id="text"
            className="max-w-6xl text-sm md:text-base text-center text-black px-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Explore the vibrant community scene in the Oyo ecosystem
          </motion.p>
        </div>
      </section>
      <div className="bg-primary h-[5vh]"></div>
      {/* Content Section */}
      <section className="max-w-6xl mx-auto p-8 space-y-4">
        {groups.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <span className="text-sm font-semibold text-gray-700 text-center">
              {item}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
