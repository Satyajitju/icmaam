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
            Quick directions from major stations and the airport, plus campus gate information.
          </p>
        </div>

        {/* Nice pill-style links */}
        <div className="travel-pills">
          <Link to="/dumdum" className="travel-pill">
            From Dumdum Airport
          </Link>
          <Link to="/howrah" className="travel-pill">
            From Howrah Railway Station
          </Link>
          <Link to="/sealdah" className="travel-pill">
            From Sealdah Railway Station
          </Link>
          <Link to="/kolkata" className="travel-pill">
            From Kolkata Railway Station
          </Link>
        </div>

        {/* Travel info text */}
        <div className="travel-info-card">
          <h3>Travel Information</h3>
          <p className="travel-desc">
            One can enter the Jadavpur University campus through four gates: Gate No. 1
            (3 minutes walking distance from Jadavpur Rail Station), Gate No. 2 (opposite
            to Jadavpur 8B Bus Stand, 2 minutes walking distance from Gate No. 1), Gate
            No. 3 (near to Jadavpur University Post Office, 2 minutes walking distance
            from Gate No. 2), Gate No. 4 (at Bengal Lamp Bus Stop, 2 minutes walking
            distance from Gate No. 3 and 4 minutes walking distance from Jadavpur Police
            Station).
          </p>
          <p className="travel-desc">
            Cars and taxis will pass only through Gate No. 4 which remains open 24 hours.
            Other gates remain open only during working hours (9 a.m. to 9 p.m. except
            Saturday, Sunday and holidays). One can reach the venue (Department of
            Mathematics) from Gate No. 1, Gate No. 2, Gate No. 3 and Gate No. 4 by walking
            about 7 minutes, 7 minutes, 5 minutes and 3 minutes respectively.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TravelDet;
