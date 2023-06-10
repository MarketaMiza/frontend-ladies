import React from "react";
import "./Skills.css";
import { ReactComponent as HtmlIcon } from "../../../../../assets/icons/HTML5.svg";
import { ReactComponent as CssIcon } from "../../../../../assets/icons/CSS3.svg";
import { ReactComponent as JsIcon } from "../../../../../assets/icons/js.svg";
import { ReactComponent as ReactIcon } from "../../../../../assets/icons/React.svg";
import { ReactComponent as Figma } from "../../../../../assets/icons/figma.svg";
import { ReactComponent as Git } from "../../../../../assets/icons/git.svg";
// import { ReactComponent as Github } from "../../../../../assets/icons/github.svg";
import { ReactComponent as Sass } from "../../../../../assets/icons/sass.svg";
import { ReactComponent as Bootstrap } from "../../../../../assets/icons/Bootstrap.svg";

const LogoMap = {
  html: <HtmlIcon />,
  css: <CssIcon />,
  js: <JsIcon />,
  react: <ReactIcon />,
  figma: <Figma />,
  git: <Git />,
  // github: <Github />,
  sass: <Sass />,
  bootstrap: <Bootstrap />,
};

export const Skills = (props) => {
  const { technical_skills } = props;

  return (
    <section className="skills__container">
      <h1 className="skills__title">Technické dovednosti</h1>

      <div className="skills__list">
        {technical_skills.map((skill) => {
          const icon = LogoMap[skill];
          return icon;
        })}
      </div>
    </section>
  );
};
