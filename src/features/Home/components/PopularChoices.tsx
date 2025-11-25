// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import a1 from '../../../assets/images/home/home-popular-choice-01.png';
import a2 from '../../../assets/images/home/home-popular-choice-02.png';
import a3 from '../../../assets/images/home/home-popular-choice-03.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export const PopularChoices = () => {
  return (
    <div className='popular-choice-container'>
      <h2 className='popular-choice-title'>Most popular choices</h2>
      <Swiper
        centeredSlides={true}
        loop={true}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={a1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={a3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}