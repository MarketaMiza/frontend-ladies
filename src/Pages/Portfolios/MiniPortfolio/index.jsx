import React from "react";
import { Link } from "react-router-dom";    
import "./style.css";


const portfolio = [
    {
    id: 1,
    name: "Portfolio 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ult",

    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
    id: 2,
    name: "Portfolio 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ult",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
    },
];

export const MiniPortfolio = (props) => {
    const { name, description, github, technologies } = props;

    return (
        <>
        <h1>jsem male mini portfoli dlazdice</h1>
        <div className="portfolio-container">
            </div>
            <h2>{name}</h2> 
            <p>{description}</p>
            <a href={github}>Github</a> 
            <p>{technologies}</p>

            <Link to={`/portfolio/${portfolio.id}`}>
                <button>View Portfolio</button>
            </Link> 
        </>
    );
    }