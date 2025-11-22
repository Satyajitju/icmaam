// src/components/HowrahDet.jsx
import React from "react";
import Map from "./Map";

function HowrahDet() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>From Howrah Railway Station</h2>
          <p className="section-sub">
            Recommended routes from Howrah Junction to Jadavpur University.
          </p>
        </div>

        <div className="travel-layout">
          {/* Text block */}
          <div className="travel-info-card">
            <h3>By Bus &amp; Taxi</h3>
            <ul className="travel-list">
              <li>
                Several buses from Howrah reach Jadavpur University (Gate No. 4 –
                Bengal Lamp) or Jadavpur 8B Bus Stand in about{" "}
                <strong>45 minutes</strong>. For convenience, you may consider
                buses such as <strong>E1</strong> (get down at Gate 4/Bengal Lamp)
                and <strong>AC1</strong> (get down at Gate 4/Bengal Lamp).
              </li>
              <li>
                Taxis are readily available from the station and can directly drop
                you at the Department of Mathematics, Jadavpur University via Gate
                No. 4 (Bengal Lamp) in approximately{" "}
                <strong>35 minutes</strong>.
              </li>
            </ul>
          </div>

          {/* Maps */}
          <div className="travel-maps">
            <div className="travel-map-card">
              <p className="travel-map-title">Howrah Railway Station</p>
              <Map
                Lat={22.59577}
                Lng={88.263641}
                Name="Howrah Railway Station, Howrah, West Bengal, India"
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

export default HowrahDet;
