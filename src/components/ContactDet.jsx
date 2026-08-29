import React, { Component } from "react";

export class ContactDet extends Component {
  render() {
    return (
      <section className="contact-section py-5">
        <div className="container">

          {/* ================= SECTION HEADER ================= */}
          <div className="text-center mb-5">

            <div className="scientific-line mx-auto"></div>

            <h2 className="contact-title">
              Conference Contact
            </h2>

            <p className="contact-subtitle">
              For academic, registration, accommodation, and
              conference-related enquiries, please contact the
              appropriate coordinator below.
            </p>

          </div>


          {/* ================= CONTACT CARDS ================= */}
          <div className="row g-4 justify-content-center">

            {/* ==================================================
                ORGANIZING SECRETARY
            ================================================== */}
            <div className="col-lg-5 col-md-6">

              <div className="contact-card">

                <div className="card-accent"></div>

                {/* Academic SVG Icon */}
                <div className="contact-icon secretary-icon">

                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >

                    {/* Graduation Cap */}
                    <path
                      d="M2.5 9.5L12 4L21.5 9.5L12 15L2.5 9.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M6 12V16.2C6 18.3 8.7 20 12 20C15.3 20 18 18.3 18 16.2V12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                    <path
                      d="M21.5 9.5V14.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>


                <div className="contact-content">

                  <span className="contact-label">
                    ORGANIZING SECRETARY
                  </span>

                  <h4 className="contact-name">
                    Prof. Priti Kumar Roy
                  </h4>

                  <div className="contact-divider"></div>


                  {/* Contact Information */}
                  <div className="contact-info">

                    {/* Email */}
                    <div className="info-row">

                      <svg
                        className="info-svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >

                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M4 7L12 13L20 7"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                      </svg>

                      <a href="mailto:pritik.roy@jadavpuruniversity.in">
                        pritik.roy@jadavpuruniversity.in
                      </a>

                    </div>


                    {/* Phone */}
                    <div className="info-row">

                      <svg
                        className="info-svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >

                        <path
                          d="M6.5 3.5H9L10.5 8L8.5 9.5C9.4 11.5 11 13.1 13 14L14.5 12L19 13.5V16C19 17.7 17.7 19 16 19C9.9 19 5 14.1 5 8C5 6.3 6.3 5 8 5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                      </svg>

                      <a href="tel:+919432095603">
                        +91 9432095603
                      </a>

                    </div>

                  </div>


                  {/* Special Issues */}
                  <div className="role-description">

                    <svg
                      className="description-svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >

                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <path
                        d="M12 10.5V16"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <circle
                        cx="12"
                        cy="7.5"
                        r="0.8"
                        fill="currentColor"
                      />

                    </svg>

                    <span>
                      Please contact the Organizing Secretary for
                      special or exceptional conference-related matters.
                    </span>

                  </div>

                </div>

              </div>

            </div>


            {/* ==================================================
                PRIMARY CONTACT
            ================================================== */}
            <div className="col-lg-5 col-md-6">

              <div className="contact-card primary-card">

                <div className="card-accent"></div>


                {/* Primary Contact Badge */}
                <div className="recommended-badge">

                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >

                    <path
                      d="M12 3L14.8 8.7L21 9.6L16.5 14L17.6 20.2L12 17.2L6.4 20.2L7.5 14L3 9.6L9.2 8.7L12 3Z"
                      fill="currentColor"
                    />

                  </svg>

                  PRIMARY CONTACT

                </div>


                {/* Person SVG Icon */}
                <div className="contact-icon primary-icon">

                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >

                    <circle
                      cx="12"
                      cy="8"
                      r="3.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M5 20C5.8 16.5 8.2 14.5 12 14.5C15.8 14.5 18.2 16.5 19 20"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>


                <div className="contact-content">

                  <span className="contact-label">
                    PRIMARY CONTACT PERSON
                  </span>

                  <h4 className="contact-name">
                    Satyajit Mukherjee
                  </h4>

                  <div className="contact-divider"></div>


                  {/* Contact Information */}
                  <div className="contact-info">

                    {/* Email */}
                    <div className="info-row">

                      <svg
                        className="info-svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >

                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                        <path
                          d="M4 7L12 13L20 7"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                      </svg>

                      <a href="mailto:satya.jumath@gmail.com">
                        satya.jumath@gmail.com
                      </a>

                    </div>


                    {/* Phone */}
                    <div className="info-row">

                      <svg
                        className="info-svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >

                        <path
                          d="M6.5 3.5H9L10.5 8L8.5 9.5C9.4 11.5 11 13.1 13 14L14.5 12L19 13.5V16C19 17.7 17.7 19 16 19C9.9 19 5 14.1 5 8C5 6.3 6.3 5 8 5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                      </svg>

                      <a href="tel:+918145589057">
                        +91 8145589057
                      </a>

                    </div>

                  </div>


                  {/* General Enquiries */}
                  <div className="role-description primary-description">

                    <svg
                      className="description-svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >

                      <path
                        d="M4 5.5C4 4.7 4.7 4 5.5 4H18.5C19.3 4 20 4.7 20 5.5V15.5C20 16.3 19.3 17 18.5 17H10L6 20V17H5.5C4.7 17 4 16.3 4 15.5V5.5Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M8 8H16"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                      <path
                        d="M8 12H14"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />

                    </svg>

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


          {/* ==================================================
              COMMUNICATION GUIDANCE
          ================================================== */}
          <div className="contact-guidance mt-5">

            <div className="guidance-icon">

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >

                {/* Network */}
                <circle
                  cx="12"
                  cy="5"
                  r="2.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <circle
                  cx="6"
                  cy="17"
                  r="2.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <circle
                  cx="18"
                  cy="17"
                  r="2.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <path
                  d="M10.5 6.8L7.5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <path
                  d="M13.5 6.8L16.5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <path
                  d="M8.2 17H15.8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

              </svg>

            </div>


            <div>

              <h5>
                Communication Guidance
              </h5>

              <p>
                For routine conference enquiries, please contact the{" "}
                <strong>Primary Contact Person</strong>. The Organizing
                Secretary may be contacted directly for special matters
                requiring the attention of the conference administration.
              </p>

            </div>

          </div>

        </div>


        {/* ==================================================
            SCIENTIFIC BACKGROUND
        ================================================== */}

        <div className="scientific-bg bg-one"></div>
        <div className="scientific-bg bg-two"></div>


        {/* ==================================================
            COMPONENT CSS
        ================================================== */}

        <style>{`

          /* ================================================
             MAIN SECTION
          ================================================= */

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


          /* ================================================
             SCIENTIFIC GRID
          ================================================= */

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


          /* ================================================
             HEADER
          ================================================= */

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


          /* ================================================
             CONTACT CARD
          ================================================= */

          .contact-card {

            position: relative;

            height: 100%;

            overflow: hidden;

            background: rgba(255,255,255,0.96);

            border: 1px solid rgba(30,70,110,0.10);

            border-radius: 18px;

            padding: 32px;

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


          /* Top accent */

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


          /* ================================================
             LARGE ICON
          ================================================= */

          .contact-icon {

            width: 62px;

            height: 62px;

            border-radius: 16px;

            display: flex;

            align-items: center;

            justify-content: center;

            margin-bottom: 21px;

            transition:
              transform 0.3s ease;
          }


          .contact-card:hover .contact-icon {

            transform: translateY(-2px);
          }


          .secretary-icon {

            background: #eaf2fa;

            color: #174a7c;
          }


          .primary-icon {

            background: #e9f6f5;

            color: #18766f;
          }


          /* ================================================
             LABELS
          ================================================= */

          .contact-label {

            display: block;

            font-size: 0.72rem;

            font-weight: 700;

            letter-spacing: 1.6px;

            color: #718196;

            margin-bottom: 8px;
          }


          .contact-name {

            font-size: 1.43rem;

            font-weight: 700;

            color: #17324d;

            margin: 0;
          }


          .contact-divider {

            width: 42px;

            height: 2px;

            background: #174a7c;

            margin: 17px 0;
          }


          /* ================================================
             CONTACT INFORMATION
          ================================================= */

          .contact-info {

            display: flex;

            flex-direction: column;

            gap: 13px;
          }


          .info-row {

            display: flex;

            align-items: center;

            gap: 11px;

            font-size: 0.91rem;

            color: #53677b;
          }


          .info-svg {

            width: 18px;

            height: 18px;

            flex-shrink: 0;

            color: #174a7c;
          }


          .info-row a {

            color: #3e5870;

            text-decoration: none;

            word-break: break-word;

            transition:
              color 0.2s ease;
          }


          .info-row a:hover {

            color: #174a7c;

            text-decoration: underline;
          }


          /* ================================================
             INFORMATION BOX
          ================================================= */

          .role-description {

            display: flex;

            gap: 10px;

            align-items: flex-start;

            margin-top: 23px;

            padding: 13px 14px;

            border-radius: 10px;

            background: #f4f7fa;

            color: #647587;

            font-size: 0.81rem;

            line-height: 1.6;
          }


          .description-svg {

            width: 19px;

            height: 19px;

            flex-shrink: 0;

            margin-top: 1px;

            color: #174a7c;
          }


          .primary-description .description-svg {

            color: #18766f;
          }


          /* ================================================
             PRIMARY CONTACT BADGE
          ================================================= */

          .recommended-badge {

            position: absolute;

            top: 18px;

            right: 18px;

            display: inline-flex;

            align-items: center;

            gap: 5px;

            padding: 6px 10px;

            border-radius: 20px;

            background: #e9f6f5;

            color: #18766f;

            font-size: 0.61rem;

            font-weight: 700;

            letter-spacing: 0.7px;
          }


          /* ================================================
             GUIDANCE BOX
          ================================================= */

          .contact-guidance {

            position: relative;

            display: flex;

            align-items: flex-start;

            gap: 17px;

            max-width: 1000px;

            margin-left: auto;

            margin-right: auto;

            padding: 21px 24px;

            background: rgba(255,255,255,0.9);

            border: 1px solid rgba(30,70,110,0.09);

            border-left: 4px solid #174a7c;

            border-radius: 12px;

            box-shadow:
              0 8px 25px rgba(20,50,80,0.05);
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


          .contact-guidance strong {

            color: #17324d;
          }


          /* ================================================
             DECORATIVE MATHEMATICAL CIRCLES
          ================================================= */

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


          /* ================================================
             TABLET
          ================================================= */

          @media (max-width: 992px) {

            .contact-card {

              padding: 28px;
            }

          }


          /* ================================================
             MOBILE
          ================================================= */

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

              padding: 0 10px;
            }


            .contact-card {

              padding: 27px 23px;
            }


            .recommended-badge {

              position: static;

              width: fit-content;

              margin-bottom: 17px;
            }


            .contact-icon {

              width: 58px;

              height: 58px;
            }


            .contact-guidance {

              padding: 18px;

              gap: 13px;
            }


            .guidance-icon {

              min-width: 40px;

              height: 40px;
            }


            .contact-guidance p {

              font-size: 0.82rem;
            }

          }


          /* ================================================
             SMALL MOBILE
          ================================================= */

          @media (max-width: 480px) {

            .contact-title {

              font-size: 1.65rem;
            }


            .contact-name {

              font-size: 1.3rem;
            }


            .info-row {

              font-size: 0.84rem;
            }


            .role-description {

              font-size: 0.78rem;
            }

          }

        `}</style>

      </section>
    );
  }
}

export default ContactDet;
