import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";
import {Link} from "react-router-dom";
import {Blog_db} from "@/page/Home/db/blog_db.jsx";
import {BLOG} from "@/utils/consts.jsx";

const HomeS6 = () => {
    const swiperRef = useRef(null); // Swiper uchun ref
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
                        {Blog_db.map((product, index) => (
                            <SwiperSlide key={index} >
                                <div className="s6_item">
                                    <div className={"s6_item_img"}>
                                        <Link  onClick={()=>window.scrollTo(0, 0)} to={BLOG.replace(":blog_id" , product.id)}><img src={product.img} alt={product.name}/></Link>
                                    </div>
                                    <div className="s6_item_content">
                                        <div className="s6_item_title">
                                            By <span>{product.create}</span> • {product.data}
                                        </div>
                                        <h1><Link to={BLOG.replace(":blog_id" , product.id)} onClick={()=>window.scrollTo(0, 0)}>{product.name}</Link></h1>
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