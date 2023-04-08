import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import Home from "./Home";
import News from "./News";
import Forum from "./Forum";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import ContactUs from "./ContactUs";
import Video from "./Video";
import OurImpact from "./OurImpact";
import Advantages from "./Advantages";
import NavBar from "./NavBar";
import TopMessage from "./TopMessage";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/video" element={<Video />} />
          <Route path="/ourimpact" element={<OurImpact />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/topmessage" element={<TopMessage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
