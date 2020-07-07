import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="HomeContainer" id="homepage">
        <h1>Hello! My name is Flavius and I'm a Front-End Web Developer.</h1>
        <img
          className="personalPic"
          src={require("./img/CV-photo.jpg")}
          alt="myCV"
        />
        <a href="#homepage">
          <img
            className="arrowToHome"
            src="https://img.icons8.com/clouds/100/000000/long-arrow-up.png"
            alt="arrow"
          />
        </a>
      </div>
    );
  }
}

export default Home;
