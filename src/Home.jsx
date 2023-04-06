import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import img1 from '../assets/Background.png';
import img2 from '../assets/4-Ground.png';
import img3 from '../assets/3-Ground.png';
import img4 from '../assets/2-Ground.png';
import img5 from '../assets/1-Ground.png';
import img7 from '../assets/0-Ground.png';
import img6 from '../assets/Logo.png';
import Video from './Video';
import NavBar from './NavBar.jsx';
import ContactUs from './ContactUs'

function Home() {
  return (
    <div>
      <Parallax pages={2.5} config={{ tension: 0, friction: 0 }} >
        <ParallaxLayer speed={0}>
          <div style={paralStyle}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-.55}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img2})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-.4}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img3})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-.65}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img6})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-.3}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img4})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-.1}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img5})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer>
          <div style={{ ...paralStyle, backgroundImage: `url(${img7})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.89}>
          <div style={{ backgroundColor: '#035F48', height: '30vh', position: 'relative' }}>
            <p style={{ color: '#72A599', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '2rem' }}>Over 15,000 vehicles converted since 2013.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} style={videoStyle}>
          <Video /> 
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <NavBar />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <ContactUs />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

const paralStyle = {
  height: '90vh',
  backgroundImage: `url(${img1})`,
  backgroundRepeat: 'repeat-x',
  backgroundSize: 'auto 100%',
  backgroundPosition: 'center',
};

const videoStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '1000px',
  height: '400px',
  position: 'absolute',
  left: '15%',
  right: '15%'
};

export default Home;
