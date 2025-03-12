import React from "react";

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-[#1E1E2E] flex flex-col items-center justify-center space-y-16 pb-20 overflow-hidden">
      
      {/* Bubble Background Effect */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="animate-bubble bg-white opacity-20 rounded-full"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 3}s`,
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
          link: "https://github.com/Akshay-Doultani",
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
            <div className="absolute w-6 h-6 bg-white rounded-full animate-moveUpDown"></div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <a
              href={project.link}
              className="text-white text-2xl underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
