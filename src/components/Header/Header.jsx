import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/img/logo_02.svg";

export const Header = () => {
  const location = useLocation();
  const isPortfolio = location.pathname === "/" ? "" : "is-portfolio";

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <header
      className={[
        "header-container",
        "container-fluid",
        "p-4",
        isPortfolio,
      ].join(" ")}
    >
      <div className="site-logo_container">
        <img className="logo" src={Logo} alt="logo" />
        <h4 className="header-title">frontend ladies</h4>
      </div>

      <Link className="header-link" to="/">
        portfolia
      </Link>

      <div className="header-link-pic" onClick={handleNavigate}>
     
      <i className="ri-arrow-left-circle-fill"></i>
      </div>
    </header>
  );
};
