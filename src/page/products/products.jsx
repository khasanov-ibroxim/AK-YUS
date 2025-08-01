import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import "./products.css"
import {Autoplay} from "swiper/modules";
import {Products_db} from "@/page/products/products_db.jsx";
import Header from "@/component/header/header.jsx";
import {useTranslation} from "react-i18next";

const Products = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ fixed
    const [activeCat, setActiveCat] = useState("all")
    const {t} = useTranslation();

    const imgChecker = (product, index) => {
        if (Array.isArray(product)) {
            return hoveredIndex === index ? product[1] : product[0];
        } else {
            return product;
        }
    };

    return (
        <div className="container-sm faqs top_def_100">
            <Header title={t("products.title")} subtitle={t("products.title")}/>

            <div className="products_content">
                <div className="products_tabs_box">
                    <div className={`product_tab_item ${activeCat === "all" && "active"}`}
                         onClick={() => setActiveCat("all")}>{t("products.product")}</div>
                </div>
                <div className="row">
                    {Products_db.filter(item => activeCat === "all" || item.cat_name === activeCat)
                        .map((item, index) => (
                            <div className="col-lg-4 col-6" key={index}
                                 onMouseEnter={() => setHoveredIndex(index)}
                                 onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="product_item">
                                    <img src={imgChecker(item.img_path, index)} alt="product"/>
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </div>
    );
};

export default Products;
