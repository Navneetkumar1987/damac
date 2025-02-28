"use client"
import { useState } from 'react';
import CarouselCard from '../component/carouselCard';


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Middle card is active initially


  const CardMaping = [
    { imageUrl: "carousel1.jpg", primaryText: "Damac awards $160m contracts to engineering construction and reconstruction company", buttonText: "Read more" },
    { imageUrl: "carousel2.jpg", primaryText: "Damac awards $160m contracts to engineering construction and reconstruction company", buttonText: "Read more" },
    { imageUrl: "carousel3.jpg", primaryText: "Damac awards $160m contracts to engineering construction and reconstruction company", buttonText: "Read more" },
    { imageUrl: "carousel4.jpg", primaryText: "Damac awards $160m contracts to engineering construction and reconstruction company", buttonText: "Read more" },
    { imageUrl: "carousel5.jpg", primaryText: "Damac awards $160m contracts to engineering construction and reconstruction company", buttonText: "Read more" },
  ]
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? CardMaping.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === CardMaping.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center rounded-full animate-scale-ellipse">
      <div className="flex space-x-4 rounded-full">
        {CardMaping.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${index === activeIndex ? 'text-white' : ''}`}
          >
            { (
              <div>
                <CarouselCard imageUrl={card?.imageUrl} text1={card?.primaryText} text2={card?.buttonText} isSmallCard={index !== activeIndex} isDateText={"September 20, 2023"} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex space-x-4 mt-4">

        <button onClick={handlePrev} className="text-gray-500 hover:text-gray-700">
         <p className="w-[43px] text-3xl">&larr;</p>
        </button>
        <button onClick={handleNext} className="text-gray-500 hover:text-gray-700">
         <p className="w-[43px] text-3xl">&rarr;</p>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

