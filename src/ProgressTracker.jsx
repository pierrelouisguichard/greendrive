import React from "react";

function ProgressTracker() {
  return (
    <div style={container}>
      <div style={pill}></div>
      <p style={position}>Progress Tracker</p>
    </div>
  );
}

const position = {
  position: "absolute",
  top: "47px",
  left: "90px",
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
  width: "18px",
  height: "40px",
  borderRadius: "20px",
  position: "absolute",
  top: "40px",
  left: "50px",
};

export default ProgressTracker;
