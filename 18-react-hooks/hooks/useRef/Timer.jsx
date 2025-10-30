import React, { useRef, useState } from "react";

function TimerApp() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null); // 👈 stores the timer ID

  const startTimer = () => {
    // prevent multiple timers
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // 👈 reset the ref value
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "40px" }}>
      <h2>⏱ Timer: {seconds}s</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} style={{ marginLeft: "10px" }}>Stop</button>
      <button onClick={resetTimer} style={{ marginLeft: "10px" }}>Reset</button>
    </div>
  );
}

export default TimerApp;
