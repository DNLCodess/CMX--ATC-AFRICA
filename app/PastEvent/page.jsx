"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import event1 from "../../public/assests/event1.png";
import event2 from "../../public/assests/event2.png";
import event3 from "../../public/assests/event3.png";
import event4 from "../../public/assests/event4.png";
import event5 from "../../public/assests/event5.png";
import event6 from "../../public/assests/event6.png";
import event7 from "../../public/assests/event7.png";
import event8 from "../../public/assests/event8.png";
import event9 from "../../public/assests/event9.png";

const page = () => {
  const [titleInView, setTitleInView] = useState(false);
  const [textInView, setTextInView] = useState(false);

  const images = [
    event1,
    event2,
    event3,
    event4,
    event5,
    event6,
    event7,
    event8,
    event9,
  ];

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
      <div
        className="relative h-[30vh] md:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/assests/image 1.png')" }}
      >
        {/* Title Section */}
        <div className="absolute inset-0 bg-white bg-opacity-30 flex flex-col items-center justify-center gap-3">
          <motion.h1
            id="title"
            className="text-4xl sm:text-4xl font-instrument md:text-5xl font-bold text-blue-500"
            initial={{ opacity: 0, y: -10 }}
            animate={
              titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            transition={{ duration: 1 }}
          >
            See Our Past Event
          </motion.h1>
          <motion.p
            id="text"
            className="max-w-6xl text-base text-center text-black  px-4 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
          >
            The CMX Connect Ibadan Past Event saw a gathering of community
            leaders and professionals within the Oyo ecosystem, engaging in
            discussions on the expansion and development of the community
            ecosystem.
          </motion.p>
        </div>
      </div>
      <div className="bg-primary h-[5vh]"></div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg group"
          >
            <Image
              src={image}
              alt={`Event ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1 filter grayscale group-hover:filter-none"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
