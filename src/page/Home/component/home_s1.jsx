import React from 'react';
import s1_left from "@/assets/allphoto/5V1A0138_resized.jpg"
import s1_right_1 from "@/assets/allphoto/5V1A0222_resized.jpg"
import s1_right_2 from "@/assets/allphoto/5V1A9837_resized.jpg"
import s1_right_3 from "@/assets/allphoto/5V1A0337_resized_v1.jpg"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HomeS1 = () => {
    const {t} = useTranslation();
    return (
        <div className={"mt_home_100 pt-5"}>
            <div className="home_title_content" data-aos="fade-up">

            </div>
            <div className="home_s1_content">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="col-lg-12">
                            <div className="row " style={{paddingRight: "10px"}}>
                                <div data-aos="fade-up" className="col-lg-12 mb-1 home_s1_item">
                                    <img src={s1_right_1} alt=""/>
                                    <div className="home_s1_item_text">

                                        <h2>Комфорт и качество</h2>
                                        <Link to={"#"}>Сделать заказ</Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="row">
                                <div data-aos="fade-up" className="col-lg-6 home_s1_item_left">
                                    <img src={s1_right_3} alt="" style={{paddingRight: "2px"}}/>

                                    <div className="home_s1_item_left_text" style={{
                                        width: "70%",
                                        top: "10%",

                                    }}>

                                        <h2 style={{color: "black"}}>Создай свой стиль</h2>
                                        <Link to={"#"}>Сделать заказ</Link>
                                    </div>
                                </div>
                                <div data-aos="fade-up"
                                     className="col-lg-6 home_s1_item_left_3 home_s1_item_left">
                                    <div className="home_s1_item_left_3_opacity"></div>
                                    <img src={s1_right_2} alt=""/>
                                    <div className="home_s1_item_left_text" style={{
                                        width: "70%",
                                        top: "10%",
                                    }}>

                                        <h2 style={{color: "black"}}>Идеальная посадка</h2>
                                        <Link to={"#"}>Сделать заказ</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className="col-lg-5  home_s1_item_4 home_s1_item">
                        <img src={s1_left} alt=""/>
                        <div className="home_s1_item_text" style={{left: "30px"}}>

                            <h2>Свобода в движение</h2>
                            <Link to={"#"}>Сделать заказ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS1;