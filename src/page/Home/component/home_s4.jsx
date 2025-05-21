import React, {useRef} from 'react';
import {Arrivals} from "@/utils/db_products.jsx";
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

            <div className="row g-1 d-flex" data-aos="fade-up">


                    {Arrivals.map((product, index) => (
                            <div className={"col-lg-3"}>
                                <ProductCard product={product} key={index} array={"Arrivals"}/>
                            </div>


                    ))}

            </div>
            {/*<div className="home_s4_show_more" data-aos="fade-up">*/}
            {/*    <Link to={"#"}>Show more products</Link>*/}
            {/*</div>*/}
        </div>
    );
};

export default HomeS4;