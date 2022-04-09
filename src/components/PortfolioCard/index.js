import React from "react";
import "./style.css";

const index = ({ img, name, liveLink, description, title, githubLink }) => {
  return (
    <div className="card__container">
      <div className="card" class="card bg-dark">
        <a href={githubLink} title="open github repository" target="_blank">
          <h3>{title}</h3>
        </a>
        <a href={liveLink} title="open live link" target="_blank">
          <img src={img} class="img-thumbnail" alt={name} />
        </a>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default index;
