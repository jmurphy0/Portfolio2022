import React from "react";
import "./style.css";
// creating a function taht will take an icon, link, and description for each button to create as props
const buttons = ({ icon, myLink, description }) => {
  return (
    <div className="aboutButtons">
      {/* if there is an icon description, it will display the icon provivded, otherwise the description will be used and will be set to download as this is for my resume. */}
      {!icon ? (
        <a href={myLink} download>
          <button class="btn btn-secondary ">{description}</button>
        </a>
      ) : (
        <a href={`${myLink}`} rel="noref noreferrer" target="_blank">
          <button class="btn btn-secondary ">
            <i class={`${icon}`} role="img"></i>
          </button>
        </a>
      )}
    </div>
  );
};

export default buttons;
