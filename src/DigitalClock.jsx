import React, { useEffect, useState } from 'react';
import './DigitalClock.css'


const DigitalClock = () => {

  const [time, setTime] = useState(new Date());
   const [bgColor, setBgColor] = useState('rgb(255, 255, 255)'); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
      
     }, 1000);
  
    return () => {
      clearInterval(intervalId );
    }
  }, [])

  function formateTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}:${addZero(meridiem)}`;
  }

  function addZero(number) {
    return (number < 10 ? '0' : '') + number; 
    
  }
  useEffect(() => {
    const currentHour = time.getHours();
    if (currentHour >= 6 && currentHour < 12) {
      setBgColor('rgb(255, 223, 186)'); // Morning light color
    } else if (currentHour >= 12 && currentHour < 18) {
      setBgColor('rgb(122, 193, 238)'); // Afternoon color
    } else {
      setBgColor('rgb(34, 34, 34)'); // Night color
    }
  }, [time]);
  

  return (
    <div className='clock-container' style={{ backgroundColor: bgColor }}>
      <div className='clock'>
        <span>{formateTime() }</span>

      </div>
      
    </div>
  )
}

export default DigitalClock
