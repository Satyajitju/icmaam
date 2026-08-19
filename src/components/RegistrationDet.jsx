
import React from "react";

function RegistrationDet() {
  return (
    <section className="section">
      <div className="container">

        {/* -------- HEADER -------- */}
        <div className="section-header">
          <h2>Registration</h2>
          <p className="section-sub">
            Registration details for ICMAAM 2026. Participants are requested to
            complete the payment process before submitting the registration form.
          </p>
        </div>


        {/* -------- REGISTRATION DEADLINE -------- */}
        <div className="registration-deadline-banner">
          <span className="deadline-label">
            REGISTRATION DEADLINE
          </span>

          <strong>
            20 September 2026
          </strong>

          <p>
            Registration for ICMAAM 2026 will close on 20 September 2026.
          </p>
        </div>


        {/* -------- FEES -------- */}
        <div className="reg-grid">

          {/* International */}
          <div className="reg-card">
            <h3>International Participants</h3>

            <ul>
              <li>
                Faculty Members <span>$200</span>
              </li>

              <li>
                Faculty (Developing Countries) <span>$150</span>
              </li>

              <li>
                Students / Research Scholars <span>$100</span>
              </li>

              <li>
                Students (Developing Countries) <span>$75</span>
              </li>
            </ul>
          </div>


          {/* Indian */}
          <div className="reg-card highlight-card">
            <h3>Indian Participants</h3>

            <ul>
              <li>
                Faculty Members <span>₹4000</span>
              </li>

              <li>
                Students / Research Scholars <span>₹3000</span>
              </li>
            </ul>
          </div>


          {/* JU */}
          <div className="reg-card">
            <h3>Jadavpur University Participants</h3>

            <ul>
              <li>
                Faculty Members <span>₹3000</span>
              </li>

              <li>
                Students / Research Scholars <span>₹2000</span>
              </li>
            </ul>
          </div>

        </div>


        {/* -------- GST NOTICE -------- */}
        <div className="gst-notice">
          <strong>Important Notice</strong>
          <br />

          An additional <strong>18% GST</strong> is applicable on all
          registration categories.

          <br />

          Accommodation is not included in the registration fee and must
          be arranged separately by participants.
        </div>


        {/* -------- PAYMENT -------- */}
        <div className="reg-bank creative-bank">

          <h3>Online Payment Portal</h3>

          <p>
            Participants may pay the registration fee securely through the
            official Jadavpur University SBI Collect portal.
          </p>

          <a
            href="https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=7013663&categoryName=Registration-Fee-ICMAAM-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Pay Registration Fee
          </a>

          <p className="payment-note">
            After successful payment, kindly save the transaction receipt and
            upload the payment proof while completing the registration form.
          </p>

        </div>


        {/* -------- REGISTRATION PROCESS -------- */}
        <div className="registration-process">

          <h3>Registration Process</h3>

          <div className="process-grid">

            <div className="process-step">
              <strong>Step 1</strong>
              <p>Pay Registration Fee</p>
            </div>

            <div className="process-step">
              <strong>Step 2</strong>
              <p>Save Transaction Receipt</p>
            </div>

            <div className="process-step">
              <strong>Step 3</strong>
              <p>Complete Registration Form</p>
            </div>

            <div className="process-step">
              <strong>Step 4</strong>
              <p>Receive Confirmation</p>
            </div>

          </div>

        </div>


        {/* =====================================================
            ACCOMMODATION
        ===================================================== */}
        <div className="registration-accommodation">

          <div className="section-header">
            <h2>Accommodation</h2>

            <p className="section-sub">
              Participants are requested to make their own accommodation
              arrangements for the duration of ICMAAM 2026.
            </p>
          </div>


          {/* Important accommodation notice */}
          <div className="accommodation-notice">

            <h3>Important Information</h3>

            <p>
              The Organising Committee does <strong>not provide accommodation</strong>
              for participants and does not make accommodation bookings on
              behalf of participants.
            </p>

            <p>
              Participants may stay at Oasis Guest House or choose any other
              hotel, guest house, hostel, or accommodation facility according
              to their preference and convenience.
            </p>

            <p>
              Those who require accommodation at Oasis Guest House may contact
              the guest house directly for room availability, booking and
              other accommodation-related details.
            </p>

          </div>


          {/* Oasis Guest House */}
          <div className="guest-house-card">

            <div className="guest-house-header">

              <div>
                <span className="accommodation-label">
                  SUGGESTED ACCOMMODATION
                </span>

                <h3>
                  Oasis Guest House
                </h3>

                <p>
                  Lodging only
                </p>
              </div>


              <div className="guest-house-contact">

                <span>
                  Booking Contact
                </span>

                <a href="tel:+919830465345">
                  +91 98304 65345
                </a>

              </div>

            </div>


            {/* Room Options */}
            <div className="guest-room-grid">

              {/* Triple Deluxe */}
              <div className="guest-room-card">

                <h4>
                  Triple Bed Room
                </h4>

                <span className="room-category">
                  Deluxe Room
                </span>

                <p>
                  A.C. · Geyser · Tea / Coffee Kettle · 2 L Water Bottle
                  · Lift Available
                </p>

                <strong>
                  ₹2,500 + 5% GST
                </strong>

              </div>


              {/* Double Deluxe */}
              <div className="guest-room-card">

                <h4>
                  Double Bed Room
                </h4>

                <span className="room-category">
                  Deluxe Room
                </span>

                <p>
                  A.C. · Geyser · Tea / Coffee Kettle · 2 L Water Bottle
                  · Lift Available
                </p>

                <strong>
                  ₹2,000 + 5% GST
                </strong>

              </div>


              {/* Double Normal */}
              <div className="guest-room-card">

                <h4>
                  Double Bed Room
                </h4>

                <span className="room-category">
                  Normal Type
                </span>

                <p>
                  A.C. · Geyser · Stair access only
                </p>

                <strong>
                  ₹1,200 + 5% GST
                </strong>

              </div>


              {/* Sharing Toilet */}
              <div className="guest-room-card">

                <h4>
                  Double Bed Room
                </h4>

                <span className="room-category">
                  Sharing Toilet
                </span>

                <p>
                  A.C. · Geyser · Stair access only
                </p>

                <strong>
                  ₹1,000 + 5% GST
                </strong>

              </div>

            </div>


            {/* Direct Booking Notice */}
            <div className="guest-booking-notice">

              <strong>
                Direct Booking:
              </strong>

              <span>
                Participants interested in staying at Oasis Guest House
                should contact the guest house directly. Room availability,
                booking, payment and other stay-related arrangements are to
                be confirmed directly with the guest house.
              </span>

            </div>

          </div>

        </div>


        {/* -------- NOTES -------- */}
        <div className="reg-notes">

          <ul>

            <li>
              Registration fees are waived for plenary and invited speakers.
            </li>

            <li>
              Accommodation is not included in the registration fee.
            </li>

            <li>
              Participants are responsible for arranging and paying for
              their own accommodation.
            </li>

            <li>
              An additional 18% GST is applicable on all registration fees.
            </li>

            <li>
              Please retain the payment receipt for verification.
            </li>

          </ul>

        </div>


        {/* -------- REGISTRATION FORM -------- */}
        <div
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
          }}
        >

          <h3>
            Conference Registration Form
          </h3>

          <p className="section-sub">
            After completing the payment process, kindly fill out the official
            registration form and upload the payment receipt.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5a7p6wTBzcPMdRKa077_8w5yri26YEmBD2IYgFAGn9kcrVw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Complete Registration Form
          </a>

          <p
            style={{
              marginTop: "0.8rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            You will be redirected to the official ICMAAM 2026
            registration form.
          </p>

        </div>


        {/* -------- STATUS -------- */}
        <div className="reg-banner">
          ICMAAM 2026 Registration Portal Open
        </div>

      </div>
    </section>
  );
}

export default RegistrationDet;



