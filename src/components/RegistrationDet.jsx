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
              <li>Faculty Members: <strong>$200</strong></li>
              <li>Faculty Members (Developing Countries): <strong>$150</strong></li>
              <li>Students / Research Scholars: <strong>$100</strong></li>
              <li>Students (Developing Countries): <strong>$75</strong></li>
            </ul>
          </div>

          <div className="reg-card">
            <h3>Indian Participants</h3>
            <ul>
              <li>Faculty (with accommodation): <strong>₹8000</strong></li>
              <li>Faculty (without accommodation): <strong>₹4000</strong></li>
              <li>Students (with accommodation): <strong>₹6000</strong></li>
              <li>Students (without accommodation): <strong>₹3000</strong></li>
            </ul>
          </div>

          <div className="reg-card">
            <h3>Jadavpur University Participants</h3>
            <ul>
              <li>Students / Scholars: <strong>₹2000</strong></li>
              <li>Faculty Members: <strong>₹3000</strong></li>
            </ul>
          </div>

        </div>

        {/* ---------------- PAYMENT DETAILS (TEMPORARY) ---------------- */}
        <div className="reg-bank">
          <h3>Payment Details</h3>

          <p className="bank-note">
            Bank account details and online payment instructions will be announced shortly.
          </p>

          <p className="bank-note">
            Participants are requested to check this page regularly for updates regarding
            payment procedures and registration confirmation.
          </p>
        </div>

        {/* ---------------- NOTES ---------------- */}
        <div className="reg-notes">
          <ul>
            <li>Registration fees are not required for plenary and invited speakers.</li>
            <li>Accommodation details will be communicated separately.</li>
            <li>Participants are advised to retain proof of payment for verification.</li>
          </ul>
        </div>

        {/* ---------------- STATUS ---------------- */}
        <div className="reg-coming">
          Online registration will open soon.
        </div>

      </div>
    </section>
  );
}

export default RegistrationDet;
