import React, { useEffect, useState } from "react";
import "./about.css";
// import {MarketaPhoto} from "../../../../../assets/photos/MarketaPhoto.jpg"
import { createClient } from "@supabase/supabase-js";

export const About = (props) => {
  console.log(props);
  const { photo, name, about, link_github, link_linkedin } = props;
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
        console.log(response.data)
        if ((response.data)) {
          const uri = URL.createObjectURL
          (response.data)
          
          setUrl(uri);
        };

        // console.log(response.data)
      });
  }, []);

  return (
    <div className="about__container">
      <div className="about__photo">
        {url ? <img src={url} alt="Marketa" /> : null}
      </div>

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
