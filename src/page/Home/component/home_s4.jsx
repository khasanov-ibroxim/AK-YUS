import React from 'react';
import {AllProducts} from "@/utils/db_products.jsx";
import ProductCard from "@/component/product_card/product_card.jsx";
import {Link} from "react-router-dom";

const HomeS4 = () => {
    return (
        <div className={"home_s4 pt-5 pb-5"}>
            <div className="home_title_content pb-5" data-aos="fade-up">
                <span>Latest Products</span>
                <h2>New Arrivals</h2>
            </div>
            <div className="row g-1" data-aos="fade-up">
                {AllProducts.slice(0, 8).map((product, index) => (
                    <div key={index} className={"col-lg-3"}>
                        <ProductCard product={product} key={index}/>
                    </div>
                ))}
            </div>
            <div className="home_s4_show_more" data-aos="fade-up">
                <Link to={"#"}>Show more products</Link>
            </div>
        </div>
    );
};

export default HomeS4;