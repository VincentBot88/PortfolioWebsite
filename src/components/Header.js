import React, { useState, useEffect } from 'react';

const Header = () => {
  // State to track whether the header is visible
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let previousScroll = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // If scrolling down, hide the header. If scrolling up, show the header.
      if (currentScroll > previousScroll) {
        setIsVisible(false); // Hide header
      } else {
        setIsVisible(true);  // Show header
      }

      previousScroll = currentScroll;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`header ${isVisible ? 'visible' : 'hidden'}`}
      id="mainHeader"
      style={{
        transition: 'transform 0.3s ease-in-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)', // slide up/down effect
        position: 'fixed', // Keep header fixed at the top
        top: 0,
        width: '100%',
        zIndex: 1000, // Ensure it's above other elements
      }}
    >
      <nav>
        <div className="nav-links">
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
