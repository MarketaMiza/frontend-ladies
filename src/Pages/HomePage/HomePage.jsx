import React from "react";
import "./Home.css";
import { Portfolios } from "../Portfolios/Portfolios";
import { ScrollTopArrow } from "../../components/ScrollTopArrow/ScrollTopArrow";

export const HomePage = () => {
  return (
    <>
      <article className="article-box">
        <div className="text">
          <h4 className="box-title">O projektu Frontend Ladies</h4>

          <p>
            <strong>
              Web, který pomáhá propojit nové juniorní frontend vývojářky a
              firmy hledající nové talentované kolegyně.
            </strong>
            <br />
            Web Frontend Ladies je místem, kde najdete portfolia absolventek
            Czechitas - Digitální akademie, které se rozhodly pro práci v IT.
            Oslovte začínající vývojářky, pozvěte je na pohovor a obohaťte tak
            své týmy o nadějné vývojářky!
            <p>
              Tento projekt vznikl jako závěrečná práce Markéty, která je
              absolventkou Digitální akademie: Web, a která si dala za cíl
              vytvořit projekt, který pomůže absolventkám najít novou práci v
              IT.
            </p>
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
