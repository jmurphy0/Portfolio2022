import React from "react";
import "./style.css";
import PortfolioCard from "../../components/PortfolioCard";
import Projectdata from "../../utils/Projectdata.js";

const index = () => {
  // creating an array of cards containing project info
  let cards = [];
  // populating array with my card componenet and data from Projectdata.js
  Projectdata.forEach((project) => {
    cards.push(PortfolioCard(project));
  });

  return (
    <div className="container">
      {/* portfolioHead contains a title and description */}
      <div className="portfolioHead">
        <h3>My Portfolio</h3>
        <p>
          A brief example of some of my past projects. Click the image to open
          the live link or on the project title to open the github repository.
        </p>
      </div>
      {/* cardcont will display the array of cards created above */}
      <div className="cardcont" class="cardcont">
        {cards}{" "}
      </div>
    </div>
  );
};

export default index;
