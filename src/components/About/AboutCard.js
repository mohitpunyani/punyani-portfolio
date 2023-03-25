import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohit Punyani </span>
            from <span className="purple"> Jaipur , India.</span>
            <br />I am  pursuing B.Tech in <span className="purple">Artificial Intelligence
            and 
            <br/>Data Science</span> {" "}
            from <span className="purple">RTU</span> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
              
            </li>
          </ul>
          <br/>
          <p style={{ color: "rgb(155 126 172)" }}>
            <strong>
            " The Thing  you like purchase that , If you don't have money to purchase then 
            do work 
             because that thing is purchasable "{" "}
            </strong>
          </p>
          <br/>
          <footer className="blockquote-footer">Mohit Punyani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
