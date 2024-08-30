import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      className='h-auto md:h-36 flex flex-col md:flex-row justify-between items-center'
      style={{ backgroundColor: '#494B59', color: '#fff', padding: '1rem' }}
    >
      {/* Left side: Contact information */}
      <div className='text-left mb-4 md:mb-0'>
        <h1 className='text-3xl mb-5'>Get in touch</h1>
        <div className='flex items-center mb-2' onClick={() => navigator.clipboard.writeText('akshaydoultani100@gmail.com')} style={{ cursor: 'pointer' }}>
          <FaEnvelope size={20} style={{ marginRight: '10px' }} />
          <span>akshaydoultani100@gmail.com</span>
        </div>
        <div className='flex items-center' onClick={() => navigator.clipboard.writeText('+91 7014968148')} style={{ cursor: 'pointer' }}>
          <FaPhone size={20} style={{ marginRight: '10px' }} />
          <span>+91 7014968148</span>
        </div>

      </div>

      {/* Center: Thank you text (shifted to the left) */}
      <div
        className='text-center md:text-center'
        style={{ marginLeft: '-40px', marginBottom: '16px', fontSize: '18px' }} // Shifted to the left
      >
        <h2 className='text-4xl'>Thanks for scrolling</h2>
      </div>

      {/* Right side: LinkedIn logo */}
      <div
        className="flex items-center"
        onClick={() => window.open('https://www.linkedin.com/in/akshay-doultani-26354b309', '_blank')}
        style={{ cursor: 'pointer' }}  // Add cursor pointer to indicate it's clickable
      >
        <FaLinkedin size={32} style={{ marginLeft: '10px', marginRight: '20px' }} />
      </div>
    </div>
  );
};

export default Contact;
