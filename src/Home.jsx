import React from 'react';
import profilepic from "./assets/profile.jpg"; 
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="cards-container">
        <div className="card">
          <img src={profilepic} alt="image" className="img-card" />
          <h1 className="project-heading">Color Picker React Project</h1>
          <p className="project-description">Pick a color and see it change in real-time!</p>
          <Link to="/color-picker">
            <button className="btn">Show me</button>
          </Link>
        </div>
        {/* <div className="card">
          <img src={profilepic} alt="image" className="img-card" />
          <h1 className="project-heading">Stopwatch React Project</h1>
          <p className="project-description">Start and stop a timer with a reset option.</p>
          { <Link to="/stopwatch">
            { <button className="btn">Show me</button> }
          </Link> }
        </div>
        <div className="card">
          <img src={profilepic} alt="image" className="img-card" />
          <h1 className="project-heading">Digital Watch React project</h1>
          <p className="project-description">Description about the project</p>
          <Link to="/digital-watch">
            <button className="btn">Show me</button>
          </Link> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
