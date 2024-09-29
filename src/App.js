import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="background-image"></div>
      <div className="headertext">
      <TypeAnimation
        sequence={[
            "Hi there, I'm",
            1000,
            "Hello there, I'm",
            1000,
            "Nice to meet you, I'm",
            1000,
            "I'm",
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '3em', display: 'inline-block', color: '#fff'}}
          repeat={Infinity}
       />
        <h5>Vincent Cheng</h5>
      </div>
      <div className="content">
        <About />
        <Projects />
        <Experience />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
