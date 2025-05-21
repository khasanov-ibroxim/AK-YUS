import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Link } from "react-router-dom";

import { BestSell, Category } from "@/utils/db_products.jsx";
import ProductCard from "@/component/product_card/product_card.jsx";

const HomeS2 = () => {
    const swiperRef = useRef(null); // Swiper uchun ref

    return (
        <div className={"home_s2 pt-5"}>
            <div className="home_title_content pb-5" data-aos="fade-up">
                <span>Лучшее из лучшего</span>
                <h2> Наши бестселлеры</h2>
            </div>
            {BestSell.length > 4 && <div className="custom-nav" data-aos="fade-up">
                <button
                    className="swiper-button-prev"
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                >

                </button>
                <button
                    className="swiper-button-next"
                    onClick={() => swiperRef.current.swiper.slideNext()}
                >
                </button>
            </div>}
            <Swiper
                ref={swiperRef} // Swiperga ref qo'shamiz
                slidesPerView={4}
                spaceBetween={5}
                pagination={{clickable: true}}
                modules={[FreeMode]}
                grabCursor={true}
                loop={true}
                breakpoints={{
                    320: {slidesPerView: 1,},  // Mobil (<= 320px)
                    576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                    768: {slidesPerView: 3, },  // O‘rta ekran (<= 768px)
                    1024: {slidesPerView: 4, },
                }}
                className="mySwiper"
                data-aos="fade-up"
            >
                {BestSell.slice(0, 5).map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={product} key={index} array={"BestSell"}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation */}

        </div>
    );
};


export default HomeS2;