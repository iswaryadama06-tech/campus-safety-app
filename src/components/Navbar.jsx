import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🛡️ Campus Safe
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/report">Report</Link>
        <Link to="/emergency">Emergency</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
}

export default Navbar;