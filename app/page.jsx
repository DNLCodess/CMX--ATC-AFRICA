"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Image from "next/image";
import image1 from "@/public/assests/img1.png";
import image2 from "@/public/assests/img2.png";
import image3 from "@/public/assests/img3.png";
import shirt1 from "@/public/assests/CMX SHIRT 1.png";
import shirt2 from "@/public/assests/CMX SHIRT 2.png";
import logo1 from "@/public/assests/logo1.png";
import logo2 from "@/public/assests/logo2.png";
import logo3 from "@/public/assests/logo3.png";
import logo4 from "@/public/assests/logo4.png";
import logo5 from "@/public/assests/logo5.png";
import logo6 from "@/public/assests/logo6.png";
import logo7 from "@/public/assests/logo7.png";
import logo8 from "@/public/assests/logo8.png";
import { motion } from "framer-motion";

export default function Home() {
  const endDate = new Date("2025-02-01T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = endDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Empty dependency array ensures this effect runs only on mount

  return (
    <div>
      <Hero />

      <div className="flex flex-col md:flex-row items-center justify-center bg-blue-500 text-white p-4 space-y-4 md:space-y-0">
        {/* Countdown Label */}
        <p className="text-xl font-semibold md:mr-4 text-center md:text-left">
          We’ll see you in
        </p>

        {/* Countdown Boxes */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md"
            >
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-gradient-to-b from-white to-blue-50 py-12 px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-black font-instrument">
            Who can Attend
          </h2>
          <p className="text-lg font-medium text-gray-700">
            Join us for Ibadan's community professionals Get together
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[
            "Community Managers",
            "Community Leads",
            "Community Lovers",
            "Community Team",
            "Community Associate",
            "Community Members",
          ].map((text, index) => (
            <div
              key={index}
              className="relative bg-blue-500 px-3  text-white w-full max-w-xs h-32 flex flex-col items-center justify-center rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-3"
            >
              {/* Number at the top */}
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white text-blue-500 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow mb-4">
                {index + 1}
              </span>
              <p className="text-xl font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-600 to-primary min-h-[15vh] flex items-center justify-center shadow-lg">
        <h1 className="text-white text-4xl text-center font-instrument font-extrabold tracking-wide">
          CMX Connect Ibadan Past Event
        </h1>
      </div>

      <section className="min-h-[800px] bg-gradient-to-b from-white to-gray-50 flex flex-col gap-12 py-12">
        {/* Event Images Section */}
        <div className="h-max w-full flex justify-center">
          <div className="w-full flex flex-col items-center justify-center py-12 px-6">
            <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-center md:justify-between gap-8 md:gap-7">
              {/* Image 1 */}
              <div className="w-full md:w-[30%] aspect-[4/3] bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <Image
                  src={image1}
                  alt="Event Image 1"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              {/* Image 2 */}
              <div className="w-full md:w-[30%] aspect-[4/3] bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <Image
                  src={image2}
                  alt="Event Image 2"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              {/* Image 3 */}
              <div className="w-full md:w-[30%] aspect-[4/3] bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <Image
                  src={image3}
                  alt="Event Image 3"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Swags Section */}
        <div className="h-auto w-full bg-white shadow-md flex flex-col items-center justify-center gap-8 py-12 px-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight text-center">
            Check out our Amazing Swags
          </h1>

          {/* Swag Images */}
          <div className="w-full lg:w-[80%] flex flex-col lg:flex-row justify-center lg:justify-between gap-8 lg:gap-10">
            {/* Swag Image 1 */}
            <div className="w-full lg:w-[48%] aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <Image
                src={shirt1}
                alt="Swag 1"
                className="w-full h-full object-cover hover:opacity-95 transition-opacity duration-300"
              />
            </div>

            {/* Swag Image 2 */}
            <div className="w-full lg:w-[48%] aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <Image
                src={shirt2}
                alt="Swag 2"
                className="w-full h-full object-cover hover:opacity-95 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-500 py-16">
        {/* Section Title */}
        <h1 className="text-white text-4xl text-center font-bold mb-10">
          Event Highlights
        </h1>

        {/* Highlights Grid */}
        <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { label: "Dance" },
            { label: "Fire-Chat" },
            { label: "Games" },
            { label: "Music" },
            { label: "Foods" },
            { label: "Networking" },
          ].map((highlight, index) => (
            <div
              key={index}
              className="bg-blue-600 shadow-lg rounded-lg p-5 text-center hover:bg-blue-200 hover:text-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{highlight.label}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-[40vh] w-full bg-white flex flex-col items-center overflow-hidden">
        <h1 className="text-blue-600 text-center text-4xl font-bold mb-10 py-8">
          Community Partners
        </h1>
        <motion.div
          className="w-full flex items-center"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="flex gap-6 w-full">
            {/* Duplicate the logos for seamless sliding */}
            {[...Array(2)].flatMap((_, i) =>
              [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8].map(
                (logo, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="flex justify-center min-w-[150px]"
                  >
                    <Image
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      className="h-20 w-auto"
                    />
                  </div>
                )
              )
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
