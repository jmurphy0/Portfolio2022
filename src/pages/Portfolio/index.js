import React from "react";
import "./style.css";
// importing required components
import Porjectdata from "../../utils/Projectdata";
import PortfolioCard from "../../components/PortfolioCard";
import Projectdata from "../../utils/Projectdata.js";

const index = () => {
  let cards = [];
  Projectdata.forEach((project) => {
    cards.push(PortfolioCard(project));
  });

  return (
    <div className="container">
      <div className="cardcont" class="col-lg-8 cardcont">
        {cards}{" "}
      </div>
    </div>
  );
};

export default index;
