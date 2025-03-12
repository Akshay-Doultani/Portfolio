import React from "react";

const Projects = () => {
  return (
    <div
      className="relative min-h-screen bg-[#1E1E2E] flex flex-col items-center justify-center space-y-16 pb-20"
    >
      {/* Bubble Background Effect */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-white opacity-20 rounded-full animate-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        ></div>
      ))}

      <h1 className="text-5xl font-bold text-white text-center mb-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
        My Work
      </h1>

      {/* Project 1: Social Media Application */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Social Media Application
          </h1>
          <p className="text-white text-lg mb-4">
            A social media app where users can create accounts, log in, upload images, like, save, and follow/unfollow other users.
          </p>
          <ul className="list-disc list-inside text-white mb-4 text-left">
            <li>User authentication and account management</li>
            <li>Image posting and sharing</li>
            <li>Following/unfollowing functionality</li>
            <li>Liking and saving images</li>
          </ul>
        </div>

        {/* Vertical Line with Moving Circle */}
        <div className="hidden lg:block h-96 w-1 bg-white relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white animate-moveUpDown"></div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <a
            href="https://github.com/Akshay-Doultani"
            className="text-white text-2xl underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check on GitHub
          </a>
        </div>
      </div>

      {/* Project 2: Blog Upload Platform */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Blog Upload Platform
          </h1>
          <p className="text-white text-lg mb-4">
            Users can upload blog posts with images, like and save posts, and manage their own posts. Features a built-in task management system.
          </p>
          <ul className="list-disc list-inside text-white mb-4 text-left">
            <li>Post creation, editing, and deletion</li>
            <li>Image uploads with likes and saves</li>
            <li>Task management with draggable tasks</li>
            <li>Separate columns for "Completed" and "Pending" tasks</li>
          </ul>
        </div>

        <div className="hidden lg:block h-96 w-1 bg-white relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white animate-moveUpDown"></div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <a
            href="https://github.com/Akshay-Doultani"
            className="text-white text-2xl underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check on GitHub
          </a>
        </div>
      </div>

      {/* Project 3: Inventory Management System */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Inventory Management System
          </h1>
          <p className="text-white text-lg mb-4">
            A full-stack inventory system that helps businesses track stock, sales, and purchases efficiently.
          </p>
          <ul className="list-disc list-inside text-white mb-4 text-left">
            <li>Real-time stock tracking</li>
            <li>Sales and purchase order management</li>
            <li>User role-based access control</li>
            <li>Dynamic reporting and analytics</li>
          </ul>
        </div>

        <div className="hidden lg:block h-96 w-1 bg-white relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white animate-moveUpDown"></div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <a
            href="https://github.com/Akshay-Doultani"
            className="text-white text-2xl underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
