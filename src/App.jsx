import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import img1 from '../assets/Background.png';
import img2 from '../assets/4-Ground.png';
import img3 from '../assets/3-Ground.png';
import img4 from '../assets/2-Ground.png';
import img5 from '../assets/1-Ground.png';
import img6 from '../assets/Logo.png';
import Video from './Video';
import NavBar from './NavBar.jsx';

function App() {
  const paralStyle = {
    height: '80vh',
    backgroundImage: `url(${img1})`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
  };

  const videoStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
    height: '40%',
    position: 'absolute',
    left: '15%',
    right: '15%'
  };


  return (
    <div>
      <Parallax pages={2} config={{ tension: 0, friction: 0 }} >
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
        <ParallaxLayer speed={-.2}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img4})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer>
          <div style={{ ...paralStyle, backgroundImage: `url(${img5})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={.8}>
          <div style={{ backgroundColor: 'grey', height: '100vh' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={.9} style={videoStyle}>
          <Video /> 
        </ParallaxLayer>
        <ParallaxLayer offset={0}>
          <NavBar />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
