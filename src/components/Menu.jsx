// src/components/Menu.jsx
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <header className="nav-shell">
      <div className="nav container">
        <div className="nav-left">
          <div className="nav-mark">
            <span className="nav-mark-ring" />
            <span className="nav-mark-text">ICMAAM</span>
          </div>
          <div className="nav-title">
            <div className="nav-title-main">ICMAAM 2026</div>
            <div className="nav-title-sub">
              4th International Conference on Mathematical Analysis &amp; Applications in Modelling
            </div>
          </div>
        </div>

        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/speakers">Speakers</NavLink>
          <NavLink to="/organization">Committee</NavLink>
          <NavLink to="/travel">Travel</NavLink>
          <NavLink to="/registration" className="nav-links-cta">
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
