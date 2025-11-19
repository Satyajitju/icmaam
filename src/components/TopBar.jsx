// src/components/TopBar.jsx

function TopBar() {
  return (
    <div className="top-strip">
      <div className="top-strip-left">
        <img
          src="https://static.wixstatic.com/media/485cee_46bfcf61e1fe4cc78cf03373aaef256a~mv2.gif"
          alt="Conference Logo"
          className="top-strip-logo"
        />
        <div className="top-strip-info">
          <span className="top-strip-date">9–11 October 2023</span>
          <span className="top-strip-location">Kolkata, India</span>
        </div>
      </div>

      <div className="top-strip-right">
        <div className="top-strip-title">
          2nd International Conference on Mathematical Analysis and Applications in Modelling
        </div>
        <div className="top-strip-sub">(ICMAAM 2023)</div>
        <div className="top-strip-org">
          Organised by the Department of Mathematics &amp; Centre for Mathematical Biology and Ecology, Jadavpur University
        </div>
      </div>
    </div>
  );
}

export default TopBar;
