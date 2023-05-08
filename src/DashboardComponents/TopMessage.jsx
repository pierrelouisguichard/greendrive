import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

function TopMessage() {
  const name = " ";
  return (
    <div style={container}>
      <p style={position}>
        Welcome back <span style={{ fontWeight: "bold" }}>{name}</span>{" "}
        <FontAwesomeIcon icon={faLeaf} style={{ color: "#035F48" }} />
      </p>
      <p style={{ ...position, fontSize: "18px", top: "70%" }}>
        Here is the latest updates on your GreenDrive account today.
      </p>
    </div>
  );
}

const container = {
  backgroundColor: "#e4e4e4",
  width: "83vw",
  height: "15vh",
  fontFamily: "Bahnschrift, sans-serif",
  color: "#035F48",
  fontSize: "34px",
  position: "absolute",
  right: "0",
  top: "0",
};

const position = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default TopMessage;
