import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
import GaugeChart from "./GaugeChart";

function CostTracker() {
  return (
    <div style={container}>
      <div style={pill}></div>
      <p style={{ ...position, top: "47%", left: "80px" }}>
        <FontAwesomeIcon
          icon={faMoneyBillTrendUp}
          size="xl"
          style={{ marginRight: "15px" }}
        />{" "}
        Cost Tracker
      </p>
      <div style={position}>
        <GaugeChart />
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
  width: "46%",
  height: "38%",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  position: "absolute",
  left: "20%",
  top: "18%",
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

export default CostTracker;
