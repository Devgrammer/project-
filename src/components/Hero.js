import React from "react";
import { ImgCrd } from "./images";
import "./hero.css";

function HeroSec() {
  return <ImgCrd />;
}

function HeroHead() {
  return (
    <>
      <div class="hero_textblock">
        <p id="hero_txttop">Hello, I'm </p>
        <p id="hero_txtname">Abhinav Rastogi </p>
        <div id='hero_pro'>
          <div class="content-slider">
            <div class="slider">
              <div class="mask">
                <ul>
                  <li class="anim1">
                    <div class="quote">
                    The Developer
                    </div>
                  </li>
                  <li class="anim2">
                    <div class="quote">
                     The Designer
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { HeroSec, HeroHead };
