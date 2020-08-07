import React, { Component } from "react";
import "./carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

class Slider extends Component {
  render() {
    return (
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={require("../../img/myIMDb1.png")} alt="" />
            <Carousel.Caption>
              <p>
                This is the homepage of the web-site, it has a carousel made
                with bootstrap, the header initially consists of 3 buttons to
                navigate between pages, the navigation was made possible with
                react router.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../../img/myIMDb2.png")} alt="" />
            <Carousel.Caption>
              <p>
                This is the search page, it allows the user to search for movies
                by name or use the implemented filters that are positioned in
                the left side of the page.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../../img/myIMDb3.png")} alt="" />
            <Carousel.Caption>
              <p>
                This is the register page, it allows you to sign in with an
                existing user or sign up with new credentials. After signing in
                the user will be able to add movies or make changes to the
                already existing movies as well as delete them.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../../img/myIMDb4.png")} alt="" />
            <Carousel.Caption>
              <p>
                This is the add movie page, it enables the user to add movies.
                As it can be seen in the header the buttons for editing movies
                and loging out has appeared after the user signed in.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("../../img/myIMDb5.png")} alt="" />
            <Carousel.Caption>
              <p>
                Beacause we were a team of 4, we needed to divide our work, so
                using Trello to manage our tasks was easier.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
