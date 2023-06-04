import React from "react";
import "./style.css";
import { MiniPortfolio } from "./MiniPortfolio";
import { Link } from "react-router-dom";

export const Portfolios = () => {
  return (
    <div className="portfolio-container">
      <h1>Portfolia</h1>
      <div className="portfolio-item">
        <p>Zde budou dlazdice na vsechna portfolia:</p>
       <Link to="/portfolio"><MiniPortfolio 
       id="1"
        name="Portfolio 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ult"
        github="https://www.github.com"
        technologies={["HTML", "CSS", "JavaScript"]}
        
       /></Link> 
      </div>
    </div>
  );
};
