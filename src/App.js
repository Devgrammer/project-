import React, { Component } from "react";
import "./App.css"; 
import {HeroSec, HeroHead} from './components/Hero';
import NavBar from "./components/Nav";
import { Row, Col, Container } from "react-bootstrap";




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
            <Col xs={6} md={4}><HeroHead /></Col>
            <Col xs={6} md={4}>
              <HeroSec />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
