import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="proj-content">
        <h2>Projects</h2>

        {/* ESP32 Stock Ticker Display */}
        <div className="proj">
          <h4>ESP32 Stock Ticker Display</h4>
          <img
                  className="d-block w-100 rounded-carousel"
                  src={`https://VincentBot88.github.io/PortfolioWebsite/images/StockTickerImage1.jpg`}
                  alt="First slide"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                
          {/* Carousel */}
          <div style={{ marginBottom: '20px' }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-carousel"
                  src={`https://VincentBot88.github.io/PortfolioWebsite/images/StockTickerImage1.jpg`}
                  alt="First slide"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <p>ESP32 stock ticker display in action, in a 3D printed case.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded-carousel"
                  src={`https://VincentBot88.github.io/PortfolioWebsite/images/StockTickerImage2.jpg`}
                  alt="Second slide"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <p>Breadboard Prototype (non I2C LCD display)</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          <ul>
            <li>Uses an ESP32 to retrieve real-time stock data using the Finnhub Stock API</li>
            <li>Displays results on an I2C LCD display</li>
            <li>Includes red and green LED price change indicators and a button to scroll through stock tickers</li>
            <li>3D Printed casing with a window for the display</li>
            <li>Soldered wiring</li>
            <li>Coded in C++</li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}></div>

        {/* High School Android App */}
        <div className="proj">
          <h4>High School Android App</h4>
          <img
            src={`${process.env.PUBLIC_URL}/images/AppDevelopment1.jpg`}
            className="img-fluid rounded-corners d-block mx-auto"
            alt="Responsive image"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <ul>
            <li>Utilized the Flutter UI software development kit to create an innovative and user-friendly app tailored to the needs of students.</li>
            <li>Coded in Dart to implement robust and efficient app functionalities</li>
            <li>Utilized by 85% of the school population</li>
            <li><a href="https://app.staugustinechs.ca/" style={{ fontSize: 'inherit' }}>Website</a></li>
          </ul>
        </div>

        <div style={{ marginBottom: '20px' }}></div>

        {/* Transistor Amplifier Design Project */}
        <div className="proj">
          <h4>Transistor Amplifier Design Project</h4>
          <img
            src={`${process.env.PUBLIC_URL}/images/Amplifier1.png`}
            className="img-fluid rounded-corners d-block mx-auto"
            alt="Responsive image"
          />
          <ul>
            <li>Designed, simulated, analyzed, implemented, and tested a single-supply, multistage, inverting, transistor amplifier which fulfills a set of specifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
