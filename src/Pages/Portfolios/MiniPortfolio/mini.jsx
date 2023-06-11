import React, {useState, useEffect} from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import "./mini.css";
import Placeholder from "./img/logo.jpg";

export const MiniPortfolio = (props) => {
  const { id,photo, name, about } = props;


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
    <>
     <div className="col-xl-4 col-md-6 p-2">
        <div className="portfolio-item">
          <div className="photo-container">
          <img src={url ? url : Placeholder} alt="" className="photo" />
            </div>
          <h4 className="name">{name}</h4>
          <p className="description">{about}</p>

          <Link
            to={{
              pathname: `/portfolios/${id}`,
            }}
            // state = { {idTest: id} }
          >
            <button className="portfolio-btn">
              Více o mně
            </button>
          </Link>
        </div>
        </div>
    
    </>
  );
};
