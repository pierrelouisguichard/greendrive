import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faShieldHalved,
  faHandHoldingDollar,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";

function Advantages() {
  return (
    <div style={container}>
      <FontAwesomeIcon
        icon={faTruckFast}
        style={{ ...position, ...icons, left: "20%" }}
      />
      <FontAwesomeIcon
        icon={faShieldHalved}
        style={{ ...position, ...icons, left: "37%" }}
      />
      <FontAwesomeIcon
        icon={faHandHoldingDollar}
        style={{ ...position, ...icons, left: "55%" }}
      />
      <FontAwesomeIcon
        icon={faHandshakeAngle}
        style={{ ...position, ...icons, left: "75%" }}
      />
      <div style={{ ...position, left: "24vw" }}>
        <b>Fast and Easy</b>
        <br /> <br />
        Complete one simple form, <br />
        bring your car to the garage <br />
        and we'll take cake of the rest.
      </div>
      <div style={{ ...position, left: "42vw" }}>
        <b>Trustworthy</b> <br /> <br />
        GreenDrive partners with <br />
        feedback-rated mechanics <br />
        for the best customer satisfaction
      </div>
      <div style={{ ...position, left: "60vw" }}>
        <b>Great Prices</b> <br /> <br />
        Greendrive's supplier relationships <br />
        yield high-quality parts at <br />
        low prices, saving you up to 25%.
      </div>
      <div style={{ ...position, left: "78vw" }}>
        <b>Helpful</b> <br />
        <br /> Need assistance? Email us
        <br /> or use our contact form. <br />
        We are here to help.
      </div>
    </div>
  );
}

const icons = {
  height: "5%",
  top: "9%",
  color: "#035F48",
};

const container = {
  backgroundColor: "#e4e4e4",
  height: "30vh",
  width: "100vw",
  fontFamily: "Bahnschrift, sans-serif",
  color: "#035F48",
  fontSize: "18px",
};

const position = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default Advantages;
