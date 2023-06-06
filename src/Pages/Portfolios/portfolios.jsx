import React from "react";
import "./portfolios.css";
import { MiniPortfolio } from "./MiniPortfolio/mini";
// import { Link } from "react-router-dom";

// zkusebni databazicka
const portfolio = [
  {
    id: 1,
    name: "Mina z minova",
    description: "Jsem budouci programator a budu vás programovat",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Kačer z kačerova",
    description: "Jsem terminator a budu vás likvidovat",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    name: "Gedžitka z gedžitkova",
    description: "Jsem terminator a budu vás likvidovat",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    name: "Tralala z tralalova",

    description: "Jsem terminator a budu vás likvidovat",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    name: "Hopsasa z hopsasova",
    description: "Jsem terminator a budu vás likvidovat",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    name: "Portfolio 6",
    description: "Jsem terminator a budu vás likvidovat",

    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    name: "Portfolio 7",
    description: "Jsem terminator a budu vás likvidovat",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 8,
    name: "Portfolio 8",
    description: "Jsem terminator a budu vás likvidovat",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 9,
    name: "Portfolio 9",
    description: "Jsem terminator a budu vás likvidovat",
    url: "https://www.google.com",
    github: "https://www.github.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
    
];

export const Portfolios = () => {
  const portfolios = portfolio.map((portfolio) => (
    <MiniPortfolio
      key={portfolio.id}
      id={portfolio.id}
      name={portfolio.name}
      description={portfolio.description}
      github={portfolio.github}
      technologies={portfolio.technologies}
    />
  ));

  return (
    <>
      <section className="portfolio__container">{portfolios}</section>
    </>
  );
};
