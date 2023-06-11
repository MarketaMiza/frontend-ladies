import React from "react";
import "./Reference.css";

export const Reference = ({ reference, mentor }) => {
  return (
    <>
      {reference ? (
        <section className="reference__container">
          <h1 className="reference__title"> Reference</h1>
          <p className="reference__name">{mentor.join(", ")}</p>
          <h3 className="reference__text">{reference}</h3>
        </section>
      ) : (
        <h1>Reference</h1>
      )}
    </>
  );
};
