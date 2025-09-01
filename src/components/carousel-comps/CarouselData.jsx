import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router";



function CarouselData ({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
        
    }



    return (
        <div className="relative w-full h-screen flex items-center justify-center">
        <button
            onClick={prevSlide}
         className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20 hover:text-gray-300"
            >
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <section className="bg-green-900 border border-white p-6  w-1/2 h-1/2 mx-auto my-auto flex flex-col items-center justify-center fixed inset-0 rounded-lg p-6">
         <h3 className="text-white text-3xl font-pixelify font-bold pb-4 pt-1">{slides[currentIndex].title}</h3>
         <img src={slides[currentIndex].img} className="w-1/2 h-auto object-contain px-4"/>
         <p className="text-white pt-4 flex items-center justify-center">{slides[currentIndex].text}</p>
         {currentIndex === slides.length - 1 ? (
            <Link to="/kata-gallery">
                <button className="bg-green-600 border border-white m-2 p-2 rounded-sm text-white font-bold cursor-pointer">Go to Kata Gallery</button>
            </Link>
         ) : null}
        </section>

        <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-4xl z-20 hover:text-gray-300"
         >
        <FontAwesomeIcon icon={faArrowRight} />
         </button>
     </div>
  );



}

export default CarouselData;