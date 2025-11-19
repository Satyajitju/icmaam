// src/components/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-root">
      {/* Hero */}
      <section className="hero-shell">
        <div className="container hero">
          <div className="hero-main">
            <p className="hero-kicker">4th International Conference</p>
            <h1 className="hero-title">
              Mathematical Analysis &amp;{" "}
              <span className="hero-gradient">Advanced Modelling</span>
            </h1>
            <p className="hero-meta">
              12 – 14 October 2023 · Jadavpur University, Kolkata, India
            </p>
            <p className="hero-lead">
              A focused meeting for researchers working at the interface of
              analysis, modelling, and complex systems — with applications to
              biology, epidemiology, engineering and the physical sciences.
            </p>

            <div className="hero-actions">
              <Link to="/registration" className="btn btn-primary">
                Registration &amp; Fees
              </Link>
              <Link to="/publications" className="btn btn-ghost">
                Publications / Proceedings
              </Link>
            </div>

            <div className="hero-pills">
              <div className="hero-pill">
                <span className="hero-pill-label">Mode</span>
                <span className="hero-pill-value">In-person · On campus</span>
              </div>
              <div className="hero-pill">
                <span className="hero-pill-label">Proceedings</span>
                <span className="hero-pill-value">
                  Selected papers in Springer Proceedings
                </span>
              </div>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="hero-glass">
              <p className="hero-aside-label">Conference snapshot</p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">3</div>
                  <div className="hero-stat-label">Days</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">6+</div>
                  <div className="hero-stat-label">Plenary talks</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">100+</div>
                  <div className="hero-stat-label">Contributions</div>
                </div>
              </div>
              <ul className="hero-aside-list">
                <li>High-quality invited and contributed talks</li>
                <li>Special emphasis on mathematical biology &amp; epidemiology</li>
                <li>Sessions for early-career researchers and students</li>
              </ul>
              <p className="hero-aside-foot">
                You can refine this block with final statistics and highlights.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Themes / quick links */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Scientific Themes</h2>
            <p className="section-sub">
              Adapt or extend these areas according to the actual scope of the conference.
            </p>
          </div>
          <div className="theme-grid">
            <div className="theme-card">
              <h3>Mathematical Biology &amp; Epidemiology</h3>
              <p>
                Modelling biological populations, infectious diseases, ecological
                interactions and biomedical processes.
              </p>
              <ul>
                <li>Population dynamics and ecosystem models</li>
                <li>Deterministic &amp; stochastic epidemic models</li>
                <li>Optimal control and parameter estimation</li>
              </ul>
            </div>
            <div className="theme-card">
              <h3>Analysis &amp; Differential Equations</h3>
              <p>
                Theoretical foundations that drive modern modelling and simulation.
              </p>
              <ul>
                <li>Functional and harmonic analysis</li>
                <li>ODEs, PDEs, and variational problems</li>
                <li>Qualitative and numerical analysis</li>
              </ul>
            </div>
            <div className="theme-card">
              <h3>Applied Modelling &amp; Computation</h3>
              <p>
                Methods and models relevant to physics, engineering and complex systems.
              </p>
              <ul>
                <li>Multiscale and multiphysics modelling</li>
                <li>Complex networks and data-driven models</li>
                <li>Scientific computing and numerical schemes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important dates (summary) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Important Dates</h2>
            <p className="section-sub">
              Replace placeholders with the final timeline of the conference.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-body">
                <div className="timeline-label">Abstract submission</div>
                <div className="timeline-text">[Insert deadline]</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-body">
                <div className="timeline-label">Notification of acceptance</div>
                <div className="timeline-text">[Insert date]</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-body">
                <div className="timeline-label">Full paper submission</div>
                <div className="timeline-text">[Insert date]</div>
              </div>
            </div>
            <div className="timeline-item active">
              <div className="timeline-dot" />
              <div className="timeline-body">
                <div className="timeline-label">Conference dates</div>
                <div className="timeline-text">
                  09 – 11 October 2023 · Jadavpur University
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick navigation to other pages */}
      <section className="section subtle-section">
        <div className="container section-grid">
          <div>
            <h2>Explore the conference</h2>
            <p className="section-sub">
              Use the links below to quickly access detailed information already
              available in other pages of the website.
            </p>
          </div>
          <div className="section-card">
            <h3>Key pages</h3>
            <ul className="link-list">
              <li>
                <Link to="/speakers">Invited Speakers</Link>
              </li>
              <li>
                <Link to="/organization">Organising Committee</Link>
              </li>
              <li>
                <Link to="/travel">Travel &amp; Local Information</Link>
              </li>
              <li>
                <Link to="/fundings">Funding / Support</Link>
              </li>
              <li>
                <Link to="/contact">Contact &amp; Enquiries</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
