import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import "./Mini.css";
import Placeholder from "./img/logo.jpg";

export const MiniPortfolio = (props) => {
  const { id, photo, name, about } = props;

  const [url, setUrl] = useState();

  useEffect(() => {
    const supabase = createClient(
      process.env.REACT_APP_SUPABASE_URL,
      process.env.REACT_APP_SUPABASE_KEY
    );

    supabase.storage
      .from("public/photos")
      .download(`./${photo}`)
      .then((response) => {
        if (response.data) {
          const uri = URL.createObjectURL(response.data);

          setUrl(uri);
        }
      });
  }, []);

  return (
    <>
      <div className="col-xl-4 col-md-6 p-2">
        <Link
          target="blank"
          to={{
            pathname: `/portfolios/${id}`,
          }}
        >
          <div className="portfolio-item">
            <figure className="photo-container">
              <img src={url ? url : Placeholder} alt="" className="photo" />
            </figure>
            <h4 className="name">{name}</h4>
            <p className="description">{about}</p>

            <button className="portfolio-btn">Více o mně</button>
          </div>
        </Link>
      </div>
    </>
  );
};
