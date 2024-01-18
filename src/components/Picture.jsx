import React from "react";

function Picture(props) {
  let imgSrc;
  switch (props.author) {
    case "Walter White":
      imgSrc = require("../images/walter-white.jpg");
      break;
    case "Jesse Pinkman":
      imgSrc = require("../images/jesse-pinkman.jpg");
      break;
    case "Gustavo Fring":
      imgSrc = require("../images/gus-fring.jpg");
      break;
    case "Mike Ehrmantraut":
      imgSrc = require("../images/mike.jpg");
      break;
    case "Saul Goodman":
      imgSrc = require("../images/saul-goodman.jpg");
      break;
    case "Hank Schrader":
      imgSrc = require("../images/hank-schrader.jpg");
      break;
    case "Tuco Salamanca":
      imgSrc = require("../images/tuco-salamanca.jpg");
      break;
    case "Skyler White":
      imgSrc = require("../images/skyler-white.jpg");
      break;
    case "The fly":
      imgSrc = require("../images/the-fly.jpg");
      break;
    case "Gale Boetticher":
      imgSrc = require("../images/gale-boetticher.jpg");
      break;
    case "Walter White Jr":
      imgSrc = require("../images/walter-white-jr.jpg");
      break;
    case "Badger":
      imgSrc = require("../images/badger.jpg");
      break;
    case "Stephen King":
      imgSrc = require("../images/stephen-king.jpg");
      break;
  }
  return <img src={imgSrc} width={300} height={300} />;
}

export default Picture;
