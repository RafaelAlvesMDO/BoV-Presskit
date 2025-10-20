// GameImageSliderCoverflow.tsx
import { useState } from "react";

import Image1 from "../assets/About-Image.png";
import Image2 from "../assets/Home-Background.jpg";
import Image3 from "../assets/BoV-Logo.png";
// import Image4 from "../assets/About-Image.png";
// import Image5 from "../assets/About-Image.png";
// import Image6 from "../assets/About-Image.png";

const images = [Image1, Image2, Image3];

const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="bg-gray-800 py-20 px-6 md:px-20 text-white relative">
      <h2 className="text-4xl font-bold mb-16 text-center">Galeria do Jogo</h2>

      {/* Container do slider */}
      <div className="relative w-full max-w-5xl h-96 mx-auto overflow-visible flex justify-center items-center">
        {images.map((img, index) => {
          const isCurrent = index === current;
          const offset = index - current; // posição relativa ao slide central

          return (
            <img
              key={index}
              src={img}
              alt={`Screenshot ${index + 1}`}
              className={`
                absolute transition-all duration-500 ease-in-out
                ${isCurrent ? "scale-110 z-20 opacity-100" : "scale-90 z-10 opacity-50"}
                ${offset === -1 ? "-translate-x-40" : ""}
                ${offset === 1 ? "translate-x-40" : ""}
                ${offset < -1 ? "-translate-x-80" : ""}
                ${offset > 1 ? "translate-x-80" : ""}
                w-96 h-96 rounded-lg shadow-lg
              `}
            />
          );
        })}

        {/* Botões */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-full p-3 z-30"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-full p-3 z-30"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default GalleryCarousel;
