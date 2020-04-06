import React, { Component } from "react";
import "./App.css";
import { HeroSec, HeroHead } from "./components/Hero";
import NavBar from "./components/Nav";
import { Row, Col, Container } from "react-bootstrap";
import Spec from "./components/Spec/special.js"
import SubHead from "./components/SubHead/SubHead.js";
import AboutMe from "./components/about.js";
import ChatBot from "./chat.js";

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
            <Col><div><ChatBot /></div></Col>
          </Row>
          <Row>
            <Spec />
          </Row>
          <Row className="justify-content-center">
            <Col ></Col>
            <Col  className="text-nowrap"><SubHead subhd="About Me" /></Col>
            <Col> </Col>
          </Row>
          <Row >
            <Col><AboutMe /></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
