import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="background-image"></div>
      <div className="headertext">
        <h3 className="typing">Hi there, I'm</h3>
        <h5>Vincent Cheng</h5>
      </div>
      <div className="content">
        <About />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}

export default App;
