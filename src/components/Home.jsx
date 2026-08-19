import CountdownTimer from "./CountdownTimer";
import FeaturedSpeakers from "./FeaturedSpeakers";
import GlobalParticipation from "./GlobalParticipation";

import juGateBubbles from "../assets/juGateBubbles.png";
import juLakeBridge from "../assets/math_dept.png";
import juGateTaxi from "../assets/juGateTaxi.png";
import juCentralLibrary from "../assets/juCentralLibrary.png";
import juStatueNight from "../assets/juStatueNight.png";
import juRoadFlowers from "../assets/juRoadFlowers.png";
import juEveningWalk from "../assets/juEveningWalk.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-root">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="hero-shell">
        <div className="container hero">

          {/* -------------------------
              Hero Main Content
          ------------------------- */}
          <div className="hero-main">

            <p className="hero-kicker">
              4<sup>th</sup> International Conference on
            </p>

            <h1 className="hero-title">
              Mathematical Analysis &amp;{" "}
              <span className="hero-gradient">
                Applications in Modelling
              </span>
            </h1>

            <p className="hero-meta">
              12 – 14 October 2026 · Jadavpur University, Kolkata, India
            </p>

            <p className="hero-lead">
              A focused meeting for researchers working at the interface of
              analysis, modelling, and complex systems — with applications to
              biology, epidemiology, engineering, and the physical sciences.
            </p>

            {/* Hero Buttons */}
            <div className="hero-actions">
              <Link
                to="/registration"
                className="btn btn-primary"
              >
                Registration &amp; Fees
              </Link>

              <Link
                to="/publications"
                className="btn btn-ghost"
              >
                Publications / Proceedings
              </Link>
            </div>

            {/* Hero Pills */}
            <div className="hero-pills">

              <div className="hero-pill">
                <span className="hero-pill-label">
                  Edition
                </span>

                <span className="hero-pill-value">
                  4<sup>th</sup> ICMAAM (2026)
                </span>
              </div>

              <div className="hero-pill">
                <span className="hero-pill-label">
                  Mode
                </span>

                <span className="hero-pill-value">
                  In-person · On campus
                </span>
              </div>

            </div>
          </div>


          {/* =====================================================
              HERO ASIDE / COUNTDOWN
          ===================================================== */}
          <aside className="hero-aside">

            <div className="hero-glass">

              <p className="hero-aside-label">
                ICMAAM 2026
              </p>

              {/* Conference Countdown */}
              <CountdownTimer />

              <p className="hero-countdown-date">
                12–14 October 2026
              </p>

              <p className="hero-countdown-location">
                Jadavpur University, Kolkata, India
              </p>


              {/* =================================================
                  REGISTRATION DEADLINE
              ================================================= */}
              <div className="registration-deadline">

                <span className="registration-deadline-label">
                  REGISTRATION DEADLINE
                </span>

                <strong>
                  20 September 2026
                </strong>

              </div>


              {/* Register Button */}
              <div className="hero-register-action">

                <Link
                  to="/registration"
                  className="btn btn-primary"
                >
                  Register Now
                </Link>

              </div>

            </div>

          </aside>

        </div>
      </section>


      {/* =========================================================
          GLOBAL PARTICIPATION
      ========================================================= */}
      <GlobalParticipation />


      {/* =========================================================
          FEATURED SPEAKERS
      ========================================================= */}
      <FeaturedSpeakers />


      {/* =========================================================
          JU CAMPUS GALLERY
      ========================================================= */}
      <section className="section">

        <div className="container">

          <div className="section-header">

            <h2>
              JU Campus Gallery
            </h2>

            <p className="section-sub">
              A moving glimpse of Jadavpur University
            </p>

          </div>


          <div className="auto-gallery">

            <div className="auto-track">

              {/* -------------------------
                  First Set
              ------------------------- */}

              <div className="auto-item">
                <img
                  src={juGateBubbles}
                  alt="Jadavpur University gate with bubbles"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juLakeBridge}
                  alt="Lotus lake and bridge, JU campus"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juGateTaxi}
                  alt="Jadavpur University main gate in rain"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juCentralLibrary}
                  alt="Central Library, Jadavpur University"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juStatueNight}
                  alt="Statue at night, Jadavpur University"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juRoadFlowers}
                  alt="Tree-lined road with flowers, JU campus"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juEveningWalk}
                  alt="Evening walk on campus"
                />
              </div>


              {/* -------------------------
                  Duplicate Set
                  For seamless infinite loop
              ------------------------- */}

              <div className="auto-item">
                <img
                  src={juGateBubbles}
                  alt="Jadavpur University gate with bubbles"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juLakeBridge}
                  alt="Lotus lake and bridge, JU campus"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juGateTaxi}
                  alt="Jadavpur University main gate in rain"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juCentralLibrary}
                  alt="Central Library, Jadavpur University"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juStatueNight}
                  alt="Statue at night, Jadavpur University"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juRoadFlowers}
                  alt="Tree-lined road with flowers, JU campus"
                />
              </div>

              <div className="auto-item">
                <img
                  src={juEveningWalk}
                  alt="Evening walk on campus"
                />
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SCIENTIFIC THEMES
      ========================================================= */}
      <section className="section section-alt">

        <div className="container">

          <div className="section-header">

            <h2>
              Scientific Themes
            </h2>

            <p className="section-sub">
            </p>

          </div>


          <div className="theme-grid">

            {/* Mathematical Biology */}
            <div className="theme-card">

              <h3>
                Mathematical Biology &amp; Epidemiology
              </h3>

              <p>
                Modelling biological populations, infectious diseases,
                ecological interactions and biomedical processes.
              </p>

              <ul>
                <li>
                  Population dynamics and ecosystem models
                </li>

                <li>
                  Deterministic &amp; stochastic epidemic models
                </li>

                <li>
                  Optimal control and parameter estimation
                </li>
              </ul>

            </div>


            {/* Analysis */}
            <div className="theme-card">

              <h3>
                Analysis &amp; Differential Equations
              </h3>

              <p>
                Theoretical foundations that drive modern modelling
                and simulation.
              </p>

              <ul>

                <li>
                  Functional and harmonic analysis
                </li>

                <li>
                  ODEs, PDEs, and variational problems
                </li>

                <li>
                  Qualitative and numerical analysis
                </li>

              </ul>

            </div>


            {/* Applied Modelling */}
            <div className="theme-card">

              <h3>
                Applied Modelling &amp; Computation
              </h3>

              <p>
                Methods and models relevant to physics,
                engineering and complex systems.
              </p>

              <ul>

                <li>
                  Multiscale and multiphysics modelling
                </li>

                <li>
                  Complex networks and data-driven models
                </li>

                <li>
                  Scientific computing and numerical schemes
                </li>

              </ul>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          IMPORTANT DATES
      ========================================================= */}
      <section className="section">

        <div className="container">

          <div className="section-header">

            <h2>
              Important Dates
            </h2>

            <p className="section-sub">
              Key deadlines and conference dates for ICMAAM 2026.
            </p>

          </div>


          <div className="timeline">

            {/* Abstract Submission */}
            <div className="timeline-item">

              <div className="timeline-dot" />

              <div className="timeline-body">

                <div className="timeline-label">
                  Abstract submission
                </div>

                <div className="timeline-text">
                  []
                </div>

              </div>

            </div>


            {/* Acceptance */}
            <div className="timeline-item">

              <div className="timeline-dot" />

              <div className="timeline-body">

                <div className="timeline-label">
                  Notification of acceptance
                </div>

                <div className="timeline-text">
                  []
                </div>

              </div>

            </div>


            {/* Full Paper */}
            <div className="timeline-item">

              <div className="timeline-dot" />

              <div className="timeline-body">

                <div className="timeline-label">
                  Full paper submission
                </div>

                <div className="timeline-text">
                  []
                </div>

              </div>

            </div>


            {/* Registration Deadline */}
            <div className="timeline-item active">

              <div className="timeline-dot" />

              <div className="timeline-body">

                <div className="timeline-label">
                  Registration deadline
                </div>

                <div className="timeline-text">
                  20 September 2026
                </div>

              </div>

            </div>


            {/* Conference Dates */}
            <div className="timeline-item active">

              <div className="timeline-dot" />

              <div className="timeline-body">

                <div className="timeline-label">
                  Conference dates
                </div>

                <div className="timeline-text">
                  12 – 14 October 2026 · Jadavpur University, Kolkata
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          EXPLORE THE CONFERENCE
      ========================================================= */}
      <section className="section subtle-section">

        <div className="container section-grid">

          <div>

            <h2>
              Explore the conference
            </h2>

            <p className="section-sub">
              Use the links below to quickly access detailed information
              available on other pages of the website.
            </p>

          </div>


          <div className="section-card">

            <h3>
              Key pages
            </h3>

            <ul className="link-list">

              <li>
                <Link to="/department">
                  Department of Mathematics
                </Link>
              </li>

              <li>
                <Link to="/speakers">
                  Invited Speakers
                </Link>
              </li>

              <li>
                <Link to="/organization">
                  Organising Committee
                </Link>
              </li>

              <li>
                <Link to="/travel">
                  Travel &amp; Local Information
                </Link>
              </li>

              <li>
                <Link to="/fundings">
                  Funding / Support
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact &amp; Enquiries
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
