import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./NewsComponents/Slider";
import ThirdNav from "./NewsComponents/ThirdNav";

function News() {
  return (
    <div style={container}>
      <p style={{ position: "relative", height: "8.7%" }}>
        <ThirdNav />
      </p>
      <Slider style={{ position: "relative" }} />
    </div>
  );
}

const container = {
  color: "white",
  backgroundColor: "black",
  height: "95vh",
  width: "100vw",
};

export default News;
