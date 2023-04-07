import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";

function OurImpact() {
  return (
    <div style={container}>
      <div style={position}>
        <b>Our impact so far</b>
        <br />
        <span style={{ color: "#72A599", fontSize: "18px" }}>
          Over 15,000 cars converted since 2013
        </span>
      </div>
      <div style={{ ...position, ...line }}></div>
      <img src={img1} style={{ ...position, ...plant }} />
      <img src={img2} style={{ ...position, ...turbine }} />
      <div style={{ ...position, ...text1 }}>
        <b>29 million</b>
        <br />
        <span style={{ color: "#72A599", fontSize: "18px" }}>Trees funded</span>
      </div>
      <div style={{ ...position, ...text2 }}>
        <b>1.2 million</b>
        <br />
        <span style={{ color: "#72A599", fontSize: "18px" }}>
          Tonnes of <span>CO&#8322;</span> avoided
        </span>
      </div>
    </div>
  );
}

const container = {
  backgroundColor: "#035F48",
  height: "37vh",
  width: "100vw",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "24px",
};

const position = {
  position: "absolute",
  top: "18%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
};

const line = {
  height: "90px",
  width: "2px",
  top: "28%",
  backgroundColor: "#024A39",
};

const plant = {
  maxWidth: "75px",
  top: "25%",
  transform: "translateX(-250px)",
};

const turbine = {
  maxWidth: "70px",
  top: "24.5%",
  transform: "translateX(30px)",
};

const text1 = {
  top: "25%",
  transform: "translateX(-150px)",
};

const text2 = {
  top: "25%",
  transform: "translateX(120px)",
  textAlign: "left",
};

export default OurImpact;
