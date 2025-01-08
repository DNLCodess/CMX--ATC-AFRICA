"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero1 from "@/public/assests/hero-1.jpg";
import hero2 from "@/public/assests/hero-2.png";
import hero3 from "@/public/assests/hero-3.png";

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Rotate every 600ms

    return () => clearInterval(interval);
  }, [images.length]);

  const handleGetTicket = () => {
    window.open("https://flutterwave.com/pay/h71xlwnq1jnd", "_blank");
  };
  const phoneNumber = "+2348123051357"; // Replace with your phone number
  const message = "Will like to Sponsor/Partner";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="bg-white min-h-[560px] w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 lg:py-16 gap-8 relative ">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-20 pointer-events-none"></div>

      {/* Text Section */}
      <div
        className="flex flex-col w-full lg:w-[40%] text-center lg:text-left gap-6 animate-fadeIn"
        style={{ animationDelay: "0.2s" }}
      >
        <h1 className="text-primary text-4xl lg:text-6xl font-bold font-montserrat leading-tight">
          Ibadan <br /> Community Professionals Summit (Owanbe Edition)
        </h1>
        <h3 className="text-black text-xl lg:text-3xl font-semibold">
          A summit for Community proffesionals in the oyo ecosystem
        </h3>

        <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
          <button
            className="py-3 px-6 text-primary border-2 border-primary font-instrument text-lg rounded hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            onClick={handleGetTicket}
          >
            Get Ticket
          </button>
          <button
            className="py-3 px-6 text-primary border-2 border-primary font-instrument text-lg rounded hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            onClick={handleClick}
          >
            Apply as Sponsor
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-[50%] flex mt-14 md:mt-0 justify-center items-center">
        <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transform transition-all duration-500 ${
                index === currentIndex
                  ? "z-30 opacity-100 scale-105"
                  : "z-10 opacity-0 scale-95"
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                willChange: "transform, opacity",
              }}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={450}
                height={450}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
