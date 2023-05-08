import React from "react";
import GoogleMapReact from "google-map-react";
import smalllogo from "../assets/smalllogo.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const mapStyles = {
  position: "absolute",
  height: "100vh",
  fontFamily: "Bahnschrift, sans-serif",
};

const mapContainerStyles = {
  width: "60%",
  ...mapStyles,
  right: 0,
  bottom: 0,
};

const sidebarStyles = {
  backgroundColor: "#035F48",
  width: "40%",
  ...mapStyles,
  left: 0,
  bottom: 0,
};

const position = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "18px",
};

const logo = {
  position: "absolute",
  maxWidth: "250px",
  top: -55,
  left: 50,
};

const textFieldStyles = {
  ...position,
  zIndex: 999,
  color: "white",
  backgroundColor: "rgb(0,0,0,0)",
  width: "35vw",
  border: "none",
  borderBottom: "2px solid white",
  transform: "none",
  top: "28%",
  left: 20,
};

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
      <div style={mapContainerStyles}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={51.5074} lng={-0.1278} text="London" />
        </GoogleMapReact>
      </div>
      <div style={sidebarStyles}></div>
      <a href="/">
        <img src={smalllogo} alt="smalllogo" style={logo} />
      </a>
      <div style={{ ...position, ...textFieldStyles }}>Message</div>
      <input type="text" style={textFieldStyles}></input>
    </div>
  );
}
