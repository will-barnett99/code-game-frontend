import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

function CarouselData({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <main className="flex justify-center items-center mx-auto h-screen gap-8 px-4">
      <button onClick={prevSlide} className="text-4xl hover:text-gray-300">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-green-600 transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105"
          style={{ filter: "drop-shadow(2px 2px 2px black)" }}
        />
      </button>
      <section className="bg-green-900 border border-white p-6 w-full max-w-3xl rounded-sm flex flex-col justify-center items-center">
        <h3 className="text-white text-3xl font-pixelify font-bold pb-4 pt-1">
          {slides[currentIndex].title}
        </h3>
        <img
          src={slides[currentIndex].img}
          className="w-1/2 h-auto object-contain px-4"
        />
        <p className="text-white pt-4 flex items-center justify-center">
          {slides[currentIndex].text}
        </p>
        {currentIndex === slides.length - 1 ? (
          <Link to="/kata-gallery">
            <button className="bg-green-600 border border-white m-2 p-2 rounded-sm text-white font-bold cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-100">
              Go to Kata Gallery
            </button>
          </Link>
        ) : null}
      </section>
      <button
        onClick={nextSlide}
        className="text-white text-4xl hover:text-gray-300"
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-green-600 transition-transform duration-200 ease-out hover:-translate-y-2 hover:scale-105"
          style={{ filter: "drop-shadow(2px 2px 2px black)" }}
        />
      </button>
    </main>
  );
}

export default CarouselData;
