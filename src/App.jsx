import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import img1 from '../assets/Background.png';
import img2 from '../assets/4-Ground.png';
import img3 from '../assets/3-Ground.png';
import img4 from '../assets/2-Ground.png';
import img5 from '../assets/1-Ground.png';
import img6 from '../assets/Logo.png';

function App() {
  const paralStyle = {
    height: '80vh',
    backgroundImage: `url(${img1})`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
  };


  return (
    <div>
      <Parallax pages={2} config={{ tension: 0, friction: 0 }} >
        <ParallaxLayer speed={-.2}>
          <div style={paralStyle}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-.2}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img6})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={-.1}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img2})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={.1}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img3})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={.3}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img4})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer speed={.6}>
          <div style={{ ...paralStyle, backgroundImage: `url(${img5})` }}></div>
        </ParallaxLayer>
        <div style={{ height: '100vh' }}></div>
      </Parallax>
    </div>
  );
}

export default App;
