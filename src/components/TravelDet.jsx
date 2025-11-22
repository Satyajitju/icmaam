// src/components/TravelDet.jsx
import React from "react";
import { Link } from "react-router-dom";

function TravelDet() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>Travel to Jadavpur University</h2>
          <p className="section-sub">
            Directions from major transportation hubs in Kolkata.
          </p>
        </div>

        {/* Travel grid */}
        <div className="travel-grid">
          <Link to="/dumdum" className="travel-card">
            <div className="travel-icon">✈️</div>
            <h3 className="travel-title">Airport (Dumdum)</h3>
            <p className="travel-desc">
              Buses, taxi & app cab routes from the airport.
            </p>
            <span className="travel-link">View Details →</span>
          </Link>

          <Link to="/howrah" className="travel-card">
            <div className="travel-icon">🚆</div>
            <h3 className="travel-title">Howrah Station</h3>
            <p className="travel-desc">
              Route to campus via Shibpur, Hazra & Jadavpur.
            </p>
            <span className="travel-link">View Details →</span>
          </Link>

          <Link to="/sealdah" className="travel-card">
            <div className="travel-icon">🚆</div>
            <h3 className="travel-title">Sealdah Station</h3>
            <p className="travel-desc">
              Direct bus, taxi & suburban train connections.
            </p>
            <span className="travel-link">View Details →</span>
          </Link>

          <Link to="/kolkata" className="travel-card">
            <div className="travel-icon">🚆</div>
            <h3 className="travel-title">Kolkata Station</h3>
            <p className="travel-desc">
              Taxi routes to Jadavpur (Gate No. 4).
            </p>
            <span className="travel-link">View Details →</span>
          </Link>
        </div>

        {/* Extra travel notes */}
        <div className="travel-info-card mt-4">
          <h3>Campus Entry Gates</h3>
          <p className="travel-desc">
            Jadavpur University has four main gates:
          </p>

          <ul className="travel-list">
            <li>
              <strong>Gate 1:</strong> 3 mins from Jadavpur Railway Station
            </li>
            <li>
              <strong>Gate 2:</strong> Opp. Jadavpur 8B Bus Stand
            </li>
            <li>
              <strong>Gate 3:</strong> Near JU Post Office
            </li>
            <li>
              <strong>Gate 4:</strong> Bengal Lamp Bus Stop — only vehicle entry
            </li>
          </ul>

          <p className="travel-desc mt-2">
            Walking time to venue (Dept. of Mathematics):  
            Gate 1 → 7 mins, Gate 2 → 7 mins, Gate 3 → 5 mins, Gate 4 → 3 mins.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TravelDet;
