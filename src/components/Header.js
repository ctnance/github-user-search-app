import React from "react";
import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";

function Header() {
  return (
    <header className="header">
      <h1 className="header--title">devfinder</h1>
      <div className="header--theme-toggler">
        <span>LIGHT</span>
        <img src={sunIcon} />
      </div>
    </header>
  );
}

export default Header;
