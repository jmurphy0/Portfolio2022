import React from "react";
import "./style.css";
import emailjs from "emailjs-com";

const index = () => {
  // using emailjs to enable emails to be sent to my gmail account
  const sendEmail = (e) => {
    e.preventDefault();
    // my api info from emailjs
    emailjs
      .sendForm(
        "service_imz1zkr",
        "template_vkmil2l",
        e.target,
        "569UudLqf0q7sO4Kf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // clearning the form after submition
    e.target.reset();
  };
  return (
    <div class="container">
      {/* form inputs for contact me page */}
      <form onSubmit={sendEmail} className="contact">
        <div className="contactCard" class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Contact information
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            name="subject"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="message"
          ></textarea>
        </div>
        <input type="submit" class="btn btn-secondary" value="Send" />
      </form>
    </div>
  );
};

export default index;
