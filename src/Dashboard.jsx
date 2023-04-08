import React from "react";
import SideMenu from "./SideMenu";
import TopMessage from "./TopMessage";
import Gallery from "./Gallery";
import CostTracker from "./CostTracker";
import ProgressTracker from "./ProgressTracker";

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
