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
        <Gallery />
        <CostTracker />
        <ProgressTracker />
      </div>
    </div>
  );
}

export default Dashboard;
