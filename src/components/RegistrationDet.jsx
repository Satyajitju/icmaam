// src/components/RegistrationDet.jsx
import React from "react";

function RegistrationDet() {
  return (
    <section className="section">
      <div className="container">

        {/* -------- HEADER -------- */}
        <div className="section-header">
          <h2>Registration</h2>
          <p className="section-sub">
            Registration details for ICMAAM 2026. Please review the fee structure
            and complete your registration through the official form.
          </p>
        </div>

        {/* -------- FEES -------- */}
        <div className="reg-grid">

          {/* International */}
          <div className="reg-card">
            <h3>International Participants</h3>
            <ul>
              <li>Faculty Members <span>$200</span></li>
              <li>Faculty (Developing Countries) <span>$150</span></li>
              <li>Students / Scholars <span>$100</span></li>
              <li>Students (Developing Countries) <span>$75</span></li>
            </ul>
          </div>

          {/* Indian */}
          <div className="reg-card highlight-card">
            <h3>Indian Participants</h3>
            <ul>
              <li>Faculty (with accommodation) <span>₹8000</span></li>
              <li>Faculty (without accommodation) <span>₹4000</span></li>
              <li>Students (with accommodation) <span>₹6000</span></li>
              <li>Students (without accommodation) <span>₹3000</span></li>
            </ul>
          </div>

          {/* JU */}
          <div className="reg-card">
            <h3>Jadavpur University</h3>
            <ul>
              <li>Students / Scholars <span>₹2000</span></li>
              <li>Faculty Members <span>₹3000</span></li>
            </ul>
          </div>

        </div>

        {/* -------- PAYMENT -------- */}
        <div className="reg-bank creative-bank">
          <h3>Payment Details</h3>
          <p>
            Bank details and payment instructions will be announced shortly.
          </p>
          <p className="section-sub">
            Please check this page regularly for updates.
          </p>
        </div>

        {/* -------- NOTES -------- */}
        <div className="reg-notes">
          <ul>
            <li>Registration fees are not required for plenary and invited speakers.</li>
            <li>Accommodation details will be communicated separately.</li>
            <li>Please retain your payment receipt for verification.</li>
          </ul>
        </div>

        {/* -------- CTA (MAIN IMPROVEMENT) -------- */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>

          <p className="section-sub">
            Complete your registration using the official form.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5a7p6wTBzcPMdRKa077_8w5yri26YEmBD2IYgFAGn9kcrVw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Open Registration Form
          </a>

          <p
            style={{
              marginTop: "0.8rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            You will be redirected to the official Google Form.
          </p>

        </div>

        {/* -------- STATUS -------- */}
        <div className="reg-banner">
          Registration Now Open
        </div>

      </div>
    </section>
  );
}

export default RegistrationDet;
