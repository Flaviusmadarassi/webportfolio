import React, { Component } from "react";
import "./about.css";

class About extends Component {
  state = {
    icon1: false,
    icon2: false,
    icon3: false,
    icon4: false,
    icon5: false,
    openIcons: false,
  };

  componentDidMount = () => {
    const titleOptions = {
      rootMargin: "0px 0px -150px 0px",
    };
    const faders = document.querySelectorAll(".fade-in");
    const titleObserver = new IntersectionObserver(function (
      entries,
      titleObserver
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          titleObserver.unobserve(entry.target);
        }
      });
    },
    titleOptions);

    faders.forEach((fader) => {
      titleObserver.observe(fader);
    });
  };

  icon1change = () => {
    this.setState({
      icon1: true,
      icon2: false,
      icon3: false,
      icon4: false,
      icon5: false,
    });
  };

  icon2change = () => {
    this.setState({
      icon1: false,
      icon2: true,
      icon3: false,
      icon4: false,
      icon5: false,
    });
  };

  icon3change = () => {
    this.setState({
      icon1: false,
      icon2: false,
      icon3: true,
      icon4: false,
      icon5: false,
    });
  };

  icon4change = () => {
    this.setState({
      icon1: false,
      icon2: false,
      icon3: false,
      icon4: true,
      icon5: false,
    });
  };

  icon5change = () => {
    this.setState({
      icon1: false,
      icon2: false,
      icon3: false,
      icon4: false,
      icon5: true,
    });
  };

  render() {
    return (
      <div className="AboutContainer" id="about">
        <section className="about">
          <h1 className="fade-in">Let's get started</h1>
          <p>
            If there is anything that I want right now, it's to learn more about
            web developing. I would happily take part in an internship to
            sharpen my skills and after that maybe I could earn a job offer.
          </p>
          <p>Feel free to check out my CV.</p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cv-icon"
              src={require("./img/cv-img.jpg")}
              alt="cv-icon"
            />
          </a>

          <h1 className="fade-in">Training at Informal School of IT</h1>
          <a
            href="https://scoalainformala.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="scoalaIT"
              src={require("./img/scoalaIT.jpg")}
              alt="scoalaIT"
            />
          </a>
          <p>
            Started the course in November 2019, hoping that I will become a
            junior-level front-end web dev. Learning sessions were concise and
            every week we had homework suited for beginners. While working by
            myself on small exercises I managed to accumulate more information
            in a short period of time.
          </p>
          <h1 className="fade-in">Studied technologies:</h1>

          <div className="techIcons">
            <img
              onClick={this.icon1change}
              className={
                " " + (this.state.icon1 === true ? "open-techIcons" : "")
              }
              src={require("./img/html5.png")}
              alt="html"
            />
            {this.state.icon1 ? (
              <p className="techIcons-text first">
                HTML5: how to build a User Interface, also how to build a simple
                structure for components in React.js, using JSX, a syntax
                extension to JavaScript.
              </p>
            ) : null}
            <img
              onClick={this.icon2change}
              className={
                " " + (this.state.icon2 === true ? "open-techIcons" : "")
              }
              src={require("./img/css3.png")}
              alt="css"
            />
            {this.state.icon2 ? (
              <p className="techIcons-text second">
                HTML5: how to build a User Interface, also how to build a simple
                structure for components in React.js, using JSX, a syntax
                extension to JavaScript.
              </p>
            ) : null}
            <img
              onClick={this.icon3change}
              className={
                " " + (this.state.icon3 === true ? "open-techIcons" : "")
              }
              src={require("./img/react.png")}
              alt="react"
            />
            {this.state.icon3 ? (
              <p className="techIcons-text third">
                HTML5: how to build a User Interface, also how to build a simple
                structure for components in React.js, using JSX, a syntax
                extension to JavaScript.
              </p>
            ) : null}
            <img
              onClick={this.icon4change}
              className={
                " " + (this.state.icon4 === true ? "open-techIcons" : "")
              }
              src={require("./img/javascript.png")}
              alt="javaScript"
            />
            {this.state.icon4 ? (
              <p className="techIcons-text fourth">
                HTML5: how to build a User Interface, also how to build a simple
                structure for components in React.js, using JSX, a syntax
                extension to JavaScript.
              </p>
            ) : null}
            <img
              onClick={this.icon5change}
              className={
                " " + (this.state.icon5 === true ? "open-techIcons" : "")
              }
              src={require("./img/nodejs.png")}
              alt="node"
            />
            {this.state.icon5 ? (
              <p className="techIcons-text fifth">
                HTML5: how to build a User Interface, also how to build a simple
                structure for components in React.js, using JSX, a syntax
                extension to JavaScript.
              </p>
            ) : null}
          </div>
        </section>
        <section className="about" id="about-work">
          <div className="project">
            <h1 className="fade-in">Group project</h1>
            <p>
              This app was developed as our final project, a IMDb clone website.
            </p>
            <p>
              The developing of this app was made with React.js because of the
              more compact structure, the components are independent and
              reusable bits of code. They serve the same purpose as JavaScript
              functions, but work in isolation and returns HTML via a render
              function. This makes it more easy and convenient to build a user
              interface.
            </p>
            <div className="aboutProject">
              <h1 className="fade-in">Short description of our project</h1>
              <div className="aboutProject-card" id="1">
                <p>
                  This is the homepage of the web-site, it has a carousel made
                  with bootstrap, the header initially consists of 3 buttons to
                  navigate between pages, the navigation was made possible with
                  react router.
                </p>
                <img src={require("./img/myIMDb1.png")} alt="" />
              </div>
              <div className="aboutProject-card" id="2">
                <p>
                  This is the search page, it allows the user to search for
                  movies by name or use the implemented filters that are
                  positioned in the left side of the page.
                </p>
                <img src={require("./img/myIMDb2.png")} alt="" />
              </div>
              <div className="aboutProject-card" id="3">
                <p>
                  This is the register page, it allows you to sign in with an
                  existing user or sign up with new credentials. After signing
                  in the user will be able to add movies or make changes to the
                  already existing movies as well as delete them.
                </p>
                <img src={require("./img/myIMDb3.png")} alt="" />
              </div>
              <div className="aboutProject-card" id="4">
                <p>
                  This is the add movie page, it enables the user to add movies.
                  As it can be seen in the header the buttons for editing movies
                  and loging out has appeared after the user signed in.
                </p>
                <img src={require("./img/myIMDb4.png")} alt="" />
              </div>
              <div className="aboutProject-card" id="5">
                <p>
                  Beacause we were a team of 4, we needed to divide our work, so
                  using Trello to manage our tasks was easier.
                </p>
                <img src={require("./img/myIMDb5.png")} alt="" />
              </div>
            </div>
            <p>Click here to accces the project repository.</p>
            <a
              href="https://github.com/Flaviusmadarassi/Proiect-IMDb-Grupa-Mercur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="gh-icon"
                src={require("./img/github.svg")}
                alt="github"
              />
            </a>
          </div>
        </section>
        <section>Useful Youtube Channels</section>
      </div>
    );
  }
}

export default About;
