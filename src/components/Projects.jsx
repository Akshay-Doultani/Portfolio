import React from 'react';

const Projects = () => {
  return (
    <div
      className="relative min-h-screen bg-[#1E1E2E] flex flex-col items-center justify-center space-y-16 py-10 px-6 overflow-hidden"
    >
      {/* Floating Bubbles Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-5 h-5 md:w-7 md:h-7 bg-white opacity-10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `bubbleFloat ${4 + Math.random() * 4}s infinite ease-in-out alternate`
            }}
          ></div>
        ))}
      </div>

      <h1 className="text-5xl font-bold text-white text-center mb-10 mt-4" style={{ fontFamily: 'Matemasie, sans-serif' }}>
        My Work
      </h1>

      {/* Project List */}
      {[  
        {
          title: 'Social Media Application',
          description: 'A thread-like social media app where users can create accounts, upload images, like posts, and follow others. Built with React.js and Appwrite for backend services.',
          features: ['User authentication and account management', 'Image posting and sharing', 'Follow/unfollow functionality', 'Liking and saving images'],
          link: 'https://social-media-platform-91xmsnapgram.vercel.app/',
        },
        {
          title: 'Airbnb-like Property Rental Platform',
          description: 'A property rental platform where users can browse, list, and book rental properties, with features similar to Airbnb.',
          features: ['Property listings with images and pricing', 'Secure login and user authentication', 'Direct booking and owner contact', 'Review and rating system'],
          link: 'https://place-to-stay1.netlify.app/',
        },
        {
          title: 'Blog Upload Platform & Task Manager',
          description: 'A blog-based app where users can create posts, upload images, and interact with other users through likes. It also includes a built-in task manager with drag-and-drop functionality.',
          features: ['User authentication and account management', 'Post creation, editing, and deletion', 'Like and save feature for posts', 'Task manager with draggable tasks between "Pending" and "Completed" columns'],
          link: 'https://github.com/Akshay-Doultani', // Link to GitHub
        },
        {
          title: 'Inventory Management System',
          description: 'A full-stack inventory management application that allows businesses to track products, manage stock levels, and generate reports. Features include product categorization, supplier tracking, and order history.',
          features: ['Product tracking and stock management', 'Supplier and order management', 'Real-time inventory updates', 'Report generation'],
          link: 'https://github.com/Akshay-Doultani', // Link to GitHub
        },
      ].map((project, index) => (
        <div key={index} className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0">
          {/* Left Side (Description) */}
          <div className="w-full lg:w-1/2 lg:pr-4 text-center lg:text-left">
            <h1 className="text-3xl text-white font-semibold mb-4">{project.title}</h1>
            <p className="text-white text-lg mb-4">{project.description}</p>
            <h4 className="text-white font-semibold mb-2">Key features include:</h4>
            <ul className="list-disc list-inside text-white mb-4 text-left">
              {project.features.map((feature, i) => (
                <li key={i} className="ml-4 text-white" style={{ textIndent: '-1em' }}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Line with Moving Circle */}
          <div className="hidden lg:block h-96 w-1 bg-white relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-moving-circle w-6 h-6 rounded-full bg-white"></div>
          </div>

          {/* Right Side (Link) */}
          <div className="w-full lg:w-1/2 lg:pl-4 text-center lg:text-right">
            <a
              href={project.link}
              className="text-white text-2xl underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title.includes('Inventory Management') ? 'Check on GitHub' : 'View Project'}
            </a>
          </div>
        </div>
      ))}

      <style>
        {`
          @keyframes bubbleFloat {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-20px);
            }
          }

          @keyframes moving-circle {
            0% {
              top: 0%;
            }
            100% {
              top: 100%;
            }
          }

          .animate-moving-circle {
            animation: moving-circle 6s infinite alternate ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;

