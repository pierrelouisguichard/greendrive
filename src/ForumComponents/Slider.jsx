import Carousel from "react-bootstrap/Carousel";
import img3 from "../assets/news1.jpg";
import img4 from "../assets/news2.jpeg";
import img5 from "../assets/news3.jpg";
import Button from "react-bootstrap/Button";

function Slider() {
  return (
    <Carousel style={style}>
      <Carousel.Item style={{ ...itemStyle, backgroundImage: `url(${img3})` }}>
        <Carousel.Caption style={caption}>
          <h1>The electric car revolution</h1>
          <p>
            The government must do its bit to make new electric vehicles more
            affordable if mass adoption is to be achieved on the road to net
            zero
          </p>
          <Button href="/error" style={button}>
            Read more
          </Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ ...itemStyle, backgroundImage: `url(${img4})` }}>
        <Carousel.Caption style={caption}>
          <h1>Electric cars coming soon</h1>
          <p>
            There are LOTS of electric vehicles that are due to come to market
            in the near future.
          </p>
          <Button href="/error" style={button}>
            Read more
          </Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ ...itemStyle, backgroundImage: `url(${img5})` }}>
        <Carousel.Caption style={caption}>
          <h1>Powering ahead</h1>
          <p>Six new ways to charge an electric car</p>
          <Button href="/error" style={button}>
            Read more
          </Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const style = {
  height: "100vh",
  fontFamily: "Bahnschrift, sans-serif",
  color: "white",
  fontSize: "20px",
};

const itemStyle = {
  height: "100vh",
  backgroundRepeat: "repeat-x",
  backgroundSize: "auto 100%",
  backgroundPosition: "center",
};

const button = {
  backgroundColor: "#035F48",
  border: "none",
  borderWidth: "2px",
  fontSize: "18px",
  padding: "8px 25px",
};

const caption = {
  top: "75%",
};

export default Slider;
