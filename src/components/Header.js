import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" >
        <img className="logo" src={logo} alt="Jaimin Vyas' Logo" />
      </NavLink>
      <NavLinks />
    </header>
  );
};

export default Header;
