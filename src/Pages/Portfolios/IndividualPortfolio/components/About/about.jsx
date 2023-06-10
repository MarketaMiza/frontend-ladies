import React from "react";
import "./about.css";

export const About = (props) => {
    const { name, about, link_github, link_linkedin } = props;
  return (
    <div className="about__container">
      <div className="about__photo"></div>

      <div className="about__description">

      <div className="about__text">
        <h1>{name}</h1>
        <p>{about}</p>
      </div>

      <div className="about__contact">
        <a href={link_github}>GitHub</a>
        <a href={link_linkedin}>LinkedIn</a>
      </div>
      </div>

    </div>
  );
};
