import React, { useEffect, useState } from "react";

function CountdownTimer({compact=false}) {
  const conferenceDate = new Date("2026-10-12T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

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

  return (
    <section className="countdown-section">
      <div className="container">

        <div className="countdown-header">
          <h2>ICMAAM 2026 Begins In</h2>
          <p>
            12–14 October 2026 • Jadavpur University, Kolkata
          </p>
        </div>

        <div className="countdown-grid">

          <div className="countdown-card">
            <span>{timeLeft.days || 0}</span>
            <small>Days</small>
          </div>

          <div className="countdown-card">
            <span>{timeLeft.hours || 0}</span>
            <small>Hours</small>
          </div>

          <div className="countdown-card">
            <span>{timeLeft.minutes || 0}</span>
            <small>Minutes</small>
          </div>

          <div className="countdown-card">
            <span>{timeLeft.seconds || 0}</span>
            <small>Seconds</small>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CountdownTimer;
