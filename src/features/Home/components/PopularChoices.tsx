// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { popularChoicesData } from '../index';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export const PopularChoices = () => {
  
  const products = popularChoicesData;

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
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <img src={product.img} alt={product.text} />
            <p>{product.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}