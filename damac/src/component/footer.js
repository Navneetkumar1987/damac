"use client";

const Footer = () => {
    return (
        <footer className="footer h-[156px] bg-gray-800 text-white flex flex-col md:flex-row items-center justify-between px-4 md:px-[293.65px]">
            <div className="text-lg mb-2 md:mb-0">
            <img className="h-auto max-w-full" src="logoImage.png" alt="image description"/>
            </div>
            <div className="text-lg font-montserrat">@ 2023 DAMAC GROUP. ALL RIGHTS RESERVED</div>
        </footer>
    );
};

export default Footer;