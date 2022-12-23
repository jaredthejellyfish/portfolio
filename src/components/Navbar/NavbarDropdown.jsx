import "./navbar-dropdown.scss";
import NavDropLink from "./NavDropLink";

const NavbarDropdown = () => {
  return (
    <div className="navbar-dropdown-container">
      <NavDropLink name="HOME" href="/" />
      <hr className="solid"></hr>
      <NavDropLink name="ABOUT" href="/about" />
      <hr className="solid"></hr>
      <NavDropLink name="CONTACT" href="/contact" />
      <hr className="solid"></hr>
      <NavDropLink name="WORK" href="/work" />
    </div>
  );
};

export default NavbarDropdown;
