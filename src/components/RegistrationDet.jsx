// src/components/RegistrationDet.jsx
import React from "react";

function RegistrationDet() {
  return (
    <section className="section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <h2>Registration</h2>
          <p className="section-sub">
            Registration details and fee structure for ICMAAM 2026.
          </p>
        </div>

        {/* ---------------- FEES ---------------- */}
        <div className="reg-grid">

          <div className="reg-card">
            <h3>International Participants</h3>
            <ul>
              <li>Faculty Members <span>$200</span></li>
              <li>Faculty (Developing Countries) <span>$150</span></li>
              <li>Students / Scholars <span>$100</span></li>
              <li>Students (Developing Countries) <span>$75</span></li>
            </ul>
          </div>

          <div className="reg-card highlight-card">
            <h3>Indian Participants</h3>
            <ul>
              <li>Faculty (with accommodation) <span>₹8000</span></li>
              <li>Faculty (without accommodation) <span>₹4000</span></li>
              <li>Students (with accommodation) <span>₹6000</span></li>
              <li>Students (without accommodation) <span>₹3000</span></li>
            </ul>
          </div>

          <div className="reg-card">
            <h3>Jadavpur University</h3>
            <ul>
              <li>Students / Scholars <span>₹2000</span></li>
              <li>Faculty Members <span>₹3000</span></li>
            </ul>
          </div>

        </div>

        {/* ---------------- PAYMENT ---------------- */}
        <div className="reg-bank creative-bank">
          <h3>Payment Details</h3>
          <p>
            Payment instructions and bank details will be announced shortly.
          </p>
          <p>
            Please complete registration first. Payment submission will follow.
          </p>
        </div>

        {/* ---------------- NOTES ---------------- */}
        <div className="reg-notes">
          <ul>
            <li>Registration fees are not required for plenary and invited speakers.</li>
            <li>Accommodation details will be communicated separately.</li>
            <li>Please retain payment proof for verification.</li>
          </ul>
        </div>

        {/* ---------------- FORM CTA ---------------- */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <p className="section-sub">
            Complete your registration using the official form below.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5a7p6wTBzcPMdRKa077_8w5yri26YEmBD2IYgFAGn9kcrVw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open Registration Form
          </a>
        </div>

        {/* ---------------- EMBEDDED FORM ---------------- */}
        <div className="form-embed">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf5a7p6wTBzcPMdRKa077_8w5yri26YEmBD2IYgFAGn9kcrVw/viewform?embedded=true"
            width="100%"
            height="950"
            style={{ border: "none" }}
            title="ICMAAM Registration Form"
          >
            Loading…
          </iframe>
        </div>

      </div>
    </section>
  );
}

export default RegistrationDet;
