import React from "react";
import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";

function Header() {
  return (
    <header>
      <h1>devfinder</h1>
      <div className="theme-toggler">
        <span>LIGHT</span>
        <img src={sunIcon} />
      </div>
    </header>
  );
}

export default Header;
