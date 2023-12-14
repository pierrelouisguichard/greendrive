import React from "react";
import GoogleMapReact from "google-map-react";
import smogo from "../assets/smogo.png";

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
  left: 45,
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
          // bootstrapURLKeys={{ ky: }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={51.5074} lng={-0.1278} text="London" />
        </GoogleMapReact>
      </div>
      <div style={sidebarStyles}></div>
      <a href="/">
        <img src={smogo} alt="smogo" style={logo} />
      </a>
      <div style={{ ...position, top: "20%", left: 130 }}>
        Vehicle Manufacturer
      </div>
      <input type="text" style={{ ...textFieldStyles, top: "24%" }}></input>
      <div style={{ ...position, top: "30%", left: 100 }}>Vehicle Model</div>
      <input type="text" style={{ ...textFieldStyles, top: "34%" }}></input>
      <div style={{ ...position, top: "40%", left: 130 }}>
        Registration Number
      </div>
      <input type="text" style={{ ...textFieldStyles, top: "44%" }}></input>
      <div style={{ ...position, top: "50%", left: 88 }}>Post Code</div>
      <input type="text" style={{ ...textFieldStyles, top: "54%" }}></input>
      <a style={Button} href="/dashboard">
        Continue{" "}
      </a>
    </div>
  );
}

const Button = {
  position: "absolute",
  top: "70%",
  left: 195,
  transform: "translate(-50%, -50%)",
  textDecoration: "none",
  width: "299px",
  height: "45px",
  background: "white",
  borderRadius: "3px",
  color: "#035F48",
  fontSize: "20px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
};
