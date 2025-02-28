"use client"
import React from 'react';

const CarouselCard = ({ imageUrl, text1, text2, isNextSymbol, isSmallCard = false, isDateText }) => {
  return (
    <div className={isSmallCard ? "w-[343px] h-[431px] rounded-[20px] overflow-hidden relative shadow-lg" : "w-[800px] h-[445px] rounded-[20px] overflow-hidden relative shadow-lg"}>
      <img src={imageUrl} alt="Card Image" className="w-full h-[100%] object-cover" />
      <div className="absolute bottom-0 flex justify-between left-0 right-0">
        {!isSmallCard && <div className=" text-white text-2xl p-3">
          {isDateText && <p className="text-base font-bold mb-4 font-montserrat">{isDateText}</p>}
          <p className="text-lg font-medium w-[538px] mb-4 font-montserrat">{text1}</p>
          <button className="w-[159px] h-[49px] rounded-[80px] bg-white text-black mb-10 font-semibold text-sm font-montserrat">
            {text2}
          </button>
        </div>}
        {isNextSymbol && <div className=" text-white text-2xl p-3 flex items-end">
          →
      </div>}
      </div>
      <div>
      We Learn, We Engage, We Celebrate,
      </div>
    </div>
  );
};

export default CarouselCard;