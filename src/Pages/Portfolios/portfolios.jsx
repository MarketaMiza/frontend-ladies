import React, { useState, useEffect } from "react";
import "./portfolios.css";
import { MiniPortfolio } from "./MiniPortfolio/Mini";

// import { Link } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";

export const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient(
      process.env.REACT_APP_SUPABASE_URL,
      process.env.REACT_APP_SUPABASE_KEY
    );
    supabase
      .from("individual_data")
      .select("*")
      .then((response) => {
        setPortfolios(response.data);
        setLoading(false);
      });
  }, []);

  const mini_portfolios = portfolios.map((portfolio) => (
    <MiniPortfolio
      key={portfolio.id}
      id={portfolio.id}
      photo={portfolio.photo}
      name={portfolio.name}
      about={portfolio.about}
      link_github={portfolio.link_github}
      link_linkedin={portfolio.link_linkedin}
      technical_skills={portfolio.technical_skills}
    />
  ));

  return (
    <>
  
      <section className="portfolio__containe container">
        <div className="row gy-5">
        {loading ? <h1>Loading...</h1> : mini_portfolios}
        </div>
      </section>
    </>
  );
};
