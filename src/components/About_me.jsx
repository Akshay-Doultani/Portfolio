import React from 'react';

const AboutMe = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-screen px-4 md:px-12 bg-blue-100">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Light Circle Shape */}
        <div className="bg-blue-200 opacity-40 w-52 h-52 md:w-72 md:h-72 rounded-full absolute top-10 left-10 md:left-20"></div>
        {/* Larger Soft Shape */}
        <div className="bg-purple-200 opacity-30 w-72 h-72 md:w-96 md:h-96 rounded-full absolute bottom-10 right-16 md:right-32"></div>
        {/* Subtle Pattern or Overlay */}
        <div className="absolute inset-0 bg-white opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row w-full items-start z-10 mt-8">
        {/* Left Side - About Me Heading */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800" style={{ textShadow: '3px 3px rgba(0, 0, 0, 0.4)' }}>
            About me
          </h1>
          <img src="/web-developer-digital-avatar-generative-ai_934475-9147 (1).png" alt="avatar" className="bg-blue-100 bg-opacity-70 rounded-full mt-5 w-40 h-40 md:w-56 md:h-56" />
        </div>

        {/* Right Side - Paragraph and Button */}
        <div className="pl-0 md:pl-11 flex flex-col justify-start">
          <p className="text-sm md:text-lg text-gray-700 mb-3 md:mb-4 max-w-full md:max-w-xl">
            I am currently pursuing my Master of Computer Applications (MCA) with a strong focus on web development. I have developed a solid understanding of the MERN stack (MongoDB, Express.js, React.js, Node.js) and have experience building and deploying full-stack applications.
            <br /><br />
            One of my recent projects involves creating an Airbnb-like platform using React, Material-UI, MongoDB, and Express. This project highlights my ability to manage both frontend and backend development effectively.
            <br /><br />
            I am passionate about creating efficient, user-friendly web applications and continuously improving my skills in software development. I am eager to apply my knowledge to real-world challenges and contribute to innovative projects.
          </p>
          <a
              href="/akshayresume.pdf"
              download
              className="bg-[#a7fce7] text-black px-4 py-2 rounded shadow-lg hover:bg-[#8fe8d1] transition duration-300 text-center"
              >
              Download Resume
            </a>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
