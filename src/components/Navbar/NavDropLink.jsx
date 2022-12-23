import { Link } from "react-router-dom";
import "./navbar-dropdown.scss";

const NavDropLink = (link) => {
  return (
    <Link to={link.href} className="navbar-dropdown-link">
      {link.name}
    </Link>
  );
};

export default NavDropLink;
