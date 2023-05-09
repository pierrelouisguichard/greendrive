import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Video() {
  return (
    <div style={container}>
      <div className="ratio ratio-16x9" style={position}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/o8idQHB7f08"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

const container = {
  backgroundColor: "#c8c8c8",
  height: "80vh",
  width: "100vw",
};

const position = {
  position: "absolute",
  height: "65%",
  width: "65%",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default Video;
