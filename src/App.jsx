import React from "react";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from './Home';
import ColorPicker from './ColorPicker';
import DigitalClock from "./DigitalClock";
import StopWatch from "./StopWatch";

function App() {
  return (

      <div>
          {/* <Link to="/">Home</Link>
          <Link to="/color-picker">Color Picker</Link>
          <Link to="/digital-watch">Digital Clock</Link>
          <Link to="/stopwatch">Stopwatch</Link> */}
        

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color-picker" element={<ColorPicker />} />
          <Route path="/digital-watch" element={<DigitalClock />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="*" element={<Home />} /> {/* Catch-all route */}
        </Routes>
      </div>
      
  );
}

export default App;
