import React, { useState } from "react";
import logo from "../assets/logo.png";
import vector from "../assets/vector.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-menu flex items-center gap-2">
        <img src={logo} alt="logo" />
        <p
          className="logo-menu text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </p>
      </div>

      <div
        className={
          menuOpen ? "menu-content  lg:flex " : "menu-content hidden lg:flex "
        }
      >
        <ul className="navbar-ul">
          <li className="navbar-li">kudix</li>
          <li className="navbar-li">Reservation</li>
          <li className="navbar-li">brewery tour</li>
          <button className="navbar-li-button flex items-center gap-3">
            Find My Beer <img src={vector} alt="" />
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
