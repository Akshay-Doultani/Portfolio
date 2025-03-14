import React from 'react';

const AboutMe = () => {
  return (
    <div 
      className="relative flex flex-col md:flex-row min-h-[115vh] px-4 md:px-12" 
      style={{ 
        fontFamily: "'Poppins', sans-serif", 
        background: "linear-gradient(to bottom right, #1E1E2E, #2A2A3A)", // Gradient background added
        color: "#ffffff" // Ensuring text remains readable
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Light Circle Shape */}
        <div className="bg-blue-300 opacity-30 w-52 h-52 md:w-72 md:h-72 rounded-full absolute top-10 left-10 md:left-20"></div>
        {/* Larger Soft Shape */}
        <div className="bg-purple-300 opacity-20 w-72 h-72 md:w-96 md:h-96 rounded-full absolute bottom-10 right-16 md:right-32"></div>
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row w-full items-start z-10 mt-8">
        {/* Left Side - About Me Heading */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white" 
            style={{ textShadow: '3px 3px rgba(0, 0, 0, 0.4)' }}
          >
            About Me
          </h1>
          <img 
            src="/web-developer-digital-avatar-generative-ai_934475-9147 (1).png" 
            alt="avatar" 
            className="bg-blue-100 bg-opacity-70 rounded-full mt-5 w-40 h-40 md:w-56 md:h-56" 
          />
        </div>

        {/* Right Side - About Content */}
        <div className="pl-0 md:pl-11 flex flex-col justify-start">
          <p className="text-sm md:text-lg text-gray-300 mb-3 md:mb-4 max-w-full md:max-w-xl leading-relaxed">
            I am a passionate <strong>Full-Stack Developer</strong> with expertise in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js). Currently pursuing my <strong>Master of Computer Applications (MCA)</strong>, I have been actively honing my skills in <strong>web development, cloud computing, and modern software architecture</strong>.
            <br /><br />
            My journey in development began with a strong curiosity for how web applications function behind the scenes. Over the past <strong>two years</strong>, I have <strong>built and deployed multiple full-stack applications</strong>, integrating <strong>third-party libraries</strong> like <strong>Firebase, Google Console, and Redux</strong> to create seamless user experiences.
            <br /><br />
            I thrive on <strong>problem-solving</strong> and <strong>building scalable, high-performance applications</strong>. Whether it’s optimizing databases, implementing secure authentication, or designing intuitive UIs, I am always eager to push my limits and stay up-to-date with the latest technologies.
            <br /><br />
            Beyond coding, I am deeply interested in <strong>software development life cycle (SDLC), cloud services, and DevOps practices</strong>. My goal is to contribute innovative solutions in a dynamic and challenging environment where I can grow as a developer while <strong>solving real-world problems</strong>.
          </p>

          {/* GitHub Button with extra bottom spacing */}
          <a
            href="https://github.com/Akshay-Doultani"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a7fce7] text-black px-4 py-2 rounded shadow-lg hover:bg-[#8fe8d1] transition duration-300 text-center mb-10"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
