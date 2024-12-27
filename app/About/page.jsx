"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [titleInView, setTitleInView] = useState(false);
  const [textInView, setTextInView] = useState(false);

  // Intersection Observer for the title
  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleInView(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    const titleElement = document.getElementById("title");
    if (titleElement) {
      titleObserver.observe(titleElement);
    }

    return () => {
      if (titleElement) {
        titleObserver.disconnect();
      }
    };
  }, []);

  // Intersection Observer for the text section
  useEffect(() => {
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const textElement = document.getElementById("text");
    if (textElement) {
      textObserver.observe(textElement);
    }

    return () => {
      if (textElement) {
        textObserver.disconnect();
      }
    };
  }, []);

  return (
    <div className="relative bg-white">
      {/* Background Image Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assests/image 1.png')" }}
      >
        {/* Title Section */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <motion.h1
            id="title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={
              titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            transition={{ duration: 1 }}
          >
            About the Summit
          </motion.h1>
          <motion.div
            className="w-16 h-1 mt-2 bg-blue-600 rounded"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              titleInView
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 0, opacity: 0 }
            }
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>

      {/* Description Section */}
      <motion.div
        id="text"
        className="max-w-4xl mx-auto px-6 py-12 text-center text-gray-700"
        initial={{ opacity: 0 }}
        animate={textInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-base sm:text-lg leading-[2.4] font-montserrat">
          The Ibadan Community Professional Summit aims to bring together Oyo’s
          professional community to cultivate collaboration and innovation,
          ultimately driving ecosystem growth and benefiting individual members
          and their teams.
        </p>
        <p className="text-base sm:text-lg leading-[2.4] mt-6 font-montserrat">
          The future of technology in our ecosystem hinges on community-driven
          initiatives to foster talent development and innovation. This summit
          aims to promote collaboration and explore how we can cultivate local
          talent, strengthen connections, and forge future business and
          community partnerships to drive innovation in Oyo.
        </p>
      </motion.div>
    </div>
  );
};

export default Page;
