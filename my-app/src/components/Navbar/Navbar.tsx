import React from "react";
import Logo from "../../assets/logo.svg";
import "./Navbar.scss";

interface INavbarProps {
  logoUrl: string;
}
const Navbar: React.FunctionComponent<INavbarProps> = ({ logoUrl }) => (
  <nav className="navbar">
    <a href={logoUrl} className="navbar navbar__logo">
      <img src={Logo} />
    </a>
  </nav>
);
export default Navbar;