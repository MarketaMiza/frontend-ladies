import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container container-fluid p-4">
      <div className="row">
        <p className="footer-title col-4">
          <a
            className="footer-link"
            href="https://www.czechitas.cz/kurzy/digitalni-akademie-web"
            target="blank"
          >
            Czechitas Digitální akademie: Web
          </a>
        </p>
        <p className="footer-text col-4">© 2023 Markéta Mížová</p>
        <p className="footer-contact col-4">
          <a href="http://www.linkedin.com/in/m-mizova" target="blank">
            Kontakt
          </a>
        </p>
      </div>
    </footer>
  );
};
