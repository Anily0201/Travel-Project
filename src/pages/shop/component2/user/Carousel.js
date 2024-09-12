import React from 'react'
import {Swiper , SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./Carousel.css"

const Carousel = () => {


  return (
    <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination,  Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.sliderrevolution.com/wp-content/uploads/2021/09/wildlife_gif.gif" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" />
      </SwiperSlide>
      
      
      <SwiperSlide>
        <img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Carousel
