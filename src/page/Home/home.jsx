import React from 'react';
import "./home.css"
import Slider_home from "@/component/slide/slider_home.jsx";
import Home_s1 from "@/page/Home/component/home_s1.jsx";
import Home_s2 from "@/page/Home/component/home_s2.jsx";
import Home_s3 from "@/page/Home/component/home_s3.jsx";
import Home_s4 from "@/page/Home/component/home_s4.jsx";
import Home_s5 from "@/page/Home/component/home_s5.jsx";
import Home_s6 from "@/page/Home/component/home_s6.jsx";
import Home_s7 from "@/page/Home/component/home_s7.jsx";

const Home = () => {
    return (
        <div className={"home"}>
            <Slider_home/>
            <div className="container-sm">
                <Home_s1/>
                <Home_s2/>
                <Home_s3/>
                <Home_s4/>
                <Home_s5/>
            </div>
            <Home_s6/>
            <div className="container-sm">
                <Home_s7/>
            </div>
        </div>
    );
};

export default Home;