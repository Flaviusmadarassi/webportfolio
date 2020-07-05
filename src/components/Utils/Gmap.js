import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={{ lat: 46.75, lng: 23.6 }}
      >
        <Marker position={{ lat: 46.75, lng: 23.607 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: process.env.REAC_APP_API_KEY,
}))(MapContainer);
