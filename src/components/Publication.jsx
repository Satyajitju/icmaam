// src/components/Publication.jsx
import React from "react";

function Publication() {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>Conference Publications</h2>
          <p className="section-sub">
            ICMAAM 2026 offers publication opportunities through peer-reviewed
            Springer Book Proceedings and selected reputed journals.
          </p>
        </div>

        {/* Publication Opportunities */}
        <div className="pub-grid">
          <div className="pub-card">
            <h3 className="pub-title">Springer Book Proceedings</h3>
            <p className="pub-text">
              Full-length papers presented at ICMAAM 2026 will undergo a rigorous
              peer-review process. Selected papers will be published in the{" "}
              <strong>Springer Book Series (Proposal Approved)</strong>.
            </p>
          </div>

          <div className="pub-card">
            <h3 className="pub-title">Journal Publications</h3>
            <p className="pub-text">
              Selected peer-reviewed papers will be published in special issues of
              the following journals:
            </p>
            <ul className="pub-list">
              <li>
                <a
                  href="http://biomathsociety.in/ijbsb.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  International Journal of Biomathematics and System Biology
                </a>
              </li>
              <li>
                <a
                  href="https://www.worldcat.org/title/875137801"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bulletin of Calcutta Mathematical Society / Journal of Calcutta
                  Mathematical Society
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Instructions */}

        <div className="pub-card-wide">
          <h3 className="pub-title">Submission Guidelines</h3>
          <p className="pub-text">
            Authors must ensure that submitted papers are original and not under
            consideration elsewhere. Papers may need to be revised based on the
            reviewers’ comments. The decision of the reviewers and editors will be
            final.
          </p>
        </div>

        {/* Call for Papers */}
        <div className="pub-card-wide">
          <h3 className="pub-title">Call for Papers</h3>
          <p className="pub-text">
            Papers within the conference areas of interest (“Aims and Scopes”) are
            invited for ICMAAM 2026. Authors are requested to submit only the{" "}
            <strong>abstract and title</strong> before the conference.
            <br />
            <br />
            Send submissions to:
            <br />
            <a href="mailto:icmaam2026@gmail.com">icmaam2026@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Publication;
