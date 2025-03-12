import React from 'react';

const Projects = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center space-y-16"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Section Heading */}
      <h1 className="text-5xl font-bold text-white text-center mb-2 mt-4" style={{ fontFamily: 'Matemasie, sans-serif' }}>
        My Work
      </h1>

      {/* Social Media Application */}
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

      {/* Airbnb-like Property Rental Platform */}
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

      {/* Inventory Management System */}
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

      {/* Blog Upload Platform */}
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
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0">
      <div className="w-full lg:w-1/2 lg:pr-4 text-center lg:text-left">
        <h1 className="text-3xl text-white font-semibold mb-4">{title}</h1>
        <p className="text-white text-lg mb-4">{description}</p>
        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc list-inside text-white mb-4 text-left">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block h-96 w-1 bg-white relative">
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white"></div>
      </div>

      <div className="w-full lg:w-1/2 lg:pl-4 text-center lg:text-right">
        <a
          href={link}
          className="text-white text-2xl underline"
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
