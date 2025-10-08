import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 100);
    return () => clearInterval(timer); // cleanup when component unmounts
  }, []); // empty array means run only once

  return <h2 className="text-amber-300">Time passed: {seconds}s</h2>;
}

export default Timer 