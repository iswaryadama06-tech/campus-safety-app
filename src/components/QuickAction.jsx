import { Link } from "react-router-dom";

function QuickAction({ icon, title }) {
  return (
    <Link to="/emergency" className="quick-action">
      <span className="quick-icon">{icon}</span>
      <span>{title}</span>
    </Link>
  );
}

export default QuickAction;