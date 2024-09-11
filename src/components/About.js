import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="links">
        <ul>
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
            <a href="mailto: name@email.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/10MQg21yuvH1zvps0jC7fUQscR45kmZjd38pIpIC47qU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFile} /> Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="aboutText">
        <h4>About Me</h4>
        <p>Pursuing my passion for technology and innovation, I am currently studying Computer Engineering at Toronto
        Metropolitan University, where I achieved the Dean's List recognition. I am interested in all thing electronics, such as robotics and circuit design. I also have experience developing with Java, C++, Python and HTML/CSS/JS. 
        In addition to my academic pursuits, I can be found at the gym or tinkering with electronics.
        </p>
      </div>
    </div>
  );
}

export default About;