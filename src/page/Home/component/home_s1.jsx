import React from 'react';
import s1_left from "@/assets/home/s1_left.jpg"
import s1_right_1 from "@/assets/home/s1_right_1.jpg"
import s1_right_2 from "@/assets/home/s1_right_2.jpg"
import {Link} from "react-router-dom";

const HomeS1 = () => {
    return (
        <div className={"mt_home_100 pt-5"}>
            <div className="home_title_content" data-aos="fade-up">
                <span>top Collections</span>
                <h2>Popular Collections</h2>
            </div>
            <div className="home_s1_content">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row " style={{paddingRight: "10px"}}>
                            <div data-aos="fade-up" className="col-lg-12 mb-1 home_s1_item">
                                <img src={s1_right_1} alt=""/>
                                <div className="home_s1_item_text">
                                    <span>Chasing Urban Allure</span>
                                    <h2>Effortless Style for the Modern Woman</h2>
                                    <Link to={"#"}>Shop Now</Link>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-lg-6 home_s1_item" >
                                <img src={s1_right_2} alt="" style={{paddingRight: "2px"}}/>

                                <div className="home_s1_item_text" style={{
                                    right: 20,
                                    left: "auto",
                                    width: "70%",
                                    top: "70px",
                                    textAlign: "right"
                                }}>
                                    <span style={{color: "white"}}>Urban Elegance</span>
                                    <h2 style={{color: "white"}}>Elevate Your Everyday Look</h2>
                                    <Link to={"#"}>Shop Now</Link>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-lg-6 home_s1_item_3">
                                <div data-aos="fade-up" className="home_s1_item_3_content">
                                    <h2>Mastering the Art of Menswear</h2>
                                    <h1>50%</h1>
                                    <Link to={"#"}>Shop now</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div data-aos="fade-up" className="col-lg-5 home_s1_item_4 home_s1_item">
                        <img src={s1_left} alt=""/>
                        <div className="home_s1_item_text" style={{left:"30px"}}>
                            <span>Adorable Essentials</span>
                            <h2>Everyday Cuteness for Kids</h2>
                            <Link to={"#"}>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeS1;