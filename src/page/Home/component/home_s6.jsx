import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";
import {Link} from "react-router-dom";


const HomeS6 = () => {
    const swiperRef = useRef(null); // Swiper uchun ref
    const [posts, setPosts] = useState([
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/blog-01.jpg",
            name: "Fashion Forward: Emerging Trends You Need to Know",
            create: "admin",
            data: "20.12.2024"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/blog-02.jpg",
            name: "Unveiling Elegance: Timeless Fashion Trends for Women",
            create: "admin",
            data: "20.12.2024"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/blog-03.jpg",
            name: "Fashion Forward: Emerging Trends You Need to Know",
            create: "admin",
            data: "20.12.2024"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/blog-04.jpg",
            name: "Fashion Forward: Emerging Trends You Need to Know",
            create: "admin",
            data: "20.12.2024"
        },
    ]);
    return (
        <div className={"home_s6 pt-5 pb-5"}>
            <div className="container-sm">
                <div className="home_title_content pb-5" data-aos="fade-up">
                    <span>Latest posts</span>
                    <h2>Blog & Insights</h2>
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
                                    <div className="s6_item_title">
                                        By <span>{product.create}</span> • {product.data}
                                    </div>
                                    <h1><Link to={"#"}>{product.name}</Link></h1>
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