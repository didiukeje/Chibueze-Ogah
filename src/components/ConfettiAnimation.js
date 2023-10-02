import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './ConfettiAnimation.css';

function ConfettiAnimation() {
  const [isConfettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    const duration = 300000; // 5 minutes (in milliseconds)

    const interval = setInterval(() => {
      setConfettiActive(true);

      // Stop the confetti animation after a short delay (e.g., 3 seconds)
      setTimeout(() => {
        setConfettiActive(false);
      }, 3000); // Adjust the delay as needed
    }, duration + 3000); // Start a new animation cycle after the previous one finishes

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <div className="confetti-container">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={300} // Adjust the number of confetti pieces
        recycle={false}
        gravity={0.2} // Adjust the gravity effect
        wind={0.1} // Adjust the wind effect
        colors={['#a864fd', '#F7B4BE', '#29cdff', '#fdff6a', '#78ff44']}
        run={isConfettiActive}
      />
      <div className="message-animation" colors={[ '#a864fd', '#F7B4BE', '#29cdff', '#fdff6a', '#78ff44' ]}>
        <div className="message">Happy Birthday</div>
        <div className="message">my City Boy</div>
      </div>
    </div>
  );
}

export default ConfettiAnimation;

