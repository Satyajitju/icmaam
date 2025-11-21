// src/components/UniversityDet.jsx
import React from "react";

function UniversityDet() {
  return (
    <section className="section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <h2>Jadavpur University</h2>
          <p className="section-sub">
            A premier institution of higher education and research in India
          </p>
        </div>

        {/* Main text */}
        <div className="section-card">
          <p className="univ-text">
            The origins of Jadavpur University trace back to the early 20th
            century. In 1910, the Society for the Promotion of Technical
            Education in Bengal was amalgamated with the National Council of
            Education (NCE). The NCE thereafter oversaw the Bengal Technical
            Institute, which later evolved into the College of Engineering and
            Technology, Bengal. By 1940, the institution was functioning
            virtually as a university and played a significant role in advancing
            technical education in the region.
          </p>

          <p className="univ-text">
            The founders believed that technical education must be complemented
            by the Basic Sciences and the Humanities. Thus, Jadavpur University
            may be said to rest on three pillars — <strong>Technology, Science and
            Arts</strong>. Following Independence, the Government of West Bengal,
            with the concurrence of the Government of India, passed the required
            legislation to formally establish Jadavpur University on
            <strong> 24 December 1955</strong>.
          </p>

          <p className="univ-text">
            Today, Jadavpur University is recognised globally for its academic
            excellence. In the <strong>NIRF Rankings (2022)</strong> by the Ministry of
            Education, Government of India, the University has secured:
          </p>

          <ul className="univ-list">
            <li>1st position among all State Universities</li>
            <li>4th position in the University Category</li>
            <li>11th in Engineering</li>
            <li>13th in Research</li>
            <li>18th in Pharmacy</li>
            <li>12th overall in India</li>
          </ul>

          <p className="univ-text">
            Jadavpur University continues to be a leading centre for research,
            innovation and higher learning, attracting scholars and students from
            across India and abroad.
          </p>
        </div>

      </div>
    </section>
  );
}

export default UniversityDet;
