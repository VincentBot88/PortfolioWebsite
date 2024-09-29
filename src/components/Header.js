import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let previousScroll = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsVisible(currentScroll <= previousScroll);
      previousScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${!isMobile && !isVisible ? 'hidden' : ''}`} id="mainHeader">
      {isMobile && (
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>
      )}
      <nav className={isMobile ? (isMobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed') : ''}>
        <ul className="nav-links">
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a></li>
          <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>EXPERIENCE</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;