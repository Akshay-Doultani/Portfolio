import React, { useState } from 'react';

const Skills = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const cards = [
    { imgSrc: '/react-js-icon.png', title: 'React JS', content: 'React.js is a popular JavaScript library for building user interfaces, particularly single-page applications.' },
    { imgSrc: '/1012820_code_development_logo_nodejs_icon.png', title: 'Node JS', content: "Node.js is a JavaScript runtime that allows developers to run JavaScript on the server side. It's built on Chrome's V8 engine " },
    { imgSrc: '/icons8-express-js-80.png', title: 'Express JS', content: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications..' },
    { imgSrc: '/icons8-mongodb-144.png', title: 'MongoDB', content: 'MongoDB is a powerful and flexible solution for handling modern data needs. As a leading NoSQL database.' },
    { imgSrc: '/icons8-java-logo-144.png', title: 'Java', content: 'Java is a high-level, object-oriented programming language designed for portability, security, and performance.' },
    { imgSrc: '/icons8-javascript-144.png', title: 'Javascript', content: 'Java is a high-level, object-oriented programming language designed for portability, security, and performance.' },
    { imgSrc: 'icons8-git-logo-144.png', title: 'git', content: 'Git is a distributed version control system that allows multiple developers to track changes in code, collaborate efficiently, and manage project history. ' },
    { imgSrc: '/icons8-tailwind-css-100.png', title: 'tailwind', content: 'Tailwind CSS is a utility-first CSS framework that provides low-level, reusable styling classes to build custom designs without writing custom CSS.' },
    // Add more cards here
  ];

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: '#63637d', padding: '20px' }}>
      {/* Skills Heading */}
      <h1 className="text-5xl font-bold text-white text-center mb-2" style={{ fontFamily: 'Matemasie, sans-serif' }}>
        My Skills
      </h1>
      <h3 className='text-white text-center text-3xl' style={{ fontFamily: 'Qwitcher Grypen, sans-serif' }}>click to flip</h3>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full sm:w-60 h-48 mt-9"
            style={{ perspective: '1000px' }}
            onClick={() => handleFlip(index)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedIndex === index ? 'rotate-y-180' : ''
                }`}
              style={{ transformStyle: 'preserve-3d', transform: flippedIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full bg-[#2B2524] text-white rounded-lg shadow-lg flex flex-col items-center justify-center"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
              >
                <img src={card.imgSrc} alt={card.title} className="w-24 h-24 mb-2" />
                <h2 className="text-center">{card.title}</h2>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-[#2B2524] text-white rounded-lg shadow-lg flex items-center justify-center px-4"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="text-center">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
