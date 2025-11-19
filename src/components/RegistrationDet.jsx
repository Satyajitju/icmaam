// src/components/RegistrationDet.jsx

function RegistrationDet() {
  return (
    <section className="section">
      <div className="container registration-soon">

        <div className="section-header" style={{ textAlign: "center" }}>
          <h2>Registration</h2>
          <p className="section-sub">
            Registration for the <b>4<sup>th</sup> ICMAAM (12–14 October 2026)</b> 
            will open soon. Please check this page regularly for updates.
          </p>
        </div>

        {/* Glass Card */}
        <div className="registration-card">
          <h3>Registration Not Yet Started</h3>
          <p className="reg-text">
            The registration portal is currently closed. Details regarding:
          </p>

          <ul className="reg-list">
            <li>Registration fees (Indian and International participants)</li>
            <li>Accommodation options</li>
            <li>Important deadlines for registration</li>
            <li>Official Google Form link for registration</li>
          </ul>

          <p className="reg-text">
            will be announced soon on this page and on the official conference homepage.
          </p>

          <div className="reg-coming">
            Opening Date: <span>To be announced</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default RegistrationDet;
