import React from "react";
import Resume from "../../imgs/JohnMurphyResume.pdf";
import Button from "../Button";
import "./style.css";
import myPic from "../../imgs/myPic.jpeg";

const aboutCard = ({ description }) => {
  // returns a card containing my picture and bio, as-well-as, links to my github page, linkedin page and pdf resume download
  return (
    <div className="aboutMeCard">
      <img
        src={myPic}
        aria-hidden
        alt="a picture of me"
        className="bg-dark mypic"
      />
      <div class="cardbody">
        <p>{description}</p>
        <div className="myLinks">
          {/* using my own button component for a streamlined design props are the icon to use and the link, if there is no icon the 'discription' is used for the label */}
          <Button
            icon="bi bi-linkedin"
            myLink="https://www.linkedin.com/in/jmurphy0/"
          />
          <Button icon="bi bi-github" myLink="https://github.com/jmurphy0" />
          <Button description="Resume" myLink={Resume} />
        </div>
      </div>
    </div>
  );
};

export default aboutCard;
