import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sendly_1 from "../../Assets/sendly_1.jpg"
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> to sendly
            </h1>
            <p className="home-about-body">
            
              This is a dapp using  <b className="purple">
                  Blockhain technology
                </b> 
              provides you secure, safe, trusted and reliable transactions.
            
              <br />
              <br />Blockchain
              <i>
                <b className="purple"> transactions {":"}</b>
              </i>
              <br />
              <br />
              can be tracked and verified in a transparent manner &nbsp;
              <i>
                <b className="purple">and most importantly also reducing the risk of fraud </b> and
                other financial problems {""}
                <b className="purple">
                   through our website
                </b>
              </i>
              <br />
              <br />
            
              Through our website users can safe their   <b className="purple">
                    huge time 
                </b> and do payments securely without
              going to any place
         
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={sendly_1} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p style={{fontSize : "2.6em"}}>
            Always <span className="purple">Upgrading</span>{" "}
            and
               <span className="purple"> Rennovating </span>
            </p>
           
         
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
