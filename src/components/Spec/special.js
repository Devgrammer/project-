import React  from 'react';
import { Col } from 'react-bootstrap';
import CardSet from "./Cards/card.js";


function Spec() {
  return (
    <>
      <Col>
        <CardSet
          name="Graphics Design"
          detail="Design is thinking made visual."
        />
      </Col>
      <Col>
        <CardSet name="Web Dev"
          detail="Building algorithm of Success" />
      </Col>
      <Col>
        <CardSet name="Illustration"
          detail="It always seems impossible until it's done." />
      </Col>
    </>
  );
}

export default Spec;