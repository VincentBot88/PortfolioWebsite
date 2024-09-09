import React from 'react';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="links">
        <ul>
          <li><a href="https://github.com/VincentBot88" target="_blank"><i className="fa fa-github"></i> Github</a></li>
          <li><a href="www.linkedin.com/in/vincentcheng1618" target="_blank"><i className="fa fa-linkedin-square"></i> LinkedIn</a></li>
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