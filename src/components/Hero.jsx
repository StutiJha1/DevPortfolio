import React from "react";
import myPhoto from "../assets/myphoto.jpeg"; // lowercase, matches your file

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 bg-white">
      
      {/* Left: Tiny Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
        <img
          src={myPhoto}
          alt="Stuti Jha"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-lg border-2 border-maroon"
        />
      </div>

      {/* Right: Name and About */}
      <div className="text-center md:text-left max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-maroon mb-2">
          Stuti Jha
        </h1>
        <p className="text-sm md:text-base text-maroon leading-relaxed">
          I'm a 3rd-year Computer Science student at Toronto Metropolitan University,
          passionate about building innovative and impactful technology. Skilled in Python,
          Java, C, and React. I focus on creating high-performance applications and exploring
          advancements in AI, full-stack development, and user-centric design.
        </p>
      </div>

    </section>
  );
}
