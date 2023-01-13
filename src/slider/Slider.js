import React from "react";
import "./Slider.css";

function Slider({ popular }) {
  return (
    <div className="slider">
      <a href="#slide-1">1</a>
      <a href="#slide-2">2</a>
      <a href="#slide-3">3</a>
      <a href="#slide-4">4</a>

      <div className="slides">
        {popular.map((item, index) => (
          <div id={`slide-${index + 1}`} key={index}>
            <img className="ax" src={item.images[1]} alt={item.title} />
            <p className="title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
