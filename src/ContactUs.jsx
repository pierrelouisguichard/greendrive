import React from "react";
import smalllogo from "../assets/smalllogo.png";

function ContactUs() {
  return (
    <div style={container}>
      <img src={smalllogo} alt="smalllogo" style={{ ...position, ...logo }} />
      <div style={{ ...position, left: "20.5%", top: "28%" }}>
        <b>Our Office</b> <br />
        Office 3A-C2 <br />
        Business Gate Complex <br />
        London <br />
        W2T 4HE <br />
        United Kingdom <br />
        contact@greendrive.co.uk
      </div>
      <div style={{ ...position, transform: "none", top: "8%" }}>
        First Name
      </div>
      <input
        type="text"
        style={{ ...position, ...textFields, top: "11%" }}
      ></input>
      <div style={{ ...position, transform: "none", top: "16%" }}>Email</div>
      <input
        type="text"
        style={{ ...position, ...textFields, top: "19%" }}
      ></input>
      <div style={{ ...position, transform: "none", top: "24%" }}>Message</div>
      <input
        type="text"
        style={{ ...position, ...textFields, top: "28%", height: "6%" }}
      ></input>
      <div style={{ ...position, ...line }}></div>
      <a style={{ ...position, ...button }} href="/">
        Submit
      </a>
      <div style={{ ...position, top: "47%" }}>
        Copyright © 2023 All Rights Reserved
      </div>
    </div>
  );
}

const line = {
  width: "70vw",
  height: "2px",
  top: "43%",
  backgroundColor: "#024A39",
};

const logo = {
  maxWidth: "250px",
  top: "11%",
  left: "21%",
};

const container = {
  backgroundColor: "#035F48",
  height: "50vh",
  width: "100vw",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "18px",
};

const position = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const textFields = {
  color: "white",
  backgroundColor: "rgb(0,0,0,0)",
  width: "35vw",
  border: "none",
  borderBottom: "2px solid white",
  transform: "none",
};

const button = {
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
  left: "78%",
  top: "39%",
};

export default ContactUs;
