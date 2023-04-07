import React from "react";

function Advantages() {
  return (
    <div style={container}>
      <div style={position}>hello</div>
    </div>
  );
}

const container = {
  backgroundColor: "#e4e4e4",
  height: "30vh",
  width: "100vw",
  fontFamily: "Bahnschrift, sans-serif",
  color: "black",
  fontSize: "24px",
};

const position = {
  position: "absolute",
  top: "15%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default Advantages;
