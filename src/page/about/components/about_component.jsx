import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode , Autoplay} from "swiper/modules";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import index_img from "@/assets/allphoto/5V1A9975_resized.jpg"

import item_1 from "@/assets/allphoto/5V1A0081_resized.jpg"
import item_2 from "@/assets/allphoto/5V1A0276_resized.jpg"
import item_3 from "@/assets/allphoto/5V1A0543_resized.jpg"
import item_4 from "@/assets/allphoto/5V1A0590_resized.jpg"
import item_5 from "@/assets/allphoto/5V1A0607_resized.jpg"
import item_6 from "@/assets/allphoto/5V1A0615_resized.jpg"
import item_7 from "@/assets/allphoto/5V1A9843_resized.jpg"
import item_8 from "@/assets/allphoto/5V1A0432_resized.jpg"


const AboutComponent = () => {
    const swiperRef = useRef(null);
    const {t} = useTranslation();
    const [posts, setPosts] = useState([
        {
            img: item_1,
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: item_2,
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: item_3,
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: item_4,
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: item_5,
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: item_6,
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: item_7,
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: item_8,
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
    ]);
    return (
        <div className="about_component">
            <div className="row">
                <div className="col-lg-6">
                    <img src={index_img} alt="" height={"70%"} style={{objectFit:"contain"}}/>
                </div>
                <div className="col-lg-6">
                    <h2>{t("about.about_component.title")}</h2>
                    <p>{t("about.about_component.description")}</p>
                </div>
            </div>


            <div className="about_component_title pb-5">
                <h1>
                    {t("about.about_component.s2_title")}
                </h1>
            </div>
            <div className="home_s6_swiper_box">
                <div className="custom-nav">
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
                    spaceBetween={0}
                    pagination={{clickable: true}}
                    modules={[FreeMode , Autoplay]}
                    autoplay={{
                        speed: 200,
                        autoplaySpeed: 200,
                    }}
                    grabCursor={true}
                    loop={true}
                    breakpoints={{
                        320: {slidesPerView: 1,},  // Mobil (<= 320px)
                        576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                        768: {slidesPerView: 2,},  // O‘rta ekran (<= 768px)
                        900: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                        1000: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                    }}
                    className="mySwiper"
                    data-aos="fade-up"
                >
                    {posts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="s6_item">
                                <div className={"s6_item_img"}>
                                    <img src={product.img} alt={product.name}/>
                                </div>
                                {/*<h1><Link to={"#"}>{product.name}</Link></h1>*/}
                                {/*<div className="s6_item_title">*/}
                                {/*    {product.subname}*/}
                                {/*</div>*/}

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutComponent;