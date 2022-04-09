import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttons = ({ icon, myLink, description }) => {
  return (
    <div className="aboutButtons">
      {!icon ? (
        <a href={myLink} download>
          <button class="btn btn-secondary ">{description}</button>
        </a>
      ) : (
        <a href={`${myLink}`} target="_blank">
          <button class="btn btn-secondary ">
            <i class={`${icon}`} role="img"></i>
          </button>
        </a>
      )}
    </div>
  );
};

export default buttons;
