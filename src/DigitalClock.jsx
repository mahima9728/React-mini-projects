import React, { useEffect, useState } from 'react';
import '/home/mahima/Desktop/Full Stack/React1/My-app/src/DigitalClock .css'


const DigitalClock = () => {

  const [time, setTime] = useState(new Date());

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
  

  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{formateTime() }</span>

      </div>
      
    </div>
  )
}

export default DigitalClock
