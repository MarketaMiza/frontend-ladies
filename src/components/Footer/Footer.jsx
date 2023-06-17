import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container container-fluid p-4">
      <div className="row">
        <p className="footer-title col-4">
          Frontend Ladies, Czechitas Digitální akademie: Web
        </p>
        <p className="footer-text col-4">© 2023 Markéta Mížová</p>
        <p className="footer-link col-4">
          <a href="http://www.linkedin.com/in/m-mizova" target="blank">
            Kontakt</a>
        </p>
      </div>
    </footer>
  );
};
