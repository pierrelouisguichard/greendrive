import React from "react";
import SideMenu from "./DashboardComponents/SideMenu";
import TopMessage from "./DashboardComponents/TopMessage";
import Gallery from "./DashboardComponents/Gallery";
import CostTracker from "./DashboardComponents/CostTracker";
import ProgressTracker from "./DashboardComponents/ProgressTracker";
import { Button } from "react-bootstrap";

function StaffDashboard() {
  return (
    <div>
      <Gallery />
      <TopMessage />
      <SideMenu />
      <CostTracker />
      <ProgressTracker />
      <div style={{ ...position, top: "52%", left: "60%" }}>
        <Button variant="outline-light" style={button}>
          UPDATE
        </Button>
      </div>
      <div style={{ ...position, top: "52%", left: "92%" }}>
        <Button variant="outline-light" style={button}>
          UPDATE
        </Button>
      </div>
      <div style={{ ...position, top: "93%", left: "92%" }}>
        <Button variant="outline-light" style={button}>
          UPDATE
        </Button>
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

const button = {
  fontFamily: "Bahnschrift, sans-serif",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "20px",
};

export default StaffDashboard;
