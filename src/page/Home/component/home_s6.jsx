import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";
import {Link} from "react-router-dom";
import s6_1 from "@/assets/allphoto/5V1A0028_resized.jpg"
import s6_2 from "@/assets/allphoto/5V1A9663_resized.jpg"
import s6_3 from "@/assets/allphoto/5V1A0169_resized.jpg"
import s6_4 from "@/assets/allphoto/5V1A9833_resized.jpg"

const HomeS6 = () => {
    const swiperRef = useRef(null); // Swiper uchun ref
    const [posts, setPosts] = useState([
        {
            img: s6_1,
            name: "Когда Ткань — это Послание. Мы чувствуем одежду, прежде чем увидим.",
            create: "admin",
            data: "20.12.2024"
        },
        {
            img: s6_2,
            name: "Линия Лаконичности: Образы , которые не требуют объяснений.",
            create: "admin",
            data: "20.12.2024"
        },
        {
            img: s6_3,
            name: "Мода Завтрашнего Дня: Свежий взгляд на силуэты и цвета нового сезона.",
            create: "admin",
            data: "20.12.2024"
        },
        {
            img: s6_4,
            name: "Цвет Настроения — Тепло. Глубокие природные тона, уютные ткани и простые формы.",
            create: "admin",
            data: "20.12.2024"
        },
    ]);
    return (
        <div className={"home_s6 pt-5 pb-5"}>
            <div className="container-sm">
                <div className="home_title_content pb-5" data-aos="fade-up">
                    <span>Мода в деталях</span>
                    <h2>Тренды & Эстетика</h2>
                </div>
                <div className="home_s6_swiper_box">
                    <div className="custom-nav" >
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
                        ref={swiperRef} // Swiperga ref qo'shamiz
                        slidesPerView={3}
                        spaceBetween={4}
                        pagination={{clickable: true}}
                        modules={[FreeMode]}
                        grabCursor={true}
                        loop={true}
                        breakpoints={{
                            320: {slidesPerView: 1,},  // Mobil (<= 320px)
                            576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                            768: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                        }}
                        className="mySwiper"
                        data-aos="fade-up"
                    >
                        {posts.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className="s6_item">
                                    <div className={"s6_item_img"}>
                                        <Link to={"#"}><img src={product.img} alt={product.name}/></Link>
                                    </div>
                                    <div className="s6_item_content">
                                        <div className="s6_item_title">
                                            By <span>{product.create}</span> • {product.data}
                                        </div>
                                        <h1><Link to={"#"}>{product.name}</Link></h1>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HomeS6;