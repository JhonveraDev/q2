// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import a1 from '../../../assets/images/home/home-popular-choice-01.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export const PopularChoices = () =>  {
  return (
    <div className='popular-choice-container'>
      <h2>Popular choices</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={a1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a1} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}