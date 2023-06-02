import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/Portfolio">Portfolia</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/About">O projektu</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/Contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <button className="header-menu-button" onClick={toggleMenu}>
        <img src="/assets/menu.svg" alt="menu" />
      </button>

      {isMenuOpen && (
        <nav className="header-mobile-nav">
          <ul className="header-mobile-nav-list">
            <li className="header-mobile-nav-item">
              <Link to="/About">About</Link>
            </li>

            <li className="header-mobile-nav-item">
              <Link to="/Portfolio">Portfolio</Link>
            </li>

            <li className="header-mobile-nav-item">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
