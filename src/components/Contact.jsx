import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      className='h-auto md:h-36 flex flex-col md:flex-row justify-between items-center relative overflow-hidden'
      style={{ backgroundColor: '#494B59', color: '#fff', padding: '1rem' }}
    >
      {/* Bubble Background Effect */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: `${Math.random() * 15 + 10}px`,
            height: `${Math.random() * 15 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}vh`,
            animationDuration: `${6 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}

      {/* Left side: Contact information */}
      <div className='text-left mb-4 md:mb-0'>
        <h1 className='text-3xl mb-5'>Get in touch</h1>
        
        {/* Email (Opens Gmail with pre-filled email) */}
        <div className='flex items-center mb-2' style={{ cursor: 'pointer' }}>
          <FaEnvelope size={20} style={{ marginRight: '10px' }} />
          <a
            href="mailto:akshaydoultani100@gmail.com"
            className="hover:underline"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            akshaydoultani100@gmail.com
          </a>
        </div>

        {/* Phone (Copy to Clipboard) */}
        <div
          className='flex items-center' 
          onClick={() => navigator.clipboard.writeText('+91 7014968148')}
          style={{ cursor: 'pointer' }}
        >
          <FaPhone size={20} style={{ marginRight: '10px' }} />
          <span>+91 7014968148</span>
        </div>
      </div>

      {/* Center: Thank you text */}
      <div className='text-center md:text-center' style={{ marginBottom: '16px', fontSize: '18px' }}>
        <h2 className='text-4xl'>Thanks for scrolling</h2>
      </div>

      {/* Right side: LinkedIn logo */}
      <div
        className="flex items-center"
        onClick={() => window.open('https://www.linkedin.com/in/akshay-doultani-26354b309', '_blank')}
        style={{ cursor: 'pointer' }}
      >
        <FaLinkedin size={32} style={{ marginLeft: '10px', marginRight: '20px' }} />
      </div>
    </div>
  );
};

export default Contact;
