import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import slide1 from './slide1.png'
import slide2 from './slide2.png'
import slide3 from './slide3.png'
import './CarouselSlider.css' // Import external CSS file for custom styles

const CarouselSwiper = () => {
    return (
        <div className="swiper-container p-10 transparent flex items-center justify-center w-full" >
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                <SwiperSlide>
                    <img src={slide1} alt="Slide 2" className="swiper-slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide 3" className="swiper-slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide 4" className="swiper-slide-image" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarouselSwiper;
