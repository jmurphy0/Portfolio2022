import React from "react";
import "./style.css";
import AboutCard from "../../components/AboutCard";

const index = () => {
  return (
    // landing page for the website, about me section
    <div class="container">
      <div className="about">
        {/* AboutCart component takes in props about me and produces a resposive card containing an image, description and links */}
        <AboutCard
          className="about__card"
          description="I am a graduate of the University of Toronto SCS full-stack
                    bootcamp. Currently residing in Toronto, Canada. I received
                    my bachelors degree in applied economics from Queen’s
                    University in 2014. Check out my Github and LinkedIn pages
                    below."
        />
      </div>
    </div>
  );
};

export default index;
