// src/components/Footer.jsx
import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">
          <h3>ICMAAM 2026</h3>
          <p>
            4<sup>th</sup> International Conference on Mathematical Analysis and
            Applications in Modelling<br />
            12–14 October 2026 • Jadavpur University
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/organization">Organisation</a></li>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/travel">Travel</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="footer-social-row">
            <SocialIcon
              url="https://twitter.com/icmaam2018"
              bgColor="#ffffff10"
              fgColor="#ffffff"
              style={{ height: 38, width: 38 }}
            />
            <SocialIcon
              url="mailto:icmaam2026@gmail.com"
              bgColor="#ffffff10"
              fgColor="#ffffff"
              style={{ height: 38, width: 38 }}
            />
          </div>
        </div>
      </div>

      {/* Bottom credits */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Department of Mathematics, Jadavpur University
        </p>
        <p className="footer-credits">
          Designed & Developed by <strong>Pulak Kumar Ghosh</strong> (CSE, JU) and{" "}
          <strong>Satyajit Mukherjee</strong> (Mathematics, JU)
        </p>
      </div>
    </footer>
  );
}

export default Footer;
