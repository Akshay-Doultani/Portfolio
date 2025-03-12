import React from 'react';

const Projects = () => {
  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center space-y-16 px-4 md:px-12 bg-[#1E1E2E] overflow-hidden pb-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Section Heading */}
      <h1 className="text-5xl font-bold text-white text-center mb-4">
        My Work
      </h1>

      {/* Projects */}
      <ProjectCard 
        title="Social Media Application"
        description="A thread-like social media platform where users can create accounts, log in, and share images with others."
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
        description="A rental platform allowing users to browse, list, and book properties with secure authentication."
        features={[
          "Property Listings: Browse detailed rental properties",
          "User Authentication: Secure login and registration",
          "Direct Booking: Contact property owners directly",
          "Review System: Leave reviews and ratings"
        ]}
        link="https://place-to-stay1.netlify.app/"
      />

      <ProjectCard 
        title="Blog Upload & Task Management Platform"
        description="A full-stack blog application where users can post blogs, like/save posts, and manage tasks using a drag-and-drop system."
        features={[
          "User authentication and profile system",
          "Create, edit, and delete blog posts",
          "Like and save posts from other users",
          "Task Management: Drag tasks between Pending and Completed"
        ]}
        link="https://github.com/Akshay-Doultani"
        isGithub
      />

      <ProjectCard 
        title="Inventory Management System"
        description="A system to track inventory, manage stock levels, and automate order processing efficiently."
        features={[
          "Product tracking and stock management",
          "Real-time inventory updates",
          "Automated order processing",
          "User authentication and role-based access"
        ]}
        link="https://github.com/Akshay-Doultani"
        isGithub
        extraMargin // Special margin for last project
      />
    </div>
  );
};

// Reusable Project Card Component
const ProjectCard = ({ title, description, features, link, isGithub = false, extraMargin = false }) => {
  return (
    <div className={`w-full max-w-4xl flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0 ${extraMargin ? 'mb-16' : ''}`}>
      {/* Left Side (Description) */}
      <div className="w-full lg:w-1/2 lg:pr-4 text-center lg:text-left">
        <h1 className="text-3xl text-white font-semibold mb-4">{title}</h1>
        <p className="text-white text-lg mb-4">{description}</p>
        <h4 className="text-white font-semibold mb-2">Key features include:</h4>
        <ul className="list-disc list-inside text-white mb-4 text-left">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Vertical Line with Moving Circle */}
      <div className="hidden lg:block h-[400px] w-1 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white animate-moveUpDown"></div>
      </div>

      {/* Right Side (Link) */}
      <div className="w-full lg:w-1/2 lg:pl-4 text-center lg:text-right">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl underline hover:text-gray-300 transition duration-300"
        >
          {isGithub ? "Check on GitHub" : "View Project"}
        </a>
      </div>
    </div>
  );
};

export default Projects;
