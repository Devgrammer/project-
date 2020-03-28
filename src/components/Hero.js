import React from "react";
import ImgCrd from "./images";
import { Row, Col } from "react-bootstrap";
import "./hero.css";

function HeroSec() {
  return (
    <Row>
      <Col>
        <ImgCrd />
      </Col>
    </Row>
  );
}

function HeroHead() {
  return (
    <>
      <div class="hero_textblock">
        <p id="hero_txt">Hello I'm Abhinav</p>
      </div>
     
    </>
  );
}

export { HeroSec, HeroHead };
