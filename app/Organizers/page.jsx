"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Page = () => {
  const organizers = [
    { name: "Tope James Moses", image: "/assests/org1.png" },
    { name: "Kehinde Arasi", image: "/assests/org2.png" },
    { name: "Victor Elite Ogunbode", image: "/assests/org3.png" },
    { name: "Nwaigwe Kelechi", image: "/assests/org4.png" },
    { name: "Abdulkareem Aishat", image: "/assests/org5.png" },
    { name: "Emmanuel Oluwatosin Ogunwole", image: "/assests/org6.png" },
    { name: "Idris Aderoju", image: "/assests/org_7.png" },
  ];

  const [visibleOrganizers, setVisibleOrganizers] = useState([]);

  // Intersection Observer for the organizer cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleOrganizers((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".organizer-card");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="h-[40vh] w-full flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-primary tracking-wide">
          Meet the Incredible Organizer
        </h1>
        <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl">
          Great events are the result of dedicated teams. Community
          Professionals Hangout is no different. Meet the passionate individuals
          behind this incredible event.
        </p>
      </div>

      <div className="bg-primary h-[5vh]"></div>
      <div className="flex flex-wrap justify-center gap-8 p-8 bg-gray-50">
        {organizers.map((person, index) => (
          <motion.div
            key={index}
            data-index={index}
            className="organizer-card relative w-40 sm:w-48 md:w-56 text-center rounded-lg shadow-md bg-white hover:scale-105 hover:shadow-2xl transform transition duration-300 ease-in-out overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={
              visibleOrganizers.includes(index)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent opacity-0 hover:opacity-100 transition duration-300">
                <p className="absolute bottom-2 left-2 text-sm text-white font-semibold bg-black/40 px-2 py-1 rounded-lg">
                  Organizer
                </p>
              </div>
            </div>
            <div className="py-4 px-3">
              <p className="text-lg font-semibold text-gray-800">
                {person.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
