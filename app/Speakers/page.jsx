"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const [titleInView, setTitleInView] = useState(false);
  const [textInView, setTextInView] = useState(false);
  const [inView, setInView] = useState(false);

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

  const images = [
    "/assests/org3.png",
    "/assests/org3.png",
    "/assests/org3.png",
    "/assests/org3.png",
    "/assests/org3.png",
    "/assests/org3.png",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("image-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500">
      {/* Background Image Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assests/image 1.png')" }}
      >
        {/* Title Section */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
          <motion.h1
            id="title"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white"
            style={{
              WebkitTextStroke: "2px rgba(30, 64, 175, 1)", // Blue thick outline
              color: "white", // Keep the text white
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={
              titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 1 }}
          >
            Meet Our CPS Speakers
          </motion.h1>

          <motion.div
            className="w-20 h-1 mt-4 bg-blue-600 rounded"
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

      {/* Image Section */}
      <motion.div
        id="image-section"
        className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-3  gap-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-full h-60 sm:h-72 lg:h-80 overflow-hidden rounded-lg shadow-xl bg-gray-100 hover:scale-105 transform transition duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Page;
