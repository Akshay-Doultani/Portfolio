import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const CoverImage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#343E49] relative px-4">
      {/* Developer Text */}
      <h1 className="mt-28 text-5xl md:text-8xl font-bold mb-10 text-center" style={{ fontFamily: 'Matemasie, sans-serif', color: '#a7fce7' }}>
        Developer
      </h1>

      {/* Div with border, image, and details */}
      <div
        className="border-4 flex flex-col items-center p-4"
        style={{
          maxWidth: '100%',
          width: '330px',
          height: 'auto',
          minHeight: '500px',
          borderTopLeftRadius: '150px',
          borderBottomRightRadius: '150px',
          boxShadow: '0px 4px 15px 2px #a7fce7',
          borderColor: '#a7fce7',
        }}>
        {/* Circular Image */}
        <img
          src="/DomSfeBuWBTTTfEMsQcKP5HRTE.avif"
          alt="Akshay"
          className="w-28 h-28 mt-6 rounded-full mb-4 border-4"
          style={{ borderColor: '#a7fce7' }}
        />

        {/* Name */}
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-white text-center">Akshay</h2>

        {/* Title */}
        <h3 className="text-md md:text-lg text-gray-300 mb-4 text-center">Full Stack Developer</h3>

        {/* Email */}
        <div className="flex items-center mb-2 text-white">
          <FaEnvelope className="mr-2 text-[#a7fce7]" />
          <span className="text-sm md:text-base">your-email@example.com</span>
        </div>

        {/* Location */}
        <div className="flex items-center mb-2 text-white">
          <FaMapMarkerAlt className="mr-2 text-[#a7fce7]" />
          <span className="text-sm md:text-base">Jaipur</span>
        </div>

        {/* Work */}
        <div className="flex items-center text-white mb-4">
          <FaBriefcase className="mr-2 text-[#a7fce7]" />
          <span className="text-sm md:text-base">Student</span>
        </div>

        {/* Download Resume Button */}
        <a
          href="/akshay resume.pdf"
          download
          className="bg-[#a7fce7] text-black px-4 py-2 rounded hover:bg-[#8fe8d1] transition duration-300">
          Download Resume
        </a>
      </div>

      {/* Add space after the box */}
      <div className="flex flex-col md:flex-row mt-10">
        {/* Left Side Content */}
        <div className="flex flex-col mr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-7xl text-[#a7fce7] mb-4">Hey</h1>
          <h1 className="text-4xl md:text-7xl text-[#a7fce7] mb-4">I'm Akshay</h1>
          <h1 className="text-4xl md:text-7xl text-[#a7fce7]">Full-Stack Developer</h1>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-56 h-auto md:h-80 flex flex-col p-4 text-white items-center text-center" style={{ borderRadius: '80px', backgroundColor: '#202423' }}>
          <h1 className="text-lg md:text-xl mt-5 mb-8"><span className="text-2xl md:text-3xl">3</span> Programming Languages</h1>
          <h1 className="text-lg md:text-xl mb-8"><span className="text-2xl md:text-3xl">5</span> Development Tools</h1>
          <h1 className="text-lg md:text-xl"><span className="text-2xl md:text-3xl">2</span> Major Projects</h1>
        </div>
      </div>

      {/* Add space at the bottom */}
      <div className="h-20"></div>
    </div>
  );
};

export default CoverImage;
