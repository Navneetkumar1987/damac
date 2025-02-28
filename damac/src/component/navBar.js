"use client"
import React, { useState } from 'react';
import Card from "./card";
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const CardMaping = [
    { imageUrl: "Card1.png", text1: "We Enable", text2: "Aspirations" },
    { imageUrl: "Card2.jpg", text1: "we Offer ", text2: "Careers" },
    { imageUrl: "Card3.jpg", text1: "We", text2: "Cars" },
    { imageUrl: "Card4.jpg", text1: "we are", text2: " Global" },
  ]

  return (<>
     <div className="bg-[url('/headerBgImage.jpg')] bg-cover bg-center w-full">
      <nav className=" p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Image className="h-auto max-w-full w-[137px] h-[17px]" src="logoImage.png" alt="image description" width={137} height={17} />
         </div>
          <div className="hidden md:flex space-x-4">
            <div className="relative group p-4">
              <button className="text-gray-300 hover:text-white flex items-center font-semibold text-base font-montserrat">
                Our Story
            </button>
            </div>
            <div className="relative group p-4">
              <button className="text-gray-300 hover:text-white flex items-center font-semibold text-base font-montserrat">
                Policies
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-700 text-white mt-1 rounded shadow-lg font-semibold text-base font-montserrat">
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Policy 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Policy 2</a>
              </div>
            </div>
            <div className="relative group p-4">
              <button className="text-gray-300 hover:text-white flex items-center font-semibold text-base font-montserrats">
                Self Service
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-700 text-white mt-1 rounded shadow-lg font-semibold text-base font-montserrats">
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Submenu 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Submenu 2</a>
              </div>
            </div>
            <div className="relative group p-4">
              <button className="text-gray-300 hover:text-white flex items-center font-semibold text-base font-montserrats">
                Benefits and Perks
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-700 text-white mt-1 rounded shadow-lg font-semibold text-base font-montserrats">
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Benefit and Perk 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-600">Benefit and Perk 2</a>
              </div>
            </div>
            <a href="#" className="text-gray-300 hover:text-white p-4 font-semibold text-base font-montserrat">Life at DAMAC</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-gray-300 hover:text-white focus:outline-none">
              <Image src="search.svg" alt="search" className="w-8 h-8" width={32} height={32}/>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white focus:outline-none mr-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <Image src="userImage.jpg" alt="User Image" className="w-10 h-10 rounded-full mr-4 " widht={40} height={40} />
              <div>
                <div className="text-white text-sm font-semibold text-sm font-poppins">Muhammad Khalid</div>
                <div className="text-xs text-white font-semibold text-xs font-poppins">Technical Web Lead</div>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-700 text-white mt-2 rounded shadow-lg">
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">Our Story</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">Policies</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">Self Service</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">Benefits and Perks</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">Life at DAMAC</a>
          </div>
        )}
      </nav>
      <div className="text-center my-4 p-10">
        <p className="text-xl text-white mb-6 mt-10 tracking-[.75rem] text-lg font-extrabold Pglo font-montserrat">HELLO MOHAMMAD KHALID</p>
        <p className="text-xl  flex justify-center text-white mb-8">
          <Image src="peoplefirst.png" alt="people first" width={32} height={32}/>
        </p>
        <p className="text-xl text-white mb-8 text-[22px] font-normal font-montserrat">our commitment to nurture every single member of Damac</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[1440px] h-[385px] rounded-[20px] flex justify-center items-center text-center p-4 gap-4">
          {
            CardMaping?.map((card, index) => <Card imageUrl={card?.imageUrl} text1={card?.text1} text2={card?.text2} isNextSymbol key={index} />)
          }
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;