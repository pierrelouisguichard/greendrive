import React from "react";
import smalllogo from "../assets/smalllogo.png";

function SecNav() {
  return (
    <div style={container}>
      <a href="/">
        <img src={smalllogo} alt="smalllogo" style={logo} />
      </a>
    </div>
  );
}

const container = {
  backgroundColor: "#035F48",
  width: "100vw",
  height: "13vh",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "34px",
  position: "absolute",
  left: "0%",
  top: "0%",
};

const logo = {
  maxWidth: "250px",
  position: "absolute",
  top: "-15%",
  left: "3%",
};

export default SecNav;
