import React from 'react';
import profilepic from "./assets/profile.jpg"; 
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="cards-container">
        {/* Color Picker Card */}
        <div className="card">
          <img src={profilepic} alt="Color Picker" className="img-card" />
          <h1 className="project-heading">Color Picker React Project</h1>
          <p className="project-description">Pick a color and see it change in real-time!</p>
          <Link to="/color-picker">
            <button className="btn">Show me</button>
          </Link>
        </div>

        {/* Stopwatch Card */}
        <div className="card">
          <img src={profilepic} alt="Stopwatch" className="img-card" />
          <h1 className="project-heading">Stopwatch React Project</h1>
          <p className="project-description">Start and stop a timer with a reset option.</p>
          <Link to="/stopwatch">
            <button className="btn">Show me</button>
          </Link>
        </div>
        {/* Digital Watch Card */}
        <div className="card">
          <img src={profilepic} alt="Digital Watch" className="img-card" />
          <h1 className="project-heading">Digital Watch React Project</h1>
          <p className="project-description">View the current time in a digital format.</p>
          <Link to="/digital-watch">
            <button className="btn">Show me</button>
          </Link>
        </div>
        
      </div>
    </>
  );
};

export default Home;
