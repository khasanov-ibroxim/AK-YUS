import React, {useRef} from 'react';
import {Arrivals} from "@/utils/db_products.jsx";
import ProductCard from "@/component/product_card/product_card.jsx";

import {useTranslation} from "react-i18next";

const HomeS4 = () => {
    const {t} = useTranslation();
    return (
        <div className={"home_s4 pt-5 pb-5"}>
            <div className="home_title_content pb-5" data-aos="fade-up">
                <span>{t("home.home_s4.subtitle")}</span>
                <h2>{t("home.home_s4.title")}</h2>
            </div>

            <div className="row g-1 d-flex" data-aos="fade-up">
                    {Arrivals(t).map((product, index) => (
                            <div className={"col-lg-3"}>
                                <ProductCard product={product} key={index} array={"Arrivals"}/>
                            </div>


                    ))}
            </div>
        </div>
    );
};

export default HomeS4;