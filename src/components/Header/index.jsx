import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./img/logo.jpg";

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
      <h4 className="header-title">Frontend Ladies</h4>
      <div className="container">
        <div className="navigation">
          <button className="nav-btn" onClick={toggleNav}>
            <i className="ri-menu-fill"></i>
          </button>
          <div className={`rollout-nav ${!navOpen ? "nav-closed" : ""}`}>
            <Link to="/">Portfolia</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
