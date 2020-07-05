import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  componentDidMount = () => {
    const navBar = document.querySelector(".navBar");
    const title = document.querySelector(".HomeContainer");
    const options = { threshold: 0.9 };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          navBar.classList.add("nav-scrolled");
          // console.log(entry.target);
        } else {
          navBar.classList.remove("nav-scrolled");
        }
      });
    }, options);

    observer.observe(title);
  };

  render() {
    return (
      <nav className="navBar">
        <span>
          <a href="#about">About</a>
        </span>
        <span>
          <a href="#about-work">Work</a>
        </span>
        <span>
          <a href="#contact">Contact</a>
        </span>
      </nav>
    );
  }
}

export default Header;
