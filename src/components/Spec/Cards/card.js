import React from "react";
import "./card.css";

function CardSet(props) {
  return (
    <>
      <div id="card-body">
        <span id="cardstr">
          <div id="chd_blk">
            <p id="cardhead">{props.name}</p>
            <p id="card_dtl">{props.detail}</p>
          </div>
        </span>
        <span id="border_wrap"></span>
        <a href="#hero_textblock" id='know'>Know more</a>
      </div>
    </>
  );
}

export default CardSet;
