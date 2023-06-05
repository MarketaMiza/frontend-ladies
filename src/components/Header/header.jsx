import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./img/logo_02.svg";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <header className="header-container">
      <div className="site-logo_container">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <h4 className="header-title">frontend ladies</h4>
      <div className="container">
        <div className="navigation">
          <button className="nav-btn" onClick={toggleNav}>
            <i className="ri-menu-fill"></i>
          </button>
          <div className={`rollout-nav ${!navOpen ? "nav-closed" : ""}`}>
            <Link to="/">portfolia</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
