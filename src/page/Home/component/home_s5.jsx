import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, FreeMode} from "swiper/modules";
import "swiper/css";

const HomeS5 = () => {
    const [brands, setBrands] = useState([
        "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m_logo_02.png",
        "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m_logo_03.png",
        "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m_logo_04.png",
        "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m_logo_05.png",
        "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m_logo_06.png",
        "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m_logo_02.png",
        "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m_logo_03.png",
        "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m_logo_04.png",
    ]);
    const swiperRef = useRef(null);

    return (
        <div className="home_s5 pt-5 pb-5">
            <div className="home_title_content pb-5" data-aos="fade-up">
                <span>Top Brands</span>
                <h2>Popular Brands</h2>
            </div>

            <div className="custom-nav" data-aos="fade-up">
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
                ref={swiperRef}
                slidesPerView={7}
                spaceBetween={10}
                loop={true} // Loop yoqildi
                loopedSlides={brands.length} // Barcha slaydlardan nusxa yaratish
                freeMode={true}
                className="brand_swiper"
                data-aos="fade-up"
                modules={[FreeMode , Autoplay]}
                autoplay={true}
            >
                {brands.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeS5;
