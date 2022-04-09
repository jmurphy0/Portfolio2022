import React from "react";
import Resume from "../../imgs/JohnMurphyResume.pdf";
import Button from "../Button";
import "./style.css";
import myPic from "../../imgs/myPic.jpeg";

const aboutCard = ({ description }) => {
  return (
    <div className="aboutMeCard">
      <img
        src={myPic}
        className="mypic"
        alt="a picture of me"
        class="img-thumbnail bg-dark mypic"
      />
      <div class="cardbody">
        <p>{description}</p>
        <div className="myLinks">
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
