"use client"
import { useState } from 'react';
import MechClassForm from './MechClassForm';
import EcompClassForm from './EcompClassForm';
import CompClassForm from './CompClassForm';
import ItClassForm from './ItClassForm';

const ClassNavigation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const handleSlideTo = (index: number) => {
    setCurrentSlide(index);
  };

  const classroomDetails = [
    { name: 'MECH', component: <MechClassForm /> },
    { name: 'ECOMP', component: <EcompClassForm /> },
    { name: 'COMP', component: <CompClassForm /> },
    { name: 'IT', component: <ItClassForm /> },
  ];

  return (
    <div id="default-carousel" className="relative w-full flex flex-col items-center">
      {/* Classroom indicators */}
      <div className="flex space-x-4 mt-8">
        {classroomDetails.map((classroom, index) => (
          <button
            key={`slide-indicator-${index}`}
            type="button"
            className={`w-20 h-8 rounded-lg border border-gray-500 flex items-center justify-center ${
              currentSlide === index ? 'bg-gray-500 text-white' : 'bg-white text-black'
            }`}
            aria-current={currentSlide === index ? 'true' : 'false'}
            aria-label={classroom.name}
            onClick={() => handleSlideTo(index)}
            data-carousel-slide-to={index}
          >
            {classroom.name}
          </button>
        ))}
      </div>
      {/* Carousel wrapper */}
      <div className="relative h-96 overflow-hidden rounded-lg mt-8">
        {classroomDetails.map((classroom, index) => (
          <div
            key={`carousel-item-${index}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            data-carousel-item
          >
            {classroom.component}
          </div>
        ))}
      </div>
      {/* Slider controls */}
      {/* <div className="flex mt-8">
        <button
          type="button"
          className="px-4 py-2 mr-4 rounded border border-gray-500"
          data-carousel-prev
          onClick={handlePrevSlide}
        >
          Previous
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded border border-gray-500"
          data-carousel-next
          onClick={handleNextSlide}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default ClassNavigation;
