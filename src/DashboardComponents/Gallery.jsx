import React from "react";

const images = [
  {
    id: 1,
    src: "https://via.placeholder.com/150",
    alt: "First image",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/150",
    alt: "Second image",
  },
  {
    id: 3,
    src: "https://via.placeholder.com/150",
    alt: "Third image",
  },
];

class Gallery extends React.Component {
  render() {
    return (
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
    );
  }
}

export default Gallery;
