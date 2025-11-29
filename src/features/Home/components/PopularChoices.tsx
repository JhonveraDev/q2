// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { popularChoicesData } from '../index';
import { Pagination } from 'swiper/modules';
import { Button } from '../../../ui/components/Button';
import 'swiper/css';
import 'swiper/css/pagination';

export const PopularChoices = () => {
  const products = popularChoicesData;
  return (
    <div className="popular-choices">
      <h2 className="popular-choices__title">Most popular choices</h2>

      <Swiper
        centeredSlides={true}
        loop={true}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={5}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="popular-choices__slider"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="popular-choices__slide">
            <img
              src={product.img}
              alt={product.text}
              className="popular-choices__image"
            />

            <Button text={product.text} className="popular-choices__button" />

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
