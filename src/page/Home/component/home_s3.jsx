import React, {useEffect, useState} from "react";
import {CaretRightOutlined, CloseOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import video_poster from "@/assets/allphoto/5V1A0286_resized.jpg"


const HomeS3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();

    return (
        <div className="home_s3 pt-5  pb-5" >
            <div className="row pt-5">
                <div className="col-lg-6" data-aos="fade-up">
                    <div className=" home_s3_video_box">
                        <img
                            src={video_poster}
                            alt="Mixtas Poster"
                            className="w-full h-75 object-fit-cover cursor-pointer"
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
                        <Link to={"#"}>Продукция</Link>
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
