// src/components/SealdahDet.jsx
import React from "react";
import Map from "./Map";

function SealdahDet() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>From Sealdah Railway Station</h2>
          <p className="section-sub">
            Bus, train and taxi options from Sealdah to Jadavpur University.
          </p>
        </div>

        <div className="travel-layout">
          {/* Info */}
          <div className="travel-info-card">
            <h3>By Bus, Train &amp; Taxi</h3>
            <ul className="travel-list">
              <li>
                Numerous buses from Sealdah connect to Jadavpur University Gate
                No. 4 (Bengal Lamp) in about <strong>45 minutes</strong>. Frequent
                services include <strong>Bus No. 45</strong> and{" "}
                <strong>K8</strong> (get down at Gate 4/Bengal Lamp or Jadavpur
                8B Bus Stand).
              </li>
              <li>
                Taxis from Sealdah can reach the Department of Mathematics,
                Jadavpur University via Gate No. 4 (Bengal Lamp) in approximately{" "}
                <strong>30 minutes</strong>.
              </li>
              <li>
                Suburban trains from Sealdah (South section) also connect to
                <strong> Jadavpur Railway Station</strong> in about{" "}
                <strong>20 minutes</strong>. Jadavpur University Gate No. 1 is
                roughly a <strong>3-minute walk</strong> from Jadavpur Railway
                Station.
              </li>
            </ul>
          </div>

          {/* Maps */}
          <div className="travel-maps">
            <div className="travel-map-card">
              <p className="travel-map-title">Sealdah Railway Station</p>
              <Map
                Lat={22.567764}
                Lng={88.370946}
                Name="Sealdah Railway Station, Kolkata"
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

export default SealdahDet;
