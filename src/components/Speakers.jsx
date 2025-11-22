// src/components/Speakers.jsx
import React from "react";

function Speakers() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>Plenary &amp; Invited Speakers</h2>
          <p className="section-sub">
            The list of confirmed plenary and invited speakers for ICMAAM 2026
            will be announced soon.
          </p>
        </div>

        {/* Coming soon card */}
        <div className="speakers-soon">
          <div className="speakers-card">
            <h3>Speakers to be announced</h3>
            <p className="speakers-text">
              The organising committee is in the process of finalising the list of
              plenary and invited speakers. Details will be updated here once the
              confirmations are received.
            </p>

            <ul className="speakers-list">
              <li>International and national experts in mathematical analysis</li>
              <li>Researchers working on applications in modelling and simulation</li>
              <li>Leading academics collaborating with interdisciplinary fields</li>
            </ul>

            <p className="speakers-note">
              Please check this page again for updates. Final details will also be
              communicated through official email and conference notices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Speakers;
