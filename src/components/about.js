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
        Experienced Associate with a demonstrated history of working in the non-profit organization management industry. As a Graphic Designer skilled in Adobe Illustrator, Adobe Photoshop, C++, UI/UX Design with Adobe XD and Figma. Strong professional with a Bachelor of Technology - BTech focused in Computer Engineering from Bharati Vidyapeeth (DU) College of Engineering.
          <br />
          Exercitation aute tempor ipsum ea dolore incididunt. Adipisicing in
          exercitation cillum Lorem commodo. Adipisicing ullamco aute sit aliqua
          Exercitation aute tempor ipsum ea dolore incididunt. Adipisicing in
          exercitation cillum Lorem commodo. Adipisicing ullamco aute sit aliqua
          ullamco.
        </p>
        <hr></hr>
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
      <span id="cnr_vnlk"></span>
      <span id="cnr_hnlk"></span>
      <span id="cnr_vnlk1"></span>
      <span id="cnr_hnlk1"></span>
    </>
  );
}

export { AboutMe, Content };
