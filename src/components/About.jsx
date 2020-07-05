import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="AboutContainer" id="about">
        <section className="about">
          <h1>Let's get started</h1>
          <p>
            If there is anything that I want right now, it's to learn more about
            web developing. I would happily take part in an internship to
            sharpen my skills and after that maybe I could earn a job offer.
          </p>
          <p>Feel free to check out my CV.</p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener"
          >
            <img
              className="cv-icon"
              src={require("./img/cv-img.jpg")}
              alt="cv-icon"
            />
          </a>

          <h1>Training at Informal School of IT</h1>
          <img
            className="scoalaIT"
            src={require("./img/scoalaIT.jpg")}
            alt="scoalaIT"
          />
          <p>
            Started the course in November 2019, hoping that I will become a
            junior-level front-end web dev. Learning sessions were concise and
            every week we had homeworks suited for beginners. While working by
            myself on small exercises I managed to accumulate more information
            in a short period of time.
          </p>
          <h1>Studied technologies:</h1>
          <ul className="techList">
            <li>
              HTML5 and CSS3: how to build a User Interface, proper responsive
              web-pages, animations, flex-box, grid layout.
            </li>
            <li>
              JavaScript: use of variables, functions, objects, scoping,
              hoisting, AJAX, DOM manipulation.
            </li>
            <li>
              HTTP: fundamentals about the protocol: methods, headers, error
              codes.
            </li>
            <li>GIT: learned the principles and basic commands.</li>
            <li>
              React JS: fundamentals: JSX, rendering elements, components and
              props, state and lifecycle.
            </li>
          </ul>
          <div className="techIcons">
            <img src={require("./img/html5.png")} alt="html" />
            <img src={require("./img/css3.png")} alt="css" />
            <img src={require("./img/react.png")} alt="react" />
            <img src={require("./img/javascript.png")} alt="javaScript" />
            <img src={require("./img/nodejs.png")} alt="node" />
          </div>
        </section>
        <section className="about" id="about-work">
          <div className="project">
            <h1>Group project</h1>
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
              <h1>Short description of our project</h1>
              <div className="aboutProject-card" id="1">
                <p>
                  This is the homepage of the web-site, it has a carousel made
                  with bootstrap, the header initially consists 3 buttons to
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
                  already existing movies as well delete them.
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
                  using Trello to manage our tasks was more easily.
                </p>
                <img src={require("./img/myIMDb5.png")} alt="" />
              </div>
            </div>
            <a
              href="https://github.com/Flaviusmadarassi/Proiect-IMDb-Grupa-Mercur"
              target="_blank"
              rel="noopener"
            >
              <img
                className="gh-icon"
                src={require("./img/github.svg")}
                alt="github"
              ></img>
            </a>
            <p>Click here to accces the project repository.</p>
          </div>
        </section>
        <section></section>
      </div>
    );
  }
}

export default About;
