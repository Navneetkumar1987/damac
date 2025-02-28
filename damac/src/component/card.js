"use client"
import React from 'react';

const Card = ({ imageUrl, text1, text2, isNextSymbol, isSmallCard= false, isDateText}) => {
  return (
    <div className={isSmallCard ?"w-[200px] h-[172px] rounded-[20px] overflow-hidden relative shadow-lg":"w-[348px] h-[356px] rounded-[20px] overflow-hidden relative shadow-lg"}>
      <img src={imageUrl} alt="Card Image" className="w-full h-[100%] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <div className="absolute bottom-0 flex justify-between left-0 right-0">
      <div className=" text-white text-2xl p-3">
        {isDateText && <p className="text-sm font-bold font-montserrat">{isDateText}</p>}
        <p className={isSmallCard? "text-sm font-medium" :"text-[22px] font-semibold font-montserrat"}>{text1}</p>
        <p className={isSmallCard? "text-sm font-medium" :"text-[22px] font-semibold font-montserrat"}>{text2}</p>
      </div>
      { isNextSymbol && <div className=" text-white text-2xl p-4 flex items-end">
        →
      </div>}
      </div>
    </div>
  );
};

export default Card;