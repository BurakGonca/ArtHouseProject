import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assets/style/main.css';

import photo1 from '../assets/img/slide1.jpg';
import photo2 from '../assets/img/slide2.jpg';
import photo3 from '../assets/img/slide3.jpg';
import photo4 from '../assets/img/slide4.jpg';
import photo5 from '../assets/img/slide5.jpg';

const Main = () => {
  return (
    <Swiper
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide> <img src={photo4} alt="Slide 4" /> </SwiperSlide>
      <SwiperSlide> <img src={photo5} alt="Slide 5" /> </SwiperSlide>
      <SwiperSlide> <img src={photo2} alt="Slide 2" /> </SwiperSlide>
      <SwiperSlide> <img src={photo3} alt="Slide 3" /> </SwiperSlide>
      <SwiperSlide> <img src={photo1} alt="Slide 1" /> </SwiperSlide>
    </Swiper>
  );
}

export default Main;
