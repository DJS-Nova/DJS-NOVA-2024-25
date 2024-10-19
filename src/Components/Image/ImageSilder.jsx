import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './CarouselSlider.css' // Import external CSS file for custom styles

const CarouselSwiper = () => {
    return (
        <div className="swiper-container p-10 bg-slate-700 flex items-center justify-center" >
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                <SwiperSlide>
                    <img src="https://via.placeholder.com/600x400?text=Slide+1" alt="Slide 1" className="swiper-slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://via.placeholder.com/600x400?text=Slide+2" alt="Slide 2" className="swiper-slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://via.placeholder.com/600x400?text=Slide+3" alt="Slide 3" className="swiper-slide-image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://via.placeholder.com/600x400?text=Slide+4" alt="Slide 4" className="swiper-slide-image" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarouselSwiper;
