import React from "react";
import GoogleMapReact from "google-map-react";
import smalllogo from "../assets/smalllogo.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 51.5074,
      lng: -0.1278,
    },
    zoom: 11,
  };

  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "60%",
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB-ORs-j8PazFoRXsua6KYn8FeX2xgkrHo" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={51.5074} lng={-0.1278} text="London" />
        </GoogleMapReact>
      </div>
      <div
        style={{
          height: "100vh",
          width: "40%",
          backgroundColor: "#035F48",
          position: "absolute",
          left: 0,
          bottom: 0,
        }}
      ></div>
      <a href="/">
        <img src={smalllogo} alt="smalllogo" style={logo} />
      </a>
    </div>
  );
}

const logo = {
  position: "absolute",
  maxWidth: "250px",
  top: -55,
  left: 50,
};
