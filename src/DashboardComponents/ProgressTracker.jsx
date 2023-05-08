import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import ProgressSteps from "./ProgressSteps";

function ProgressTracker() {
  return (
    <div style={container}>
      <div style={pill}></div>
      <p style={{ ...position, top: "59px", left: "180px" }}>
        <FontAwesomeIcon
          icon={faChartSimple}
          size="xl"
          style={{ marginRight: "15px" }}
        />
        Progress Tracker
      </p>
      <div>
        <ProgressSteps />
      </div>
    </div>
  );
}

const position = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const container = {
  backgroundColor: "#035F48",
  width: "78%",
  height: "38%",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  position: "absolute",
  left: "20%",
  top: "59%",
  borderRadius: "8px",
};

const pill = {
  backgroundColor: "#72A599",
  width: "15px",
  height: "40px",
  borderRadius: "20px",
  position: "absolute",
  top: "40px",
  left: "50px",
};

export default ProgressTracker;
