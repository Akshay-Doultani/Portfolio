import React from 'react';

const Projects = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center space-y-16"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* First Project */}
      <h1 className="text-5xl font-bold text-white text-center mb-2 mt-4" style={{ fontFamily: 'Matemasie, sans-serif' }}>
        My Work
      </h1>
      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0">
        {/* Left Side (Description) */}
        <div className="w-full lg:w-1/2 lg:pr-4 text-center lg:text-left">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Social Media Application
          </h1>
          <p className="text-white text-lg mb-4">
            This project is a social media thread-like application where users can create accounts, log in, and share their images with others. The application offers a seamless and interactive user experience, built with React.js on the front end and Appwrite as the backend-as-a-service (BaaS) solution.
          </p>
          <h4 className="text-white font-semibold mb-2">
            Key features include:
          </h4>
          <ul className="list-disc list-inside text-white mb-4 text-left">
            <li>User authentication and account management</li>
            <li>Image posting and sharing</li>
            <li>Following/unfollowing functionality</li>
            <li>Liking and saving images</li>
          </ul>
          <p className="text-white">
            This project demonstrates the integration of a modern front-end framework with powerful backend services to deliver a fully functional social media platform.
          </p>
        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block h-96 w-1 bg-white relative">
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white"></div>
        </div>

        {/* Right Side (Link) */}
        <div className="w-full lg:w-1/2 lg:pl-4 text-center lg:text-right">
          <a
            href="https://social-media-platform-91xmsnapgram.vercel.app/"
            className="text-white text-2xl underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Second Project */}
      <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0">
        {/* Left Side (Description) */}
        <div className="w-full lg:w-1/2 lg:pr-4 text-center lg:text-left">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Airbnb-like Property Rental Platform
          </h1>
          <p className="text-white text-lg mb-4">
            Project Overview: This project is an Airbnb-like property rental platform, allowing users to browse, list, and book rental properties.
          </p>
          <h4 className="text-white font-semibold mb-2">
            Key features include:
          </h4>
          <ul className="list-disc list-inside text-white mb-4 text-left">
            <li className="ml-4 text-white" style={{ textIndent: '-1em' }}>
              Property Listings: Browse detailed rental properties with images and pricing.
            </li>
            <li className="ml-4 text-white" style={{ textIndent: '-1em' }}>
              User Authentication: Secure login and registration for owners and renters.
            </li>
            <li className="ml-4 text-white" style={{ textIndent: '-1em' }}>
              Direct Booking: Contact property owners directly to book rooms.
            </li>
            <li className="ml-4 text-white" style={{ textIndent: '-1em' }}>
              Review System: Leave reviews and ratings for properties.
            </li>
          </ul>

          <h4 className="text-white font-semibold mb-2">
            Technology Stack:
          </h4>
          <ul className="list-disc list-inside text-white mb-4 text-left">
            <li className="ml-4 text-white" style={{ textIndent: '-1em' }}>
              Frontend: Developed with React.js, providing a responsive and dynamic user interface.
            </li>
            <li className="ml-4 text-white" style={{ textIndent: '-1em' }}>
              Backend: Built using Node.js and Express.js to handle server-side logic and API requests.
            </li>
            <li className="ml-4 text-white" style={{ textIndent: '-1em' }}>
              Database: MongoDB is used for efficient data management of users and property listings.
            </li>

          </ul>

        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block h-[490px] w-1 bg-white relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white"></div>
        </div>


        {/* Right Side (Link) */}
        <div className="w-full lg:w-1/2 lg:pl-4 text-center lg:text-right">
          <a
            href="https://place-to-stay1.netlify.app/"
            className="text-white text-2xl underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
