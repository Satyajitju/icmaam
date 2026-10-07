import "./Highlight.css";

/*
  PDF lives in /public. %20 stands for the space in the file name.
*/
const ABSTRACT_PDF = "/Abstract_Book_Cover_Page%205.pdf";

function Medal({ symbol }) {
  return (
    <svg
      className="hl-medal"
      viewBox="0 0 96 120"
      role="img"
      aria-hidden="true"
    >
      {/* ribbon */}
      <path d="M30 0 h14 l10 44 h-14 z" fill="#8c6d2a" />
      <path d="M66 0 h-14 l-10 44 h14 z" fill="#b08d3c" />
      {/* medal */}
      <circle cx="48" cy="76" r="36" fill="#b08d3c" />
      <circle cx="48" cy="76" r="36" fill="none" stroke="#f3dc9a" strokeWidth="1.5" />
      <circle cx="48" cy="76" r="28" fill="none" stroke="#f3dc9a" strokeWidth="0.8" strokeDasharray="2 3" />
      <text
        x="48"
        y="90"
        textAnchor="middle"
        fontSize="40"
        fontFamily="'Newsreader', Georgia, serif"
        fill="#fff8e1"
      >
        {symbol}
      </text>
    </svg>
  );
}

function Highlights() {
  return (
    <section className="hl" id="abstract-book" aria-labelledby="hl-title">
      <div className="hl-inner">

        {/* ================= ABSTRACT BOOK ================= */}
        <div className="hl-book-row">

          {/* Book object */}
          <div className="hl-book-wrap">
            <div className="hl-book">
              <div className="hl-book-spine" />
              <div className="hl-book-cover">
                <svg className="hl-curves" viewBox="0 0 300 200" aria-hidden="true">
                  <path d="M0 150 C 40 40, 90 40, 130 110 S 220 190, 300 60" />
                  <path d="M0 170 C 50 70, 100 70, 140 125 S 230 195, 300 85" />
                  <path d="M0 190 C 60 100, 110 100, 150 140 S 240 200, 300 110" />
                </svg>

                <p className="hl-cover-conf">4th ICMAAM</p>
                <p className="hl-cover-title">Abstract Book</p>
                <p className="hl-cover-meta">
                  12–14 October 2026
                  <br />
                  Jadavpur University, Kolkata
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="hl-book-text">
            <h2 id="hl-title">The ICMAAM 2026 Abstract Book is out</h2>

            <p>
              Every invited talk, contributory presentation and Young
              Scientist Symposium abstract, in one volume. Read it online or
              keep a copy for the conference days.
            </p>

            <div className="hl-actions">
              <a
                href={ABSTRACT_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="hl-btn hl-btn-gold"
              >
                Read online
              </a>

              <a href={ABSTRACT_PDF} download className="hl-btn hl-btn-line">
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* ================= AWARDS ================= */}
        <div className="hl-awards">
          <h3 className="hl-awards-title">Awards at ICMAAM 2026</h3>

          <div className="hl-awards-grid">
            <article className="hl-award">
              <Medal symbol="∑" />
              <div>
                <h4>Top 3 Best Contributory Speakers</h4>
                <p>
                  Recognising the three most outstanding presentations
                  across the contributory sessions.
                </p>
              </div>
            </article>

            <article className="hl-award">
              <Medal symbol="∫" />
              <div>
                <h4>Best Speaker, Young Scientist Symposium</h4>
                <p>
                  For the most outstanding talk by an early-career researcher
                  at the Young Scientist Symposium.
                </p>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Highlights;
