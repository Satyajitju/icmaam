// src/components/OrganizationDet.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function OrganizationDet() {
  const [international, setInternational] = useState([]);
  const [national, setNational] = useState([]);
  const [local, setLocal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommittee = async () => {
      try {
        const url =
          "https://script.google.com/macros/s/AKfycbzp9_t_8yM-NqJxEvx217pRreEpG1tuMtcFja3FgYzHyhig2oBwzLVM4iXZIVZB_cXS/exec?type=organization";
        const response = await axios.get(url);

        if (response.status === 200 && response.data) {
          setInternational(response.data.international || []);
          setNational(response.data.national || []);
          setLocal(response.data.local || []);
        }
      } catch (err) {
        console.error("Error loading organization data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommittee();
  }, []);

  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>Organising Structure</h2>
          <p className="section-sub">
            ICMAAM 2026 is guided by a central organising committee and a set of
            dedicated sub-committees responsible for different aspects of the
            conference.
          </p>
        </div>

        {/* Organising Committee */}
        <h3 className="org-section-label">Organising Committee</h3>
        <div className="org-roles-grid">
          <div className="org-role-card">
            <h3>Chief Patron</h3>
            <p className="org-name">Prof. (Dr.) Chiranjib Bhattyacharya</p>
            <p className="org-role">Hon'ble Vice Chancellor, Jadavpur University</p>
          </div>

          <div className="org-role-card">
            <h3>Patron</h3>
            <p className="org-name">Prof. (Dr.) Amitava Dutta</p>
            <p className="org-role">Hon'ble Pro-Vice Chancellor, Jadavpur University</p>
          </div>

          <div className="org-role-card">
            <h3>Chairman</h3>
            <p className="org-name">Prof. (Dr.) Subhas Chandra Mondal</p>
            <p className="org-role">Hon'ble Head, Department of Mathematics, Jadavpur University</p>
          </div>

          <div className="org-role-card">
            <h3>Organising Secretary</h3>
            <p className="org-name">Prof. (Dr.) Priti Kumar Roy</p>
            <p className="org-role">Jadavpur University</p>
          </div>

          <div className="org-role-card">
            <h3>Joint Secretary</h3>
            <p className="org-name">Prof. (Dr.) Dipak Kumar Kesh</p>
            <p className="org-role">Jadavpur University</p>
            <p className="org-name">Prof.(Dr.) Arindam Bhattyachatya</p>
            <p className="org-role">Jadavpur University</p>
          </div>

          <div className="org-role-card">
            <h3>Executive Secretary</h3>
            <p className="org-name">Prof. (Dr.) Nandadulal Bairagi</p>
            <p className="org-role">Jadavpur University</p>
          </div>
        </div>

        {/* Sub-Committees */}
        <h3 className="org-section-label">Sub-Committees</h3>
        <p className="section-sub" style={{ marginBottom: "1.4rem" }}>
          The following sub-committees coordinate specific aspects such as
          finance, technical programme, scientific coordination and logistics.
        </p>

        <div className="org-sub-grid">
          <div className="org-sub-card">
            <h4>Finance</h4>
            <p className="org-sub-role">Joint Convenors</p>
            <ul className="org-sub-list">
              <li>Prof. (Dr.) Gopal Chandra Shit, Jadavpur University</li>
              <li>Prof. (Dr.) Abhijit Lahiri, Jadavpur University</li>
            </ul>
          </div>

          <div className="org-sub-card">
            <h4>Technical</h4>
            <p className="org-sub-role">Joint Convenors</p>
            <ul className="org-sub-list">
              <li>Prof. (Dr.) Farook Rahaman, Jadavpur University </li>
              <li>Prof. (Dr.) Bibhas Chandra Giri, Jadavpur University</li>
              <li>Dr. Santosh Biswas, Jadavpur University</li>
            </ul>
          </div>

          <div className="org-sub-card">
            <h4>Scientific</h4>
            <p className="org-sub-role">Joint Convenors</p>
            <ul className="org-sub-list">
              <li>Prof. (Dr.) Shamik Ghosh, Jadavpur University</li>
              <li>Prof. (Dr.) Bibhas Chandra Giri, Jadavpur University</li>
              <li>Prof. (Dr.) Alaka Das, Jadavpur University</li>
            </ul>
          </div>

          <div className="org-sub-card">
            <h4>Publication</h4>
            <p className="org-sub-role">Joint Convenors</p>
            <ul className="org-sub-list">
              <li>Prof. (Dr.) Anup Bandyopadhyay, Jadavpur University </li>
              <li>Prof. (Dr.) Shamik Ghosh, Jadavpur University</li>
              <li>Prof. (Dr.) Sujit Sardar, Jadavpur University</li>
              <li>Prof. (Dr.) Sukhendu Kar, Jadavpur University</li>
            </ul>
          </div>

          <div className="org-sub-card">
            <h4>Reception</h4>
            <p className="org-sub-role">Joint Convenors</p>
            <ul className="org-sub-list">
              <li>Dr. Manasi Mondal, Jadavpur University</li>
              <li>Prof. (Dr.) Nilanjana Mahata, Jadavpur University</li>
              <li>Prof. (Dr.) Anup Bandyopadhyay, Jadavpur University</li>
            </ul>
          </div>

          <div className="org-sub-card">
            <h4>Accommodation</h4>
            <p className="org-sub-role">Convenor(s)</p>
            <ul className="org-sub-list">
              <li>Dr. Riddhick Birbonshi, Jadavpur University</li>
            </ul>
          </div>

          <div className="org-sub-card">
            <h4>Refreshment</h4>
            <p className="org-sub-role">Convenor(s)</p>
            <ul className="org-sub-list">
              <li>Dr. Molla Basir Ahamed, Jadavpur University</li>
            </ul>
          </div>

          <div className="org-sub-card">
            <h4>Travel</h4>
            <p className="org-sub-role">Convenor(s)</p>
            <ul className="org-sub-list">
              <li>Dr. Sanjib Kumar Pal, Jadavpur University</li>
            </ul>
          </div>
        </div>

        {/* Scientific Advisory Committees (from API) */}
        <h3 className="org-section-label">Scientific Advisory Committees</h3>
        <div className="org-committee-grid">
          <div className="org-committee-column">
            <h3 className="org-committee-title">
              International Scientific Advisory Committee
            </h3>

            {loading && international.length === 0 ? (
              <p className="org-loading">Loading committee list…</p>
            ) : (
              <ul className="org-committee-list">
                {international.map((name, index) => (
                  <li key={`intl-${index}`}>{name}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="org-committee-column">
            <h3 className="org-committee-title">
              National Scientific Advisory Committee
            </h3>

            {loading && national.length === 0 ? (
              <p className="org-loading">Loading committee list…</p>
            ) : (
              <ul className="org-committee-list">
                {national.map((name, index) => (
                  <li key={`nat-${index}`}>{name}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="org-committee-column">
            <h3 className="org-committee-title">Local Organising Committee</h3>

            {loading && local.length === 0 ? (
              <p className="org-loading">Loading committee list…</p>
            ) : (
              <ul className="org-committee-list">
                {local.map((name, index) => (
                  <li key={`loc-${index}`}>{name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrganizationDet;
