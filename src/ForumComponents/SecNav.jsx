import React from "react";
import smalllogo from "../../assets/smalllogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

function SecNav() {
  return (
    <div style={container}>
      <a href="/">
        <img src={smalllogo} alt="smalllogo" style={logo} />
      </a>
      <p style={position}>
        {" "}
        <FontAwesomeIcon
          icon={faComments}
          style={{ color: "white" }}
        /> Forum{" "}
      </p>
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
  top: "-16%",
  left: "3%",
};

const position = {
  position: "absolute",
  top: "40%",
  left: "25%",
  fontWeight: "bold",
};

export default SecNav;
