// src/UseEffect.js
import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      seconds: {seconds}
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}
