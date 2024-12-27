import React from "react";
import Image from "next/image";
import hero1 from "@/public/assests/hero-1.png";
import hero2 from "@/public/assests/hero-2.png";
import hero3 from "@/public/assests/hero-3.png";

const Hero = () => {
  const handleGetTicket = () => {
    window.open("https://flutterwave.com/pay/a5trcezpucjs", "_blank");
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
          Ibadan <br /> Community Professionals Dinner/Awards
        </h1>
        <h3 className="text-black text-xl lg:text-3xl font-semibold">
          Owanbe Edition
        </h3>

        <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
          <button
            className="py-3 px-6 text-primary border-2 border-primary font-instrument text-lg rounded hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            onClick={handleGetTicket}
          >
            Get Ticket
          </button>
          <button className="py-3 px-6 text-primary border-2 border-primary font-instrument text-lg rounded hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
            Apply as Sponsor
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="relative w-full lg:w-[50%] flex justify-center items-center animate-slideUp"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px]">
          {/* Image 1 */}
          <div
            className="absolute top-0 -left-3 sm:-left-5 lg:-left-10 transform rotate-[-5deg] z-20 transition-all duration-500 hover:scale-105 hover:rotate-[-2deg]"
            style={{ willChange: "transform" }}
          >
            <Image
              src={hero3}
              alt="Image 1"
              width={350}
              height={250}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 2 */}
          <div
            className="absolute -top-5 -right-6 sm:-right-8 lg:-right-16 transform -rotate-[2deg] z-30 transition-all duration-500 hover:scale-105 hover:rotate-0"
            style={{ willChange: "transform" }}
          >
            <Image
              src={hero1}
              alt="Image 2"
              width={350}
              height={250}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Image 3 */}
          <div
            className="absolute -bottom-5 left-6 sm:left-8 lg:left-24 transform rotate-[-5deg] z-10 transition-all duration-500 hover:scale-105 hover:rotate-[-3deg]"
            style={{ willChange: "transform" }}
          >
            <Image
              src={hero2}
              alt="Image 3"
              width={320}
              height={200}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
