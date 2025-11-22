// src/components/TopBar.jsx
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <div className="top-strip">
      {/* LEFT SECTION */}
      <div className="top-strip-left">

        {/* Clickable Logo */}
        <NavLink to="/">
          <img
            src="/logo_JU.jpeg"
            alt="ICMAAM Logo"
            className="top-strip-logo"
            style={{ cursor: "pointer" }}
          />
        </NavLink>

        <div className="top-strip-info">
          <span className="top-strip-date">12–14 October 2026</span>
          <span className="top-strip-location">Kolkata, India</span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="top-strip-right">
        <div className="top-strip-title">
          4<sup>th</sup> International Conference on Mathematical Analysis and Applications in Modelling
        </div>
        <div className="top-strip-sub">(ICMAAM 2026)</div>
        <div className="top-strip-org">
          Organised by the Department of Mathematics &amp; Centre for Mathematical Biology and Ecology,
          Jadavpur University
        </div>
      </div>
    </div>
  );
}

export default TopBar;
