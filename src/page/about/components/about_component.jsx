import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";
import {Link} from "react-router-dom";

const AboutComponent = () => {
    const swiperRef = useRef(null); // Swiper uchun ref
    const [posts, setPosts] = useState([
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/ab_team_01.jpg",
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/ab_team_02.jpg",
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/ab_team_03.jpg",
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/ab_team_04.jpg",
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/ab_team_01.jpg",
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/ab_team_02.jpg",
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/ab_team_03.jpg",
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },
        {
            img: "https://mixtas.b-cdn.net/wp-content/uploads/2023/12/ab_team_04.jpg",
            name: "Marcus Turner",
            subname:"CEO/FOUNDER"
        },

    ]);
    return (
        <div className="about_component">
            <div className="row">
                <div className="col-lg-6">
                    <img src="https://mixtas.b-cdn.net/wp-content/uploads/2023/12/ab_image-1024x1024.jpeg" alt=""/>
                </div>
                <div className="col-lg-6">
                    <h2>Unveiling Your Unique Fashion Journey</h2>
                    <p>Welcome to Mixtas Store, where fashion meets individuality, and style is more than just clothing
                        –
                        it's a statement. Our passion for fashion drives us to curate a collection that celebrates
                        diversity, embraces trends, and empowers you to express yourself through clothing.</p>
                </div>
            </div>


            <div className="about_component_title pb-5 pt-5">
                <h1>
                    Meet the our team
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
                    slidesPerView={4}
                    spaceBetween={1}
                    pagination={{clickable: true}}
                    modules={[FreeMode]}
                    grabCursor={true}
                    loop={true}
                    breakpoints={{
                        320: {slidesPerView: 1,},  // Mobil (<= 320px)
                        576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                        768: {slidesPerView: 2,},  // O‘rta ekran (<= 768px)
                        900: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                        1000: {slidesPerView: 4,},  // O‘rta ekran (<= 768px)
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
                                <h1><Link to={"#"}>{product.name}</Link></h1>
                                <div className="s6_item_title">
                                    {product.subname}
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutComponent;