import React from "react";
import "./individual.css";
import { useParams } from 'react-router-dom';

// import { Link } from "react-router-dom";

const portfolio = {
  id: 1,
  name: "Mina z minova",
  description: "Jsem budouci programator a budu vás programovat",
  url: "https://www.google.com",
  github: "https://www.github.com",
  technologies: ["HTML", "CSS", "JavaScript"],
}

export const IndividualPortfolio = () => {
  const { id } = useParams();
  console.log(id);
  const { name, description } = portfolio;
  return (
    <>
      <main className="box">
        <section className="home" id="home">
          <div className="home__box box grid">
            <img
              className="home__img"
              src="img /MM_photo.png"
              alt="Marketa fotka"
            />
            <div className="home__data">
              <h1 className="home__name">{name}</h1>
              <p className="home__work">
                <strong> Budoucí Junior Frontend Developer </strong>
              </p>
              <p className="home__work">
                <strong> {description} </strong>
              </p>
              <div className="home__socials">
                {/* <a
                 className="home__social-link"
                  href="https://ie.linkedin.com/in/m-mizova?trk=profile-badge"
                  target="_blank"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a
                 className="home__social-link"
                  href="https://github.com/MarketaMiza"
                  target="_blank"
                >
                  <i className="ri-github-fill"></i>
                </a> */}
              </div>
            </div>
          </div>
        </section>

        <section className="hello section box">
          <h2 className="section__title">O mě</h2>
          <p className="hello__details text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, consequuntur illum! Iusto vel ut quaerat eligendi
            maiores quos, id voluptatem, blanditiis molestiae laboriosam autem
            dolorem provident? Sequi dignissimos accusamus exercitationem.
          </p>
          <a
            href="./img/Marketa_resume_2023-05.pdf"
            className="button button--flex text-sm"
          >
            <i className="ri-download-2-fill"></i> DOWNLOAD CV
          </a>
        </section>

        {/* SKILLS */}
        <section className="skills section box" id="skills">
          <h2 className="section__title">Technické dovednosti</h2>
          <div className="skills__box grid">
            <div className="icon__box">
              <img
                className="skills__icon"
                src="./icons/HTML5.svg"
                alt="HTML"
              />
            </div>
            <div className="icon__box">
              <img className="skills__icon" src="./icons/CSS3.svg" alt="CSS" />
            </div>
            <div className="icon__box">
              <img
                className="skills__icon"
                src="./icons/js.svg"
                alt="JavaScript"
              />
            </div>
            <div className="icon__box">
              <img
                className="skills__icon"
                src="./icons/React.svg"
                alt="React"
              />
            </div>
            <div className="icon__box">
              <img
                className="skills__icon"
                src="./icons/figma.svg"
                alt="Figma"
              />
            </div>
            <div className="icon__box">
              <img className="skills__icon" src="./icons/git.svg" alt="Git" />
            </div>
          </div>
        </section>

        {/* projects */}
        <section className="work section box" id="portfolio">
          <h2 className="section__title">Moje práce</h2>
          <div className="projects__categories">
            <button className="category__btn text-xs"></button>
          </div>

          <div className="projects__box grid">
            <div className="project__item grid">
              <img
                className="project__img"
                src="img /FAP.png"
                alt="Free alpine minds web"
              />
              <div className="project__data">
                <h3 className="project__title text-lg"> Free Alpine Minds</h3>
                <p className="project_-description">
                  Moje první webová stránka v rámci kurzu Staň s kodérkou.
                </p>
                <h4 className="project__stack text-xs">Co jsem se naučila</h4>
                <ul className="tags txt-sm">
                  <li>html5</li>
                  <li>BEM</li>
                  <li>css3</li>
                  <li>Sass</li>
                </ul>
                {/* <a
                 className="project__link text-sm"
                  href="https://freealpineminds.netlify.app/"
                  target="_blank"
                >
                  Free Alpine Minds
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
