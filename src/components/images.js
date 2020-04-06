import React from "react";
import Logo from "./img/potrait.jpg";
import { Image } from "react-bootstrap";
import "./image.css";

function ImgCrd() {
  return (
    <>
            <div class='div_1'>
              <Image src={Logo} rounded id="heros" />
            </div>
            < div class='div_2'>
            <span id="block1"></span>
            </div>
    </>
  );
}

function imgOverlay() {
  return (
    <>
      <div id ="div_3">
        <Image src={Logo} rounded id="heros" />
      </div>
      
    </>
  );
  
  
}

export { ImgCrd, imgOverlay };
