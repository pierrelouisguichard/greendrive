import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import img1 from "../assets/Background.png";
import img2 from "../assets/4-Ground.png";
import img3 from "../assets/3-Ground.png";
import img4 from "../assets/2-Ground.png";
import img5 from "../assets/1-Ground.png";
import img7 from "../assets/0-Ground.png";
import img6 from "../assets/Logo.png";
import Video from "./Video";
import NavBar from "./NavBar.jsx";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <>
      <Parallax pages={3} config={{ tension: 0, friction: 0 }}>
        <ParallaxLayer offset={0}>
          <NavBar />
        </ParallaxLayer>
        <ParallaxLayer speed={0}>
          <div style={paralStyle}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.55}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img2})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.4}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img3})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.65}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img6})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.3}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img4})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-0.15}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img5})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer>
          <div style={{ ...paralStyle, backgroundImage: `url(${img7})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.89}>
          <div style={{ backgroundColor: "#035F48", height: "120vh" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5}>
          <Video />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5}>
          <ContactUs />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

const paralStyle = {
  height: "90vh",
  backgroundImage: `url(${img1})`,
  backgroundRepeat: "repeat-x",
  backgroundSize: "auto 100%",
  backgroundPosition: "center",
};

export default Home;
