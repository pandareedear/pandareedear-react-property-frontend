import React, { useState } from "react";

export default function CarouselPopular() {
  const slides = [
    {
      image: "src/assets/batcat.jpg",
      caption: "Caption for Slide 1",
    },
    {
      image: "src/assets/gingerbread.jpeg",
      caption: "Caption for Slide 2",
    },
    {
      image: "src/assets/phatGus.webp",
      caption: "Caption for Slide 3",
    },
    {
      image: "src/assets/hamster.jpeg",
      caption: "Caption for Slide 4",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] mt-[60px] mb-[60px]">
      {/* Image and Caption Section */}
      <div className="relative flex items-center justify-center h-[400px] bg-gray-100 rounded-lg overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-start transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-[400px] h-auto object-cover"
            />
            {/* Caption */}
            <div className="p-4 h-[400px] w-auto">
              <h3 className="text-xl font-semibold">{slide.caption}</h3>
              <p className="text-gray-600 mt-2">{slide.caption}.</p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute h-12 w-12 font-bold left-0 bg-opacity-50 top-1/2 transform -translate-y-1/2 text-blue-500 bg-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute h-12 w-12 font-bold right-0 bg-opacity-50 top-1/2 transform -translate-y-1/2 text-blue-500 bg-white p-2 rounded-full"
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-400 hover:bg-blue-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
