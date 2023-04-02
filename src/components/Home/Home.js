import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import money from "../../Assets/money.jpg";
import sendly1 from "../../Assets/sendly1.jpg";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Welcome to 
                <strong className="main-name"> SENDLY</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <img
                src={sendly1}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
           
              />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={money}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
           
              />
               <h1 style={{ fontSize: "1.9em" }}>
               <span className="purple"> 
               <h1 style={{fontSize: "2.9em"}}>
               How {"!"}</h1>
               </span> User friendly we are {":"}
               <br/>
               <br/>
               <p style={{fontSize:"0.7em"}}>
               {"1 "}
               Give transparency to the users so that they can keep an eye on their account
          </p>   <p style={{fontSize:"0.7em"}}>
               {"2 "}
                Easy and secure transactions
          </p>   <p style={{fontSize:"0.7em"}}>
               {"3 "}
       
                Works in instance and requires less time

          </p>
            </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
