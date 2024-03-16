import React from "react";
import Hero from "../component/hero/Hero";
import NatureVid from "../component/assets/head.mp4.mp4";
// import NatureVid from "../component/assets/video/main.mp4";
import Places from "../component/places/Places";
import Testimonial from "../component/Testimonial/Testimonial";
import Banner from "../component/Banner/Banner";
import BannerPic from "../component/BannerPic/BannerPic";
import BannerImg from "../component/assets/cover-women.jpg";
import Banner2 from "../component/assets/travel-cover2.jpg";
import OrderPopup from "../component/OrderPopup/OrderPopup";
import Main from "../component/main/Main";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
      
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places 
        handleOrderPopup={handleOrderPopup} 
        />
        <BannerPic img={BannerImg} />
       <Main />
        <Banner />
        <BannerPic img={Banner2} />
       
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;