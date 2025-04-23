import React, {useRef} from 'react';
import {Arrivals, BestSell} from "@/utils/db_products.jsx";
import ProductCard from "@/component/product_card/product_card.jsx";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";

const HomeS4 = () => {
    const swiperRef_s4 = useRef(null); // Swiper uchun ref

    return (
        <div className={"home_s4 pt-5 pb-5"}>
            <div className="home_title_content pb-5" data-aos="fade-up">
                <span>Модный стиль для всех</span>
                <h2>Свежие тренды </h2>
            </div>

            <div className="row g-1" data-aos="fade-up">
                <div className="custom-nav" data-aos="fade-up"
                style={{top:"40%"}}
                >
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
                </div>
                <Swiper
                    ref={swiperRef_s4} // Swiperga ref qo'shamiz
                    slidesPerView={4}
                    spaceBetween={5}
                    pagination={{clickable: true}}
                    modules={[FreeMode]}
                    grabCursor={true}
                    loop={true}
                    breakpoints={{
                        320: {slidesPerView: 1,},  // Mobil (<= 320px)
                        576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                        768: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                        1024: {slidesPerView: 4,},
                    }}
                    className="mySwiper"
                    data-aos="fade-up"
                >
                    {Arrivals.slice(0, 5).map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard product={product} key={index}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/*<div className="home_s4_show_more" data-aos="fade-up">*/}
            {/*    <Link to={"#"}>Show more products</Link>*/}
            {/*</div>*/}
        </div>
    );
};

export default HomeS4;