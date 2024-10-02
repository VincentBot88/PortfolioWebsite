import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Projects.css';

const projectsData = [
  {
    title: "ESP32 Stock Ticker Display",
    imgSrc: "https://VincentBot88.github.io/PortfolioWebsite/images/StockTickerImage1.jpg",
    details: [
      "Uses an ESP32 to retrieve real-time stock data through the Finnhub Stock API",
      "Displays results on an I2C LCD display",
      "Includes red and green LED price change indicators and a button to scroll through stock tickers",
      "3D Printed casing with a window for the display",
      "Soldered wiring",
      "Coded in C++"
    ],
    additionalImages: [
      "https://VincentBot88.github.io/PortfolioWebsite/images/StockTickerImage1.jpg",
      "https://VincentBot88.github.io/PortfolioWebsite/images/StockTickerImage2.jpg"
    ]
  },
  {
    title: "Full Stack Financial Tracker App",
    imgSrc: "/images/financialtracker.png",
    details: [
      "Developed a full-stack finance tracker application using the MERN stack to track and manage personal expenses and budgets",
      "Implemented user authentication and authorization with Clerk",
      "Designed a responsive and interactive frontend with React.js, utilizing RESTful APIs to fetch and display real-time financial data from a MongoDB database",
      "Integrated backend logic using Node.js and Express.js to handle CRUD operations, enabling users to add, update, and delete transactions"
    ]
  },
  {
    title: "High School Android App",
    imgSrc: `${process.env.PUBLIC_URL}/images/AppDevelopment1.jpg`,
    details: [
      "Utilized the Flutter UI software development kit to create an innovative and user-friendly app tailored to the needs of students",
      "Coded in Dart to implement robust and efficient app functionalities",
      "Utilized by 85% of the school population"
    ]
  },
  {
    title: "Transistor Amplifier Design Project",
    imgSrc: `${process.env.PUBLIC_URL}/images/Amplifier1.png`,
    details: [
      "Designed, simulated, analyzed, implemented, and tested a single-supply, multistage, inverting, transistor amplifier",
      "Conducted calculations for resistance, capacitance, and biasing, and verified results through simulations"
    ]
  },
  {
    title: "Simple General-Purpose Processor Design",
    imgSrc: `${process.env.PUBLIC_URL}/images/CPU.png`,
    details: [
      "Designed and implemented a simple general-purpose processor using VHDL, Quartus II, and an FPGA board",
      "Developed key components, including an Arithmetic and Logic Unit (ALU), a Control Unit with a Finite State Machine (FSM), and a 4x16 Decoder",
      "Utilized microcode operations to control arithmetic and logic processes, with outputs displayed on seven-segment displays"
    ]
  },
  {
    title: "Stocks and Crypto Research Automation",
    imgSrc: `${process.env.PUBLIC_URL}/images/construction.png`, // Add image if available
    details: [
      "Scrape stock and crypto news from the web using Python and BeautifulSoup",
      "Automatically summarize financial news with Deep Learning using a fine-tuned Hugging Face Pegasus Transformers model",
      "Calculate sentiment for Bitcoin, Ethereum, Tesla and Gamstop using a pre-trained Transformers deep learning pipeline"
    ]
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="projects" id="projects">
      <div className="proj-content">
        <h2>Projects</h2>
        <div className="grid-container">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`proj ${expandedProject === index ? 'expanded' : ''}`}
              onClick={() => toggleProject(index)}
            >
              <h4>{project.title}</h4>
              <img
                src={project.imgSrc}
                className="img-fluid rounded-corners"
                alt={project.title}
                style={{ width: '100%', height: 'auto' }}
              />
              {expandedProject === index && (
                <div className="project-details">
                  <ul>
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
