import React from "react";
import img1 from "../../assets/engine1.jpg";
import img2 from "../../assets/engine2.jpg";

const images = [
  {
    id: 1,
    src: img1,
    alt: "First image",
  },
  {
    id: 2,
    src: img2,
    alt: "Second image",
  },
];

class Gallery extends React.Component {
  render() {
    return (
      <div>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            style={{ width: "150px", height: "150px", margin: 10 }}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
