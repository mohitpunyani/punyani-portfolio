import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Major Project </strong>
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ecommerce Website"
              description="It is an Ecommerce Website using React ,Node ,MongoDb ,Firebase ,Bootstrap ,Express ,React-Redux , Antd . I am giving two months to this real world
              project. I create all the advanced features like search and filter , Add to Card , online 
              payment option with stripe , Create coupon etc"
              ghLink="https://github.com/mohitpunyani/react-redux-ecommerce-frontend"
              // demoLink="https:///"
            />
          </Col>
     

        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Minor Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Todo List"
              description="I make a Todo List using react and bootstrap"
              ghLink="https://github.com/mohitpunyani/Todo_List/tree/master"

              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Digital Clock"
              description="It's a real time clock using html ,css and js"
              ghLink="https://github.com/mohitpunyani/Minor-web-projects/tree/master/digital_clock"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Quiz App"
              description="It's a Quiz Questioning app using html ,css and js"
              ghLink="https://github.com/mohitpunyani/Minor-web-projects/tree/master/quizapp"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}

export default Projects;
