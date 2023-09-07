import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/timer.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="Timer">
      <div>
        <span className="time">{timeLeft.days}</span>
        <span className="hint">DAYS</span>
      </div>
      <div>
        <span className="time">{timeLeft.hours}</span>
        <span className="hint">HRS</span>
      </div>
      <div>
        <span className="time">{timeLeft.minutes}</span>
        <span className="hint">MINS</span>
      </div>
      <div>
        <span className="time">{timeLeft.seconds}</span>
        <span className="hint">SECS</span>
      </div>
    </div>
  );
};

CountdownTimer.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
};

export default CountdownTimer;
