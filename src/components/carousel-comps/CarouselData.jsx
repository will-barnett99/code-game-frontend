import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/clerk-react";

function CarouselData({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === slides.length - 1;

  const prevSlide = () => !isFirst && setCurrentIndex((i) => i - 1);
  const nextSlide = () => !isLast && setCurrentIndex((i) => i + 1);

  const slide = slides[currentIndex];

  const arrowBox = "w-14 h-14 shrink-0 flex items-center justify-center";

  return (
    <main className="h-[calc(100vh-72px)] flex justify-center items-center mx-auto gap-8 px-4">
      <button
        onClick={prevSlide}
        disabled={isFirst}
        className={`${arrowBox} ${
          isFirst ? "cursor-default" : "cursor-pointer"
        }`}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className={`text-4xl text-white transition-transform duration-200 ease-out
                      ${
                        isFirst
                          ? "invisible"
                          : "hover:-translate-y-2 hover:scale-105"
                      }`}
          style={{ filter: "drop-shadow(2px 2px 2px black)" }}
        />
      </button>

      <section
        className="
          bg-green-900 border border-white rounded-sm
          w-full max-w-2xl h-[480px]
          p-6
          grid grid-rows-[auto,1fr,auto,auto] gap-4
          justify-items-center text-center
        "
      >
        <h3 className="text-white text-2xl font-pixelify font-bold">
          {slide.title}
        </h3>

        <div className="w-full h-[200px] flex items-center justify-center">
          <img
            src={slide.img}
            alt=""
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <p className="text-white text-lg leading-relaxed">{slide.text}</p>

        {isLast ? (
          <div className="flex gap-3">
            <Link to="/1">
              <button className="w-32 h-12 bg-green-600 border border-white rounded-sm text-white font-bold cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-2 flex items-center justify-center">
                Play now!
              </button>
            </Link>

            <SignInButton>
              <button className="w-32 h-12 bg-yellow-600 border border-white rounded-sm text-white font-bold cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-2 flex items-center justify-center">
                Sign in
              </button>
            </SignInButton>
          </div>
        ) : (
          <div />
        )}
      </section>

      <button
        onClick={nextSlide}
        disabled={isLast}
        className={`${arrowBox} ${
          isLast ? "cursor-default" : "cursor-pointer"
        }`}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className={`text-4xl text-white transition-transform duration-200 ease-out
                      ${
                        isLast
                          ? "invisible"
                          : "hover:-translate-y-2 hover:scale-105"
                      }`}
          style={{ filter: "drop-shadow(2px 2px 2px black)" }}
        />
      </button>
    </main>
  );
}

export default CarouselData;
