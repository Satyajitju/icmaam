import { Link } from "react-router-dom";

function GlobalParticipation() {
  const countries = [
    "USA",
    "Canada",
    "United Kingdom",
    "France",
    "Czech Republic",
    "Japan",
    "South Africa",
  ];

  return (
    <section className="section">
      <div className="container">

        <div className="section-header">
          <h2>Global Participation Network</h2>
          <p className="section-sub">
            Distinguished invited speakers representing leading institutions
            across North America, Europe, Africa and Asia.
          </p>
        </div>

        <div className="global-card">

          <div className="global-stats">

            <div className="global-stat">
              <div className="global-number">7</div>
              <div className="global-label">Countries Confirmed</div>
            </div>

            <div className="global-stat">
              <div className="global-number">8</div>
              <div className="global-label">International Speakers</div>
            </div>

            <div className="global-stat">
              <div className="global-number">2026</div>
              <div className="global-label">ICMAAM Edition</div>
            </div>

          </div>

          <div className="country-tags">
            {countries.map((country) => (
              <span key={country} className="country-tag">
                {country}
              </span>
            ))}
          </div>

          <div className="global-note">
            Additional international and national invited speakers will be
            announced periodically as confirmations are received.
          </div>

          <div className="global-action">
            <Link to="/speakers" className="btn btn-primary">
              Meet the Speakers
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default GlobalParticipation;

