import React from "react";
import "./Skills.css";
import { ReactComponent as HtmlIcon } from "../../../../../assets/icons/html.svg";
import { ReactComponent as CssIcon } from "../../../../../assets/icons/css.svg";
import { ReactComponent as JsIcon } from "../../../../../assets/icons/js.svg";
import { ReactComponent as ReactIcon } from "../../../../../assets/icons/react.svg";
import { ReactComponent as FigmaIcon } from "../../../../../assets/icons/figma.svg";
import { ReactComponent as GitIcon } from "../../../../../assets/icons/git.svg";
import { ReactComponent as SassIcon } from "../../../../../assets/icons/sass.svg";
import { ReactComponent as BootstrapIcon } from "../../../../../assets/icons/bootstrap.svg";
import { ReactComponent as JqueryIcon } from "../../../../../assets/icons/jquery.svg";
import { ReactComponent as Sql } from "../../../../../assets/icons/sql.svg";
import { ReactComponent as Mjml } from "../../../../../assets/icons/mjml.svg";


const LogoMap = {
  html: <HtmlIcon key="html"/>,
  css: <CssIcon key="css" />,
  js: <JsIcon key="js"/>,
  react: <ReactIcon key="react"/>,
  figma: <FigmaIcon key="figma"/>,
  git: <GitIcon key="git"/>,
  sass: <SassIcon key="sass"/>,
  bootstrap: <BootstrapIcon key="bootstrap"/>,
  jquery: <JqueryIcon key="jquery"/>,
  sql: <Sql key="sql"/>,
  mjml: <Mjml key="mjml"/>
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
