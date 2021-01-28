import React, { Component } from "react";
import "./contact.css";
import MapContainer from "./Utils/Gmap.js";

class Contact extends Component {
  accesEmail = () => {
    window.open("mailto:flavius.madarassi@yahoo.com");
  };

  render() {
    return (
      <div className="ContactContainer" id="contact">
        <section>
          <h1>Contact me here!</h1>
          <p>I am located in Cluj-Napoca, Romania.</p>
          <p>
            Feel free to contact me via e-mail or call me:
            <strong> +40756558013</strong>
          </p>
          <img
            className="mailIcon"
            onClick={this.accesEmail}
            src={require("./img/email.svg")}
            alt="mailIcon"
          ></img>
        </section>
        <div className="map-container">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default Contact;
