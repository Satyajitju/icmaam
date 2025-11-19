// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="page-root">
      {/* Background orbits / glow */}
      <div className="bg-orbit bg-orbit-1" />
      <div className="bg-orbit bg-orbit-2" />
      <div className="bg-grid" />

      {/* Top strip */}
      <div className="top-strip">
        <span>Jadavpur University · Department of Mathematics</span>
        <span className="top-strip-pill">Kolkata · India</span>
      </div>

      {/* Navigation */}
      <header className="nav-shell">
        <div className="nav container">
          <div className="nav-left">
            <div className="nav-mark">
              <span className="nav-mark-ring" />
              <span className="nav-mark-text">ICMAAM</span>
            </div>
            <div className="nav-title">
              <div className="nav-title-main">ICMAAM 2023</div>
              <div className="nav-title-sub">
                International Conference on Mathematical Analysis &amp;
                Applications in Modelling
              </div>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#themes">Themes</a>
            <a href="#dates">Dates</a>
            <a href="#committee">Committee</a>
            <a href="#registration" className="nav-links-cta">
              Register
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero-shell">
          <div className="container hero">
            <div className="hero-main">
              <p className="hero-kicker">2nd International Conference</p>
              <h1 className="hero-title">
                Mathematical Analysis &amp;{" "}
                <span className="hero-gradient">Advanced Modelling</span>
              </h1>
              <p className="hero-meta">
                09 – 11 October 2023 · Jadavpur University, Kolkata, India
              </p>
              <p className="hero-lead">
                A focused meeting for researchers working at the interface of
                analysis, modelling, and complex systems — from mathematical
                biology, epidemiology and population dynamics to engineering and
                physical sciences.
              </p>

              <div className="hero-actions">
                <a href="#registration" className="btn btn-primary">
                  Registration &amp; Fees
                </a>
                <a href="#cfp" className="btn btn-ghost">
                  Call for Papers
                </a>
              </div>

              <div className="hero-pills">
                <div className="hero-pill">
                  <span className="hero-pill-label">Mode</span>
                  <span className="hero-pill-value">In-person · On campus</span>
                </div>
                <div className="hero-pill">
                  <span className="hero-pill-label">Proceedings</span>
                  <span className="hero-pill-value">
                    Springer Proceedings (peer-reviewed)
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
                  <li>Special focus on mathematical biology &amp; epidemiology</li>
                  <li>Dedicated sessions for early-career researchers</li>
                </ul>
                <p className="hero-aside-foot">
                  Update this section with final statistics after the conference.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container section-grid">
            <div>
              <h2>About ICMAAM 2023</h2>
              <p>
                ICMAAM 2023 provides a platform for researchers, practitioners and
                students to present recent advances in mathematical analysis and
                its applications in modelling complex phenomena.
              </p>
              <p>
                The conference brings together experts in analysis, differential
                equations, dynamical systems, scientific computing, and
                application-driven modelling with a strong emphasis on
                cross-disciplinary interaction.
              </p>
              <p>
                We particularly encourage participation from young researchers and
                doctoral students, and aim to foster long-term collaborations
                between academia and industry.
              </p>
            </div>
            <div className="section-card">
              <h3>Proceedings &amp; Publication</h3>
              <p>
                Selected peer-reviewed papers from the conference will be published
                in a{" "}
                <strong>
                  Springer Proceedings in Mathematics &amp; Statistics
                </strong>{" "}
                volume.
              </p>
              <p className="small">
                Only papers that meet the refereeing standards and formatting
                guidelines of the series will be considered. Further details on
                templates and submission workflow will be communicated to the
                corresponding authors of accepted contributions.
              </p>
            </div>
          </div>
        </section>

        {/* THEMES */}
        <section id="themes" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Scientific Themes</h2>
              <p className="section-sub">
                Submissions are invited in (but not limited to) the following areas.
                You may adapt this list according to the final programme.
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
                  <li>Dynamical systems in population biology</li>
                  <li>Deterministic &amp; stochastic epidemic models</li>
                  <li>Optimal control and parameter estimation</li>
                </ul>
              </div>
              <div className="theme-card">
                <h3>Analysis &amp; Differential Equations</h3>
                <p>
                  Theoretical foundations that drive modern modelling and
                  simulation.
                </p>
                <ul>
                  <li>Functional and harmonic analysis</li>
                  <li>ODEs, PDEs and variational problems</li>
                  <li>Qualitative and numerical analysis</li>
                </ul>
              </div>
              <div className="theme-card">
                <h3>Applied Modelling &amp; Computation</h3>
                <p>
                  Models and algorithms relevant to physics, engineering, networks,
                  and complex systems.
                </p>
                <ul>
                  <li>Multiscale and multiphysics modelling</li>
                  <li>Complex networks and data-driven models</li>
                  <li>Scientific computing and high-performance methods</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT DATES */}
        <section id="dates" className="section">
          <div className="container">
            <div className="section-header">
              <h2>Important Dates</h2>
              <p className="section-sub">
                Replace placeholders below with the final timeline of the
                conference.
              </p>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-body">
                  <div className="timeline-label">Abstract submission</div>
                  <div className="timeline-text">[Insert final deadline]</div>
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

        {/* COMMITTEE SECTION (editable placeholders) */}
        <section id="committee" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2>Organising Committee</h2>
              <p className="section-sub">
                Replace the placeholders below with the official list of chairs and
                committee members.
              </p>
            </div>
            <div className="committee-grid">
              <div className="committee-card">
                <h3>Patron</h3>
                <p className="committee-name">[Name]</p>
                <p className="committee-role">Vice-Chancellor, Jadavpur University</p>
              </div>
              <div className="committee-card">
                <h3>Conference Chair</h3>
                <p className="committee-name">[Name]</p>
                <p className="committee-role">
                  Department of Mathematics, Jadavpur University
                </p>
              </div>
              <div className="committee-card">
                <h3>Organising Secretaries</h3>
                <p className="committee-name">[Name 1], [Name 2]</p>
                <p className="committee-role">
                  Department of Mathematics / Centre for Mathematical Biology and
                  Ecology
                </p>
              </div>
              <div className="committee-card">
                <h3>Scientific Committee</h3>
                <p className="committee-role">
                  Insert names of national and international members here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REGISTRATION */}
        <section id="registration" className="section">
          <div className="container section-grid">
            <div>
              <h2>Registration &amp; Submission</h2>
              <p>
                Please consult the detailed registration circular for the
                applicable fees, modes of payment, and submission workflow.
              </p>
              <ul className="bullet-list">
                <li>
                  At least one author of each accepted contribution must register.
                </li>
                <li>
                  Students are requested to upload a valid identity proof for
                  concessional rates.
                </li>
                <li>
                  Payment details and bank information can be linked from this
                  section.
                </li>
              </ul>
            </div>
            <div className="section-card">
              <h3>Useful Links</h3>
              <ul className="link-list">
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    Online registration form
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    Paper submission portal
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
                    Download conference brochure (PDF)
                  </a>
                </li>
                <li>
                  <a href="#cfp">Call for Papers (on this page)</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CFP placeholder – you can wire to a real section later */}
        <section id="cfp" className="section subtle-section">
          <div className="container">
            <h2>Call for Papers</h2>
            <p className="section-sub">
              Add the detailed call for papers here: submission guidelines,
              formatting instructions, list of topics, and information about the
              review process.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-title">ICMAAM 2023 · Jadavpur University</div>
            <p className="footer-text">
              Department of Mathematics &amp; Centre for Mathematical Biology and
              Ecology, Jadavpur University, Kolkata, India.
            </p>
          </div>
          <div className="footer-right">
            <p className="footer-text">
              Academic queries: <strong>[add official contact email]</strong>
            </p>
            <p className="footer-text">
              Website maintained by{" "}
              <strong>ICMAAM 2023 Organising Committee</strong>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
