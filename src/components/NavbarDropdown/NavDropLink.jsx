import "./navbar-dropdown.scss";

const NavDropLink = (link) => {
  return (
    <div className="navbar-dropdown-link">
      <a href={link.href}>{link.name}</a>
    </div>
  );
};

export default NavDropLink;
