// src/components/DumdumDet.jsx
import React from "react";
import Map from "./Map";

function DumdumDet() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>From Netaji Subhas Chandra Bose International Airport (Dumdum)</h2>
          <p className="section-sub">
            Bus and taxi routes from Kolkata Airport to Jadavpur University.
          </p>
        </div>

        <div className="travel-layout">
          {/* Info card */}
          <div className="travel-info-card">
            <h3>By Bus &amp; Taxi</h3>

            <ul className="travel-list">
              <li>
                Several buses from the airport reach Jadavpur University (Gate No.
                4 – Bengal Lamp) or Jadavpur 8B Bus Stand in approximately{" "}
                <strong>100 minutes</strong>.
              </li>

              <li>
                Common routes include:
                <ul className="travel-list">
                  <li>
                    <strong>Airport → Jadavpur minibus</strong> (get down at Gate
                    4/Bengal Lamp)
                  </li>
                  <li>
                    <strong>Tollygunge – Airport bus</strong> (get down at
                    Jadavpur Police Station)
                  </li>
                </ul>
              </li>

              <li>
                Taxis and app cabs (Uber/Ola) are readily available from the
                terminal and take approximately{" "}
                <strong>40 minutes</strong> depending on traffic.
              </li>
            </ul>
          </div>

          {/* Maps */}
          <div className="travel-maps">
            <div className="travel-map-card">
              <p className="travel-map-title">Kolkata Airport</p>

              <Map
                Lat={22.65312864370238}
                Lng={88.44487391552143}
                Name="Netaji Subhash Chandra Bose International Airport (CCU)"
              />
            </div>

            <div className="travel-map-card">
              <p className="travel-map-title">Jadavpur University</p>

              <Map
                Lat={22.50082029467077}
                Lng={88.37143577635288}
                Name="Jadavpur University, Kolkata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DumdumDet;
