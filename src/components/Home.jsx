import CountdownTimer from "./CountdownTimer";
import FeaturedSpeakers from "./FeaturedSpeakers";
import GlobalParticipation from "./GlobalParticipation";
import Highlights from "./Highlight";

import juGateBubbles from "../assets/juGateBubbles.png";
import juLakeBridge from "../assets/math_dept.png";
import juGateTaxi from "../assets/juGateTaxi.png";
import juCentralLibrary from "../assets/juCentralLibrary.png";
import juStatueNight from "../assets/juStatueNight.png";
import juRoadFlowers from "../assets/juRoadFlowers.png";
import juEveningWalk from "../assets/juEveningWalk.png";


import { Link } from "react-router-dom";

function Home() {
  const goToAbstract = (e) => {
    e.preventDefault();
    document
      .getElementById("abstract-book")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="home-root">

      {/* =========================================================
          TOP BANNER - jumps to the Abstract Book section
      ========================================================= */}
      
      {/* =========================================================
          TOP ANNOUNCEMENT — CONFERENCE PHOTO ARCHIVE
      ========================================================= */}
      <a
        href="#conference-memories"
        className="top-banner memories-top-banner"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("conference-memories")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          window.history.replaceState(
            null,
            "",
            "#conference-memories"
          );
        }}
      >
        <span className="top-banner-badge memories-banner-badge">
          NEW
        </span>

        <span className="top-banner-text">
          ICMAAM 2026 Photo Gallery is now live — relive all three days
          of the conference.
        </span>

        <span className="memories-banner-arrow" aria-hidden="true">
          ↓ Explore
        </span>
      </a>

      

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
                  05 October 2026
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
          ICMAAM 2026 HIGHLIGHTS
          Abstract Book + Presentation Awards
          (see Highlight.jsx and Highlight.css)
      ========================================================= */}
      <Highlights />


      {/* =========================================================
          ICMAAM 2026 — CONFERENCE MEMORIES
      ========================================================= */}
      <section className="section conference-memories">
        <div className="container">

          <div className="memories-heading">
            <span className="memories-eyebrow">
              ICMAAM 2026 · OFFICIAL PHOTO ARCHIVE
            </span>

            <h2>
              Three Days. One Global
              <span> Mathematical Community.</span>
            </h2>

            <p>
              Revisit the conversations, scientific exchange and
              memorable moments of the 4th International Conference
              on Mathematical Analysis and Applications in Modelling.
            </p>
          </div>

          <div className="memories-grid">

            <a
              className="memory-card memory-camera-one"
              href="https://drive.google.com/drive/folders/1Ec_NRf5JCIxtyeP0W5mVcOg-p4T9jeD7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open ICMAAM 2026 Days 1 and 2 Camera 1 photo album"
            >
              <div className="memory-cover">
                <span className="memory-index">01</span>
                <span className="memory-cover-label">
                  THE BEGINNING
                </span>
                <span className="memory-cover-title">
                  Moments<br />in Focus.
                </span>
                <span className="memory-cover-date">
                  12–13 OCTOBER 2026
                </span>
              </div>

              <div className="memory-card-body">
                <div>
                  <span className="memory-category">
                    DAYS 01 &amp; 02
                  </span>
                  <h3>Camera 1 Collection</h3>
                  <p>
                    Explore the first photographic collection
                    from the opening two days.
                  </p>
                </div>
                <span className="memory-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>

            <a
              className="memory-card memory-camera-two"
              href="https://drive.google.com/drive/folders/1jRuUQ6sJ_w1jK5RPMvMGj5Jxp3DAB3xG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open ICMAAM 2026 Days 1 and 2 Camera 2 photo album"
            >
              <div className="memory-cover">
                <span className="memory-index">02</span>
                <span className="memory-cover-label">
                  BEYOND THE LECTERN
                </span>
                <span className="memory-cover-title">
                  Ideas Meet<br />Inspiration.
                </span>
                <span className="memory-cover-date">
                  12–13 OCTOBER 2026
                </span>
              </div>

              <div className="memory-card-body">
                <div>
                  <span className="memory-category">
                    DAYS 01 &amp; 02
                  </span>
                  <h3>Camera 2 Collection</h3>
                  <p>
                    Discover another perspective on the
                    conference and its scientific interactions.
                  </p>
                </div>
                <span className="memory-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>

            <a
              className="memory-card memory-day-three"
              href="https://drive.google.com/drive/folders/1wj_S8EREntdAF6XRXEJPAWQzGiNQeJo7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open ICMAAM 2026 Day 3 photo album"
            >
              <div className="memory-cover">
                <span className="memory-index">03</span>
                <span className="memory-cover-label">
                  THE FINAL CHAPTER
                </span>
                <span className="memory-cover-title">
                  Memories<br />That Remain.
                </span>
                <span className="memory-cover-date">
                  14 OCTOBER 2026
                </span>
              </div>

              <div className="memory-card-body">
                <div>
                  <span className="memory-category">
                    DAY 03
                  </span>
                  <h3>Day Three Collection</h3>
                  <p>
                    Revisit the final day's photographs and
                    the closing moments of ICMAAM 2026.
                  </p>
                </div>
                <span className="memory-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>

          </div>

          <div className="memories-footer">
            <span>
              4th International Conference · Jadavpur University
            </span>
            <span>12–14 October 2026</span>
          </div>

        </div>
      </section>

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
                  05 October 2026
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
