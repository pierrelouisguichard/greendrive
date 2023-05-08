import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Forum from "./Forum";
import Dashboard from "./Dashboard";
import StaffDashboard from "./StaffDashboard";
import Login from "./OtherComponents/Login";
import Register from "./OtherComponents/Register";
import ContactUs from "./HomeComponents/ContactUs";
import Video from "./HomeComponents/Video";
import OurImpact from "./HomeComponents/OurImpact";
import Advantages from "./HomeComponents/Advantages";
import NavBar from "./HomeComponents/NavBar";
import Photos from "./DashboardComponents/Photos";
import Error from "./OtherComponents/Error";
import ProgressSteps from "./DashboardComponents/ProgressSteps";
import Gallery from "./DashboardComponents/Gallery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staffdashboard" element={<StaffDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/video" element={<Video />} />
        <Route path="/ourimpact" element={<OurImpact />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/error" element={<Error />} />
        <Route path="/progresssteps" element={<ProgressSteps />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
