import React, { useState } from 'react';

const Skills = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const skills = [
    { imgSrc: '/react-js-icon.png', title: 'React JS', content: 'Used for building dynamic UI components and interactive web applications.' },
    { imgSrc: '/1012820_code_development_logo_nodejs_icon.png', title: 'Node.js', content: "Backend JavaScript runtime used for building scalable APIs and web servers." },
    { imgSrc: '/icons8-express-js-80.png', title: 'Express.js', content: 'Fast and minimal backend framework for building REST APIs with Node.js.' },
    { imgSrc: '/icons8-mongodb-144.png', title: 'MongoDB', content: 'NoSQL database used for handling large amounts of unstructured data.' },
    { imgSrc: '/icons8-redux-144.png', title: 'Redux', content: 'State management library to handle complex application states efficiently.' },
    { imgSrc: '/icons8-java-logo-144.png', title: 'Java', content: 'Object-oriented programming language used for enterprise and backend applications.' },
    { imgSrc: '/cpp.png', title: 'C++', content: 'High-performance language used for system programming and game development.' },
    { imgSrc: '/firebase.png', title: 'Firebase', content: 'Google-backed platform for authentication, databases, and cloud functions.' },
    { imgSrc: '/googlecloud.png', title: 'Google Cloud', content: 'Used for managing and deploying applications on Google Cloud.' },
    { imgSrc: '/icons8-javascript-144.png', title: 'JavaScript', content: 'Core programming language for web development and browser-based applications.' },
    { imgSrc: '/icons8-git-logo-144.png', title: 'Git', content: 'Version control system for tracking changes in source code.' },
    { imgSrc: '/icons8-tailwind-css-100.png', title: 'Tailwind CSS', content: 'Utility-first CSS framework for building responsive designs quickly.' },
  ];

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="bg-[#1E1E2E] text-white py-24 px-6">
      {/* Section Heading */}
      <h1 className="text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
        My Skills
      </h1>
      <h3 className="text-xl text-gray-300 text-center mb-10">Click a card to flip and learn more</h3>

      {/* Skills Card Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative w-full sm:w-60 h-52 cursor-pointer"
            style={{ perspective: '1000px' }}
            onClick={() => handleFlip(index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedIndex === index ? 'rotate-y-180' : ''
              }`}
              style={{ transformStyle: 'preserve-3d', transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-[#2A2A3A] text-white rounded-lg shadow-lg flex flex-col items-center justify-center"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
                <img src={skill.imgSrc} alt={skill.title} className="w-20 h-20 mb-2 object-contain" />
                <h2 className="text-center text-lg font-semibold">{skill.title}</h2>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-[#353547] text-white rounded-lg shadow-lg flex items-center justify-center px-4"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                <p className="text-center text-sm">{skill.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Attribution to Flaticon */}
      <div className="text-center mt-12">
        <a href="https://www.flaticon.com/free-icons/coding" title="coding icons" className="text-gray-400 text-sm underline">
          Coding icons created by Freepik - Flaticon
        </a>
      </div>
    </div>
  );
};

export default Skills;
