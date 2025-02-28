"use client"
import React from 'react';
import Card from '../component/card'
const RewardCard = () => {
    const CardMaping = [
        { imageUrl: "smallCard1.jpg", text1: "Long Service", text2: "Awards", isDateText: 'Mar 2019' },
        { imageUrl: "smallCard2.jpg", text1: "Achievers", text2: "club", isDateText: 'Dec 2022' },
        { imageUrl: "smallCard3.jpg", text1: "Damac top", text2: "performers", isDateText: 'Sep 2020' },
    ]
    return (
        <div className="flex justify-center items-center mb-35">
            <div className="w-[1440px] h-[733px] bg-[#FBF3EF] rounded-[20px] flex p-10">
                {/* First Section 1*/}
                <div className="w-1/2 flex flex-col justify-between">
                    <div>
                        <div className="mb-19">
                            <img src="/winnerImage.png" alt="Cup Icon" className="w-12 h-12" />
                        </div>
                        <div className="mb-8">
                            <h2 className="text-[40px] font-medium text font-termina-test">Rewards</h2>
                            <h2 className="text-[40px] font-medium text font-termina-test">and Recognition</h2>
                        </div>
                        <div className="mb-8">
                            <p className="text-lg font-normal w-[477px] font-montserrat">
                                DAMAC's reward and recognition program aimed at recognizing our top performing employees.
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="w-[156px] h-[49px] rounded-[80px] bg-black text-white mb-10 font-montserrat">
                            View all events
                        </button>
                    </div>
                    <div className="flex space-x-4">
                            {CardMaping && CardMaping?.map((card, index) => <Card imageUrl={card?.imageUrl} text1={card?.text1} text2={card?.text2} isSmallCard isDateText={card?.isDateText} key={index} />)}
                        </div>
                </div>

                {/* Second Section 2*/}
                <div className="w-1/2 flex justify-center items-center">
                    <div className="w-[656px] h-[629px] rounded-[20px] overflow-hidden relative shadow-lg">
                        <img src={'smallCard1.jpg'} alt="Card Image" className="w-full h-[100%] object-cover" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <button className="mb-2">
                                <img src={'playIcon.jpg'} alt="palyIcon" className="rounded-[50px] mb-4" />
                                <img src={'playvideo.png'} alt="palyIcon" className="bg-color-red" />
                            </button>
                        </div>
                        <div className="absolute bottom-3 w-full flex justify-between items-center p-10">
                            <div className="text-white ">
                                <p className="text-[28px] font-semibold mt-2 font-montserrat">{"Damac Long Service Awards"}</p>
                                <p className="font-semibold font-normal mb-6 font-montserrat">{"To celebrate its growing family of over 2,000 employees,DAMAC Properties has launched the ‘DAMAC Long sService Awards."}</p>
                                <button className="w-[156px] h-[49px] rounded-[90px] bg-white text-black mb-10 p-2">
                                    <p className="text-sm font-semibold font-montserrat">View Details</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RewardCard;