import React, { useState } from "react";
import "./slider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function Slider({ games }) {
  const gamesImages = games.map((game) => game.gameImg);

  const [current, setCurrent] = useState(0);
  const length = gamesImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(gamesImages) || gamesImages.length <= 0) {
    return null;
  }

  return (
    <div>
      <div className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {gamesImages.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
