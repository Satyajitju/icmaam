import React, { useEffect, useState } from "react";

function CountdownTimer() {
  const conferenceDate = new Date("2026-10-12T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = conferenceDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) /
              (1000 * 60)
          ),
          seconds: Math.floor(
            (difference % (1000 * 60)) / 1000
          ),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // COMPACT VERSION FOR HERO CARD

  if (compact) {
    return (
      <div className="hero-mini-countdown">

        <div className="mini-time">
          <strong>{timeLeft.days}</strong>
          <span>Days</span>
        </div>

        <div className="mini-time">
          <strong>{timeLeft.hours}</strong>
          <span>Hours</span>
        </div>

        <div className="mini-time">
          <strong>{timeLeft.minutes}</strong>
          <span>Minutes</span>
        </div>

      </div>
    );
  }

  // FULL VERSION
    return (
  <div className="hero-countdown">

    <div className="hero-countdown-days">
      {timeLeft.days}
    </div>

    <div className="hero-countdown-label">
      DAYS REMAINING
    </div>

    <div className="hero-countdown-small">
      {timeLeft.hours} Hours • {timeLeft.minutes} Minutes
    </div>

  </div>
);
    </section>
  );
}

export default CountdownTimer;
