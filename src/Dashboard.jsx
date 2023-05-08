import React from "react";
import SideMenu from "./DashboardComponents/SideMenu";
import TopMessage from "./DashboardComponents/TopMessage";
import Gallery from "./DashboardComponents/Photos";
import CostTracker from "./DashboardComponents/CostTracker";
import ProgressTracker from "./DashboardComponents/ProgressTracker";

function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ zIndex: 999 }}>
        <SideMenu />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ zIndex: 1 }}>
          <TopMessage />
        </div>
        <div
          style={{
            ...position,
            ...rec,
            zIndex: 999,
            left: "45%",
            top: "49.5%",
          }}
        ></div>
        <div style={{ ...position, ...rec, zIndex: 999, left: "80%" }}></div>
        <div
          style={{ ...position, ...rec, zIndex: 999, left: "60%", top: "88%" }}
        ></div>
        <p style={{ ...position, zIndex: 999, left: "38%", top: "82%" }}>
          Selecting and ordering <br /> appropriate hybrid
          <br />
          conversion kit.
        </p>
        <p style={{ ...position, zIndex: 999, left: "49%", top: "82%" }}>
          Removing engine <br /> and drivetrain <br /> components.
        </p>
        <p style={{ ...position, zIndex: 999, left: "60%", top: "82%" }}>
          Installing the <br /> new hybrid <br /> conversion kit.
        </p>
        <p style={{ ...position, zIndex: 999, left: "71%", top: "82%" }}>
          Testing and fine- <br /> tuning the hybrid <br /> system.
        </p>
        <p style={{ ...position, zIndex: 999, left: "82%", top: "82%" }}>
          All done! <br /> The vehicle is ready <br /> for collection.
        </p>
        <Gallery />
        <CostTracker />
        <ProgressTracker />
      </div>
    </div>
  );
}
const position = {
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "18px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const rec = {
  backgroundColor: "#035F48",
  width: "400px",
  height: "100px",
};

export default Dashboard;
