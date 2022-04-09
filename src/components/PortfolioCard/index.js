import React from "react";
import "./style.css";

const index = ({ img, name, liveLink, description, title, githubLink }) => {
  return (
    <div className="card__container">
      <div className="card" class="card bg-dark">
        <a href={liveLink} target="_blank">
          <img src={img} class="img-thumbnail" alt={name} />
        </a>
        <a href={githubLink} target="_blank">
          <p>{title}</p>
        </a>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default index;
