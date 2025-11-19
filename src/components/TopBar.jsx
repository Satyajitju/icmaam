// src/components/TopBar.jsx
import logo from "../assets/logo_ju.jpg"; 
function TopBar() {
  return (
    <div className="top-strip">
      <div className="top-strip-left">
        <img src={logo} alt="ICMAAM Logo" className="top-strip-logo" />
        <div className="top-strip-info">
          <span className="top-strip-date">12–14 October 2026</span>
          <span className="top-strip-location">Kolkata, India</span>
        </div>
      </div>

      <div className="top-strip-right">
        <div className="top-strip-title">
          4th International Conference on Mathematical Analysis and Applications in Modelling
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
