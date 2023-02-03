import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/toit-logo.png";

function Header() {
  return (
    <div className="header">
      <header
        className="header-bg relative"
        
      >
        <div className="header-blackshade absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
        <Navbar className="z-10" />
        <div className="header-main grid justify-center justify-items-center z-10">
          <img className="w-24 h-40" src={logo} alt="mainlogo" />
          <h1 className="header-toit">TOIT</h1>
          <h1 className="header-beer">BEER</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
