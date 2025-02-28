// import './globals.css';
import Navbar from "../component/navBar"
import Footer from "../component/footer"
import RewardCard from "../component/rewardCard"
import Carousel from "../component/carousel"
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center my-4 p-9">
        <p className="text-xl text-black mb-6 mt-10 text-lg text-[50px] font-medium mb-8 font-termina-test">What’s happening</p>
        <p className="text-xl text-black mb-6 mt-10 text-lg text-[22px] font-normal mb-8 font-montserrat">DAMAC continues to make headlines across globe in different sectors and industries</p>
      </div>
      <Carousel />
      <div className="text-center my-4 p-9">
        <img src="/Scrollingtext.png" alt="scrollingText" className="mx-auto scrolling-image {
  display: inline-block;
  white-space: nowrap;
  animation: scroll 10s linear infinite;
}" />
      </div>
      <RewardCard />
      <Footer />
    </div>
  );
}
