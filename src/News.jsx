import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./ForumComponents/Slider";

function News() {
  return (
    <div style={container}>
      <Slider />
    </div>
  );
}

const container = {
  color: "white",
  backgroundColor: "black",
  height: "100vh",
  width: "100vw",
};

export default News;
