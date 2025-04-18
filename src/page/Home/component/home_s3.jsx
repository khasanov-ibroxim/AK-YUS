import React, {useEffect, useState} from "react";
import {CaretRightOutlined, CloseOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import video_poster from "@/assets/home_origin/s3/5V1A0356_resized.jpg"
const HomeS3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const {t} = useTranslation();
    useEffect(() => {
        const targetDate = new Date("2025-03-08T00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="home_s3 pt-5  pb-5" >
            <div className="row pt-5">
                <div className="col-lg-6" data-aos="fade-up">
                    <div className=" home_s3_video_box">
                        <img
                            src={video_poster}
                            alt="Mixtas Poster"
                            className="w-full h-auto cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                        <button
                            className="home_s3_video_box_play_btn"
                            onClick={() => setIsOpen(true)}
                        >
                            <CaretRightOutlined/>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up">
                    <div className="home_s3_content">
                        <h2 dangerouslySetInnerHTML={{__html:t("home.home_s3.title")}}></h2>
                        <p>{t("home.home_s3.content")}</p>
                        <div className="home_s3_timer">
                            <div className="home_s3_timer_item">
                                <span>{String(timeLeft.days).padStart(2, '0')}</span>
                                <p>day</p>
                            </div>
                            <
                                div className="home_s3_timer_item">
                                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                                <p>Hours</p>
                            </div>
                            <div className="home_s3_timer_item">
                                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <p>Minutes</p>
                            </div>
                            <div className="home_s3_timer_item">
                                <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <Link to={""}>Shop the sell</Link>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="home_s3_modal">
                    <div className="home_s3_modal_content">
                        <button
                            className="home_s3_modal_close"
                            onClick={() => setIsOpen(false)}
                        >
                            <CloseOutlined />
                        </button>
                        <iframe
                            width="70%"
                            height="70%"
                            src="https://www.youtube.com/embed/wII9bv2P9c8?autoplay=1&controls=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeS3;
