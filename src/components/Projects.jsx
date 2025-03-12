import React, { useEffect, useState } from "react";

const Projects = () => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    // Dynamically calculate the page height
    setPageHeight(document.body.scrollHeight);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1E1E2E] flex flex-col items-center justify-center space-y-16 pb-20 overflow-hidden">
      {/* Bubble Background Effect */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}vw`, // Random horizontal placement
            top: `${Math.random() * pageHeight}px`, // Spread across full page height
            animationDuration: `${8 + Math.random() * 4}s`, // Random duration
            animationDelay: `${Math.random() * 3}s`,       // Random delay
          }}
        ></div>
      ))}

      <h1 className="text-5xl font-bold text-white text-center mb-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
        My Work
      </h1>

      {/* Project Cards */}
      {[
        {
          title: "Social Media Application",
          description:
            "A social media app where users can create accounts, log in, upload images, like, save, and follow/unfollow other users.",
          features: [
            "User authentication and account management",
            "Image posting and sharing",
            "Following/unfollowing functionality",
            "Liking and saving images",
          ],
          link: "https://social-media-platform-91xmsnapgram.vercel.app/",
        },
        {
          title: "Airbnb-like Property Rental Platform",
          description:
            "An Airbnb-like property rental system where users can browse, list, and book rental properties.",
          features: [
            "Property Listings: Browse detailed rental properties with images and pricing.",
            "User Authentication: Secure login and registration for owners and renters.",
            "Direct Booking: Contact property owners directly to book rooms.",
            "Review System: Leave reviews and ratings for properties.",
          ],
          link: "https://place-to-stay1.netlify.app/",
        },
        {
          title: "Blog Upload Platform",
          description:
            "Users can upload blog posts with images, like and save posts, and manage their own posts. Features a built-in task management system.",
          features: [
            "Post creation, editing, and deletion",
            "Image uploads with likes and saves",
            "Task management with draggable tasks",
            "Separate columns for 'Completed' and 'Pending' tasks",
          ],
          link: "https://github.com/Akshay-Doultani",
        },
        {
          title: "Inventory Management System",
          description:
            "A full-stack inventory system that helps businesses track stock, sales, and purchases efficiently.",
          features: [
            "Real-time stock tracking",
            "Sales and purchase order management",
            "User role-based access control",
            "Dynamic reporting and analytics",
          ],
          link: "https://github.com/Akshay-Doultani",
          isGitHub: true,
        },
      ].map((project, index) => (
        <div key={index} className="relative w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 space-y-8 lg:space-y-0">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl text-white font-semibold mb-4">{project.title}</h1>
            <p className="text-white text-lg mb-4">{project.description}</p>
            <ul className="list-disc list-inside text-white mb-4 text-left">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Vertical Line with Moving Circle */}
          <div className="hidden lg:flex flex-col items-center relative h-96 w-1 bg-white">
            <div className="absolute w-6 h-6 bg-white rounded-full animate-moveSlow"></div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <a
              href={project.link}
              className="text-white text-2xl underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.isGitHub ? "Check on GitHub" : "View Project"}
            </a>
            {/* Warning Message */}
            <p className="mt-4 text-sm text-gray-400">
              Please wait for a minute before using, as the server is on a cold start. 😊
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
