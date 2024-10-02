import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; // Import the CSS for styling

const Contact = () => {
  return (
    <footer className="contact-footer" id="contact">
      <ul className="contact-list">
        <li>
          <a href="https://github.com/VincentBot88" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vincentcheng1618" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:vincentchengcoop@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </li>
        <li>
          <a href="assets/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFile} /> Resume
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
