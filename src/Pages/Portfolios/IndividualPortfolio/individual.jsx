import React, { useState, useEffect } from "react";
import "./individual.css";
import { useParams } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";
import { About } from "./components/About/about.jsx";
import { Skills } from "./components/Skills/Skills";
import { Project } from "./components/Project/Project";
import { Reference } from "./components/Reference/Reference";

// import { Link } from "react-router-dom";

export const IndividualPortfolio = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState();
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
        setLoading(false);
        setPortfolio(
          response.data.find((portfolio) => portfolio.id === parseInt(id))
        );
        // console.log(response.data.find((portfolio) => portfolio.id === id));
        console.log(id);
      });
  }, []);

  return (
    <>
      <section className="individual__container">
        {portfolio ? (
          <>
            <About
              name={portfolio.name}
              photo={portfolio.photo}
              about={portfolio.about}
              link_github={portfolio.link_github}
              link_linkedin={portfolio.link_linkedin}
            />

            <Skills technical_skills={portfolio.technical_skills} />

            <Project
              project_link={portfolio.project_link}
              project_name={portfolio.project_name}
              project_description={portfolio.project_description}
            />

            <Reference 
            reference={portfolio.reference} 
            mentor={portfolio.mentor} />
          </>
        ) : (
          <h1>načítám se</h1>
        )}
      </section>
    </>
  );
};
