import React from 'react';

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="exp-content">
        <h2>Professional Experience</h2>
        <div className="exp">
          <h4>Front End Web Developer</h4>
          <h4>Anvil Business Center · Internship</h4>
          <h6>March 2024 - July 2024</h6>
          <ul>
            <li>Designed an interactive website for the company providing both communal and customized enterprise SaaS solutions to end users</li>
            <li>Utilized Figma for design and prototyping</li>
            <li>HTML, JavaScript, CSS, React.js</li>
          </ul>
        </div>
      </div>
      <div className="exp-content">
        <h2>Other Experience</h2>
        <div className="exp">
          <h4>Lifeguard and Swim Instructor</h4>
          <h4>City of Markham</h4>
          <h6>July 2024 - August 2024</h6>
          <ul>
            <li>Collaborated with a team of 15+ lifeguards</li>
            <li>Supervised the safety of 200+ guests daily in a designated aquatic area</li>
            <li>Trained and mentored 10+ new lifeguards in safety procedures and emergency response</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;