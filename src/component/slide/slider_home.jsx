import React from 'react';
import slide_1 from "@/assets/allphoto/home_header_1.jpg";
import {Link} from "react-router-dom";
import slide_2 from "@/assets/allphoto/home_header_2.jpg";
import slide_3 from "@/assets/allphoto/home_header_3.jpg";
import "./slider_home.css"
import {useTranslation} from "react-i18next";

const SliderHome = () => {
    const {t} = useTranslation();
    return (
        <div id="home_sliderID" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#home_sliderID" data-slide-to="0" className="active"></li>
                <li data-target="#home_sliderID" data-slide-to="1"></li>
                <li data-target="#home_sliderID" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide_1} className="d-block w-100" alt="..."/>
                    <div data-aos="fade-up" className="carousel-caption_singl">
                        <span>{t("home.home_slide.slide_1.sub_title")}</span>
                        <h5 dangerouslySetInnerHTML={{__html:t("home.home_slide.slide_1.title")}}></h5>
                        <Link to={"#"}>{t("home.home_slide.btn")}</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide_2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={slide_3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#home_sliderID" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

            </a>
            <a className="carousel-control-next" href="#home_sliderID" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>

            </a>

        </div>

    );
};

export default SliderHome;