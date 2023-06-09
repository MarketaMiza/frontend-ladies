import React from "react";
import { Link } from "react-router-dom";
import "./mini.css";
import Photo from "./img/logo.jpg";

export const MiniPortfolio = (props) => {
  const { id, name, about } = props;

  return (
    <>
      <section className="mini-portfolio__container">
        <div className="portfolio-item">
          <img src={Photo} alt="" className="photo" />
          <h4 className="name">{name}</h4>
          <p className="description">{about}</p>

          {/* <Link to={`/portfolio/${id}`}>
                <button className="portfolio-btn">View Portfolio</button>
            </Link>  */}

          <Link
            to={{
              pathname: `/portfolios/${id}`,
            }}
            // state = { {idTest: id} }
          >
            <button className="portfolio-btn">
              View Portfolio
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
