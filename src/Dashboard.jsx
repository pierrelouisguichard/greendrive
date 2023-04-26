import React from "react";
import SideMenu from "./DashboardComponents/SideMenu";
import TopMessage from "./DashboardComponents/TopMessage";
import Gallery from "./DashboardComponents/Gallery";
import CostTracker from "./DashboardComponents/CostTracker";
import ProgressTracker from "./DashboardComponents/ProgressTracker";

function Dashboard() {
  return (
    <div>
      <Gallery />
      <TopMessage />
      <SideMenu />
      <CostTracker />
      <ProgressTracker />
    </div>
  );
}

export default Dashboard;
