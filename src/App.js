import React, { Component } from "react";
import "./App.css";
import { HeroSec, HeroHead } from "./components/Hero";
import NavBar from "./components/Nav";
import { Row, Col, Container } from "react-bootstrap";
import Spec from "./components/Spec/special.js";
import SubHead from "./components/SubHead/SubHead.js";
import { AboutMe, Content } from "./components/about.js";
import Quote from "./components/quote";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faTable } from "@fortawesome/free-solid-svg-icons";
import TimeLine from './timeline'

library.add(fab, faCheckSquare, faTable);

// import ChatBot from "./chat.js";

class App extends Component {
  render() {
    return (
      <>
        <Container fluid="md">
          <Row>
            <Col md={8}>
              <NavBar />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} className="text-nowrap">
              <HeroHead />
            </Col>
            <Col xs={6} md={4}>
              <HeroSec />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col></Col>
            <Col>
              <SubHead subhd="Specialization" />
            </Col>
            <Col></Col>
            {/* <Col><div><ChatBot /></div></Col> */}
          </Row>
          <Row>
            <Spec />
          </Row>
          <Row className="justify-content-center">
            <Col></Col>
            <Col className="text-nowrap">
              <div id="abt_me">
                <SubHead subhd="About Me" />
              </div>
            </Col>
            <Col> </Col>
          </Row>
          <Row>
            <Col>
              <AboutMe />
            </Col>
            <Col>
              <Content />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="text-nowrap">
              <Quote />
            </Col>
          </Row>
          <Row>
            <Col><TimeLine />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
