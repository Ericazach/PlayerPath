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
      <div className="slider flex ">
        <FaArrowAltCircleLeft className="left-arrow me-10" onClick={prevSlide} />
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
        <FaArrowAltCircleRight className="right-arrow ms-10" onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Slider;
