import React, { Component } from "react";

export class ContactDet extends Component {
  render() {
    return (
      <section className="contact-section py-5">
        <div className="container">

          {/* Section Heading */}
          <div className="text-center mb-5">
            <div className="scientific-line mx-auto"></div>

            <h2 className="contact-title">
              Conference Contact
            </h2>

            <p className="contact-subtitle">
              For academic, registration, accommodation, and conference-related
              enquiries, please contact the appropriate coordinator below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="row g-4 justify-content-center">

            {/* Organizing Secretary */}
            <div className="col-lg-5 col-md-6">
              <div className="contact-card">

                <div className="card-accent"></div>

                <div className="contact-icon secretary-icon">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>

                <div className="contact-content">

                  <span className="contact-label">
                    ORGANIZING SECRETARY
                  </span>

                  <h4 className="contact-name">
                    Prof. Priti Kumar Roy
                  </h4>

                  <div className="contact-divider"></div>

                  <div className="contact-info">
                    <div className="info-row">
                      <i className="bi bi-envelope-fill"></i>
                      <a href="mailto:pritik.roy@jadavpuruniversity.in">
                        pritik.roy@jadavpuruniversity.in
                      </a>
                    </div>

                    <div className="info-row">
                      <i className="bi bi-telephone-fill"></i>
                      <a href="tel:+919432095603">
                        +91 9432095603
                      </a>
                    </div>
                  </div>

                  <div className="role-description">
                    <i className="bi bi-info-circle"></i>
                    <span>
                      Please contact the Organizing Secretary for special
                      or exceptional conference-related matters.
                    </span>
                  </div>

                </div>
              </div>
            </div>


            {/* Primary Contact */}
            <div className="col-lg-5 col-md-6">
              <div className="contact-card primary-card">

                <div className="card-accent"></div>

                {/* Recommended badge */}
                <div className="recommended-badge">
                  <i className="bi bi-star-fill"></i>
                  PRIMARY CONTACT
                </div>

                <div className="contact-icon primary-icon">
                  <i className="bi bi-person-badge-fill"></i>
                </div>

                <div className="contact-content">

                  <span className="contact-label">
                    PRIMARY CONTACT PERSON
                  </span>

                  <h4 className="contact-name">
                    Satyajit Mukherjee
                  </h4>

                  <div className="contact-divider"></div>

                  <div className="contact-info">

                    <div className="info-row">
                      <i className="bi bi-envelope-fill"></i>
                      <a href="mailto:satya.jumath@gmail.com">
                        satya.jumath@gmail.com
                      </a>
                    </div>

                    <div className="info-row">
                      <i className="bi bi-telephone-fill"></i>
                      <a href="tel:+918145589057">
                        +91 8145589057
                      </a>
                    </div>

                  </div>

                  <div className="role-description primary-description">
                    <i className="bi bi-chat-square-text-fill"></i>
                    <span>
                      For general enquiries, registration, accommodation,
                      abstract submission, and other conference-related
                      communication.
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>


          {/* Contact Guidance */}
          <div className="contact-guidance mt-5">

            <div className="guidance-icon">
              <i className="bi bi-diagram-3-fill"></i>
            </div>

            <div>
              <h5>Communication Guidance</h5>

              <p>
                For routine conference enquiries, please contact the
                <strong> Primary Contact Person</strong>. The Organizing
                Secretary may be contacted directly for special matters
                requiring the attention of the conference administration.
              </p>
            </div>

          </div>

        </div>


        {/* Scientific background elements */}
        <div className="scientific-bg bg-one"></div>
        <div className="scientific-bg bg-two"></div>

        {/* Component-specific CSS */}
        <style>{`

          .contact-section {
            position: relative;
            overflow: hidden;
            background:
              linear-gradient(
                135deg,
                #f8fbff 0%,
                #ffffff 50%,
                #f5f9ff 100%
              );
          }

          /* Subtle scientific grid */
          .contact-section::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(
                rgba(30, 80, 140, 0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(30, 80, 140, 0.035) 1px,
                transparent 1px
              );
            background-size: 35px 35px;
            pointer-events: none;
          }

          .container {
            position: relative;
            z-index: 2;
          }

          .scientific-line {
            width: 55px;
            height: 4px;
            border-radius: 10px;
            background: #174a7c;
            margin-bottom: 18px;
          }

          .contact-title {
            font-size: 2.2rem;
            font-weight: 700;
            letter-spacing: 0.3px;
            color: #17324d;
            margin-bottom: 10px;
          }

          .contact-subtitle {
            max-width: 720px;
            margin: auto;
            color: #68798b;
            font-size: 0.98rem;
            line-height: 1.7;
          }

          /* Contact Card */

          .contact-card {
            position: relative;
            height: 100%;
            overflow: hidden;
            background: rgba(255,255,255,0.96);
            border: 1px solid rgba(30,70,110,0.10);
            border-radius: 18px;
            padding: 35px 32px;
            box-shadow:
              0 12px 35px rgba(20,50,80,0.08);
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .contact-card:hover {
            transform: translateY(-7px);
            box-shadow:
              0 20px 45px rgba(20,50,80,0.14);
          }

          .card-accent {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: #174a7c;
          }

          .primary-card .card-accent {
            background: #2477a9;
          }

          /* Icon */

          .contact-icon {
            width: 65px;
            height: 65px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 27px;
            margin-bottom: 24px;
          }

          .secretary-icon {
            background: #eaf2fa;
            color: #174a7c;
          }

          .primary-icon {
            background: #e9f6f5;
            color: #18766f;
          }

          /* Typography */

          .contact-label {
            display: block;
            font-size: 0.72rem;
            font-weight: 700;
            letter-spacing: 1.6px;
            color: #718196;
            margin-bottom: 8px;
          }

          .contact-name {
            font-size: 1.45rem;
            font-weight: 700;
            color: #17324d;
            margin: 0;
          }

          .contact-divider {
            width: 42px;
            height: 2px;
            background: #174a7c;
            margin: 18px 0;
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 13px;
          }

          .info-row {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 0.92rem;
            color: #53677b;
          }

          .info-row i {
            width: 18px;
            color: #174a7c;
            font-size: 15px;
          }

          .info-row a {
            color: #3e5870;
            text-decoration: none;
            word-break: break-word;
            transition: color 0.2s ease;
          }

          .info-row a:hover {
            color: #174a7c;
            text-decoration: underline;
          }

          /* Description */

          .role-description {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            margin-top: 25px;
            padding: 14px;
            border-radius: 10px;
            background: #f4f7fa;
            color: #647587;
            font-size: 0.82rem;
            line-height: 1.6;
          }

          .role-description i {
            margin-top: 3px;
            color: #174a7c;
          }

          .primary-description i {
            color: #18766f;
          }

          /* Primary badge */

          .recommended-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 6px 10px;
            border-radius: 20px;
            background: #e9f6f5;
            color: #18766f;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.7px;
          }

          /* Guidance */

          .contact-guidance {
            position: relative;
            display: flex;
            align-items: flex-start;
            gap: 18px;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            padding: 22px 25px;
            background: rgba(255,255,255,0.9);
            border: 1px solid rgba(30,70,110,0.09);
            border-left: 4px solid #174a7c;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(20,50,80,0.05);
          }

          .guidance-icon {
            min-width: 45px;
            height: 45px;
            border-radius: 12px;
            background: #eaf2fa;
            color: #174a7c;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
          }

          .contact-guidance h5 {
            margin: 0 0 5px;
            color: #17324d;
            font-size: 1rem;
            font-weight: 700;
          }

          .contact-guidance p {
            margin: 0;
            color: #68798b;
            font-size: 0.86rem;
            line-height: 1.65;
          }

          /* Decorative scientific circles */

          .scientific-bg {
            position: absolute;
            border: 1px solid rgba(23,74,124,0.08);
            border-radius: 50%;
            pointer-events: none;
          }

          .bg-one {
            width: 300px;
            height: 300px;
            right: -150px;
            top: 50px;
          }

          .bg-two {
            width: 200px;
            height: 200px;
            left: -100px;
            bottom: 40px;
          }

          /* Mobile */

          @media (max-width: 768px) {

            .contact-section {
              padding-top: 40px !important;
              padding-bottom: 40px !important;
            }

            .contact-title {
              font-size: 1.8rem;
            }

            .contact-subtitle {
              font-size: 0.9rem;
            }

            .contact-card {
              padding: 28px 24px;
            }

            .recommended-badge {
              position: static;
              width: fit-content;
              margin-bottom: 18px;
            }

            .contact-guidance {
              padding: 18px;
            }

          }

        `}</style>
      </section>
    );
  }
}

export default ContactDet;
