import { useState, useEffect } from "react";

const Countdown = ({ seconds, onFinish }) => {
  const [currentCount, setCurrentCount] = useState(seconds);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (currentCount <= 0) return onFinish();
      setCurrentCount((prev) => prev - 1); //onFinish must return 0
    }, 1000); // 1 seconds in miliseconds
    return () => clearInterval(timerId);
  });
  return currentCount;
};

export default Countdown;
