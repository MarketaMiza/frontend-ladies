import React, { useEffect, useState } from "react";
import "./About.css";
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
        console.log(response.data);
        if (response.data) {
          const uri = URL.createObjectURL(response.data);

          setUrl(uri);
        }
      });
  }, []);

  return (
    <div className="about__container row">
      <div className="col-3">
        <div className="about__photo">
          {url ? <img src={url} alt="Marketa" /> : null}
        </div>
      </div>

      <div className="about__description col-9">
        <div className="about__text">
          <h1>{name}</h1>
          <p>{about}</p>
        </div>

        <div className="about__contact">
          <a href={link_github} target="_blank" rel="noreferrer"><i className="ri-github-fill" ></i></a>
          <a href={link_linkedin} target="_blank" rel="noreferrer"><i className="ri-linkedin-box-fill" ></i></a>
        </div>
      </div>
    </div>
  );
};
