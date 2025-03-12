import React from 'react';
import { useEffect, useState } from 'react';

const Projects = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center space-y-16 bg-[#1E1E2E] text-white py-20 px-6">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="bg-blue-200 opacity-30 w-52 h-52 md:w-72 md:h-72 rounded-full absolute top-10 left-10 md:left-20 animate-pulse"></div>
        <div className="bg-purple-200 opacity-20 w-72 h-72 md:w-96 md:h-96 rounded-full absolute bottom-10 right-16 md:right-32 animate-pulse"></div>
        <div className="absolute inset-0 bg-white opacity-10"></div>
      </div>

      {/* Section Title */}
      <h1 className="text-5xl font-bold text-center mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
        My Work
      </h1>

      {/* Project List */}
      <ProjectCard
        title="Social Media Application"
        description="A social media platform where users can create accounts, share images, and interact with others. Built with React.js and Appwrite."
        features={[
          "User authentication and account management",
          "Image posting and sharing",
          "Following/unfollowing functionality",
          "Liking and saving images"
        ]}
        link="https://social-media-platform-91xmsnapgram.vercel.app/"
      />

      <ProjectCard
        title="Airbnb-like Property Rental Platform"
        description="A property rental platform allowing users to browse, list, and book rental properties."
        features={[
          "Property Listings: Browse detailed rental properties",
          "User Authentication: Secure login and registration",
          "Direct Booking: Contact property owners",
          "Review System: Leave reviews and ratings"
        ]}
        link="https://place-to-stay1.netlify.app/"
      />

      <ProjectCard
        title="Inventory Management System"
        description="A web application for managing inventory, tracking stock, and generating reports efficiently."
        features={[
          "Real-time inventory tracking",
          "Stock level alerts",
          "Product categorization",
          "Sales and purchase records"
        ]}
        link="https://github.com/Akshay-Doultani/Inventory-Management"
      />

      <ProjectCard
        title="Blog Upload Platform"
        description="A blog platform where users can write, edit, and publish their own blogs with categories and tags."
        features={[
          "User authentication and dashboard",
          "Markdown-based blog editor",
          "Category and tag filtering",
          "Comment and like functionality"
        ]}
        link="https://github.com/Akshay-Doultani/Blog-Upload"
      />

      {/* GitHub Link */}
      <div className="mt-10">
        <a
          href="https://github.com/Akshay-Doultani"
          className="bg-[#a7fce7] text-black px-6 py-3 rounded shadow-lg hover:bg-[#8fe8d1] transition duration-300 text-xl font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My GitHub
        </a>
      </div>
    </div>
  );
};

// Reusable Project Card Component
const ProjectCard = ({ title, description, features, link }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 90 ? 0 : prev + 3)); // Circle moves over time
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0">
      {/* Left Side (Text) */}
      <div className="w-full lg:w-1/2 lg:pr-4 text-center lg:text-left">
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-lg mb-4">{description}</p>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside mb-4 text-left">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Vertical Line with Animated Circle */}
      <div className="hidden lg:block h-[400px] w-1 bg-white relative">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#a7fce7] shadow-lg transition-all duration-500 ease-in-out"
          style={{ top: `${position}%` }}
        ></div>
      </div>

      {/* Right Side (Link) */}
      <div className="w-full lg:w-1/2 lg:pl-4 text-center lg:text-right">
        <a
          href={link}
          className="text-2xl underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Projects;
