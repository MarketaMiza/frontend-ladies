import React from "react";
import "./Project.css";

export const Project = (props) => {
  const { project_name, project_description, project_link } = props;

  return (
    <section className="project__container">
      <h1>Moje práce</h1>

      <div className="project__list">
        <a href={project_link}>{project_name}</a>
        <p>{project_description}</p>
      </div>
    </section>
  );
};
