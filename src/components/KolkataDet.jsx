// src/components/KolkataDet.jsx
import React from "react";
import Map from "./Map";

function KolkataDet() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>From Kolkata Railway Station</h2>
          <p className="section-sub">
            Direct taxi route from Kolkata Station to Jadavpur University.
          </p>
        </div>

        <div className="travel-layout">
          {/* Info */}
          <div className="travel-info-card">
            <h3>By Taxi</h3>
            <p className="travel-text">
              From Kolkata Railway Station, taxis can directly reach the
              Department of Mathematics, Jadavpur University via Gate No. 4
              (Bengal Lamp). The approximate travel time is{" "}
              <strong>around 80 minutes</strong>, depending on traffic
              conditions.
            </p>
          </div>

          {/* Maps */}
          <div className="travel-maps">
            <div className="travel-map-card">
              <p className="travel-map-title">Kolkata Railway Station</p>
              <Map
                Lat={22.60129783798892}
                Lng={88.37946130174645}
                Name="Kolkata Railway Station, Kolkata"
              />
            </div>

            <div className="travel-map-card">
              <p className="travel-map-title">Jadavpur University</p>
              <Map
                Lat={22.50082029467077}
                Lng={88.37143577635288}
                Name="Jadavpur, Kolkata, West Bengal 700032, India"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KolkataDet;
