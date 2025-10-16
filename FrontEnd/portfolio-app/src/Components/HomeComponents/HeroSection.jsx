import React from "react";
import resume from "../../assets/file.pdf";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto px-4 py-8 bg-white">
      {/* Left Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-4xl font-bold text-[#21243D] leading-tight">
          Hi, I am John,
          <br />
          Creative Technologist
        </h1>

        <p className="text-[#21243D] text-sm md:text-base leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>

        <a
          href={resume}
          download="Resume.pdf"
          className="inline-block bg-[#FF6464] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#e55a5a] transition duration-300 cursor-pointer"
        >
          Download Resume
        </a>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
          alt="Profile"
          className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-8 border-[#EDF7FA]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
