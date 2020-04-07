import React from "react";
import "./about.css";
import { ImgOverlay } from "./images.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe() {
  return (
    <>
      <div id="abt_blk">
        <ImgOverlay />
      </div>
      <div id="overlay"></div>
    </>
  );
}

function Content() {
  return (
    <>
      <p id="intro">
        <h1 id="nme">Abhinav Deep Rastogi</h1>
        <nobr />
        <p id="transcript">(/abhinav díp rastogi/)</p>
        <p id="para">
          Lorem ullamco cupidatat magna voluptate consequat qui laboris irure in
          cupidatat irure cupidatat. Nostrud eiusmod et pariatur non eu
          voluptate nostrud. Officia proident voluptate exercitation laboris
          Lorem esse pariatur qui exercitation labore minim aute cupidatat.
          <br />
          Exercitation aute tempor ipsum ea dolore incididunt. Adipisicing in
          exercitation cillum Lorem commodo. Adipisicing ullamco aute sit aliqua
          ullamco.
          <br />
          Exercitation aute tempor ipsum ea dolore incididunt. Adipisicing in
          exercitation cillum Lorem commodo. Adipisicing ullamco aute sit aliqua
          ullamco.
        </p>
        <br />
        <ul type="none">
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/iamcrazyabhi/">
              {" "}
              <FontAwesomeIcon
                className="fas-frog"
                icon={["fab", "linkedin"]}
                fixedWidth
              />
            </a>
          </li>
          <li>
            {" "}
            <a href="https://github.com/Devgrammer">
              {" "}
              <FontAwesomeIcon
                className="fas-frog"
                icon={["fab", "github"]}
                fixedWidth
              />
            </a>
          </li>
          <li>
            {" "}
            <a href="#https://dribbble.com/iamcrazyabhi">
              {" "}
              <FontAwesomeIcon
                className="fas-frog"
                icon={["fab", "dribbble"]}
                fixedWidth
              />
            </a>
          </li>
          <li>
            {" "}
            <a href="https://www.behance.net/iamcrazyabhi">
              {" "}
              <FontAwesomeIcon
                className="fas-frog"
                icon={["fab", "behance"]}
                fixedWidth
              />
            </a>
          </li>
        </ul>

        <hr></hr>
        <a href="#linkedin">See more</a>
      </p>
    </>
  );
}

export { AboutMe, Content };
