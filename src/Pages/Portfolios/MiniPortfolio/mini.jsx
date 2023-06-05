import React from "react";
import { Link } from "react-router-dom";    
import "./mini.css";
import Photo from "./img/logo.jpg";

// nepropisuje se to!!! OPRAVIT
const portfolio = [
    {
    id: 1,
    name: "Mina z minova",
    description: "Jsem budouci programator a budu vás programovat",

    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
    },

    {
    id: 2,
    name: "Portfolio 2",
    description: "Jsem terminator a budu vás likvidovat",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
    },
];

export const MiniPortfolio = (props) => {
    const { name, description } = props;

    return (
        <>
        <section className="mini-portfolio__container">
            <div className="portfolio-item">
            <img src={Photo} alt="" className="photo" />
            <h4 className="name">{name}</h4> 
            <p className="description">{description}</p>

            <Link to={`/portfolio/${portfolio.id}`}>
                <button className="portfolio-btn">View Portfolio</button>
            </Link> 
            </div>
        </section>
        </>
    );
    }