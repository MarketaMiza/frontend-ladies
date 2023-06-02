import React from "react";
import "./style.css";
import { IndividualPortfolio } from "./IndividualPortfolio";

export const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="portfolio-item">
        <IndividualPortfolio />
      </div>
    </div>
  );
};
