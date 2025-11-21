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
          <h2>Organising Committee</h2>
          <p className="section-sub">
            The conference is organised under the guidance of distinguished
            members of Jadavpur University and supported by international,
            national and local scientific advisory committees.
          </p>
        </div>

        {/* Top roles */}
        <div className="org-roles-grid">
          <div className="org-role-card">
            <h3>Chief Patron</h3>
            <p className="org-name">Prof. (Dr.) Chiranjib Bhattacharjee</p>
            <p className="org-role">Vice Chancellor, Jadavpur University</p>
          </div>

          <div className="org-role-card">
            <h3>Patrons</h3>
            <p className="org-name">Prof. (Dr.) Amitava Dutta</p>
            <p className="org-role">Pro-Vice Chancellor, Jadavpur University</p>
            <p className="org-name">Prof. (Dr.) Subenoy Chakraborty</p>
            <p className="org-role">
              Dean, Faculty of Science, Jadavpur University
            </p>
          </div>

          <div className="org-role-card">
            <h3>Chairman</h3>
            <p className="org-name">Prof. (Dr.) Saghnik Sinha</p>
            <p className="org-role">
              Head, Department of Mathematics, Jadavpur University
            </p>
            <h4 className="org-subheading">Treasurer</h4>
            <p className="org-name">Prof. (Dr.) Arindam Bhattacharya</p>
            <p className="org-role">
              Department of Mathematics, Jadavpur University
            </p>
          </div>

          <div className="org-role-card">
            <h3>Organising Secretaries</h3>
            <p className="org-name">Prof. (Dr.) Priti Kumar Roy</p>
            <p className="org-role">
              Department of Mathematics, Jadavpur University
            </p>
            <h4 className="org-subheading">Executive Secretary</h4>
            <p className="org-name">Prof. (Dr.) Nandadulal Bairagi</p>
            <p className="org-role">
              Department of Mathematics, Jadavpur University
            </p>
          </div>

          <div className="org-role-card">
            <h3>Joint Organising Secretaries</h3>
            <p className="org-name">Prof. (Dr.) Kallol Paul</p>
            <p className="org-role">
              Department of Mathematics, Jadavpur University
            </p>
            <p className="org-name">Prof. (Dr.) Dipak Kumar Kesh</p>
            <p className="org-role">
              Department of Mathematics, Jadavpur University
            </p>
          </div>
        </div>

        {/* Committees */}
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
