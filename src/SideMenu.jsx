import React from "react";
import smalllogo from "../assets/smalllogo.png";

function SideMenu() {
  return (
    <>
      <div style={container}>
        <a href="/">
          <img src={smalllogo} style={{ ...position, ...logo }} />
        </a>
        <p style={{ ...position, top: "30%", left: "4%" }}>Vehicles:</p>
        <p
          style={{
            ...position,
            top: "35%",
            fontWeight: "normal",
            fontSize: "18px",
          }}
        >
          BMW E30
        </p>
        <p
          style={{
            ...position,
            top: "40%",
            fontWeight: "normal",
            fontSize: "18px",
          }}
        >
          Volvo XC40
        </p>
        <a style={{ ...position, ...button1 }} href="/">
          Convert a New Vehicle
        </a>
        <a style={{ ...position, ...button2 }} href="/">
          Log Out
        </a>
      </div>
    </>
  );
}

const container = {
  backgroundColor: "#035F48",
  width: "18vw",
  height: "100vh",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
};

const position = {
  position: "absolute",
  top: "50%",
  left: "9%",
  transform: "translate(-50%, -50%)",
};

const button1 = {
  textDecoration: "none",
  width: "299px",
  height: "45px",
  background: "white",
  borderRadius: "3px",
  color: "#035F48",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "86%",
  border: "none",
};

const button2 = {
  color: "white",
  textDecoration: "none",
  top: "92%",
};

const logo = {
  maxWidth: "250px",
  top: "10%",
};

export default SideMenu;
