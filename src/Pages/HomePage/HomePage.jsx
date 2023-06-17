import React from "react";
import "./Home.css";
import { Portfolios } from "../Portfolios/Portfolios";
import { ScrollTopArrow } from "../../components/ScrollTopArrow/ScrollTopArrow";

export const HomePage = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      <article className="article-box">
        <div className="text">
          <h4 className="box-title">O projektu Frontend Ladies</h4>

          <p>
            <strong>
              Web, který pomůže propojit firmy a nové juniorní frontend
              vývojářky.
            </strong>
            <br />
            Samy víme, jak je těžké sebrat odvahu a poslat CV na naši vysněnou
            pozici v IT - máme obavu, že toho ještě moc neumíme a tak se jen
            učíme a hledání práce odkládáme. Budeme rádi, pokud se nám podaří
            web zpropagovat ve firmách spolupracujících s Czechitas, které tak
            budou mít možnost podívat se na portfolia jednotlivých absolventek
            digitálních akademií a sami je oslovit s nabídkou práce a pozvat na
            pohovor.
          </p>
        </div>
      </article>

      <div className="portfolios-box">
        <Portfolios />
      </div>

      <ScrollTopArrow />
    </>
  );
};
