import React from 'react';
import "./contact.css"
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from "@/component/header/header.jsx";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const {t} = useTranslation();
    return (
        <div className={"container-sm top_def_100"}>
            <Header title={t("contact.header")} subtitle={t("contact.header")}/>
            <div className="row pt-5 pb-5">
                <div data-aos="fade-up" className="col-lg-3">
                    <div className="contact_top_item">
                        <div className="contact_circle">
                            <PlaceIcon/>
                        </div>
                        <h3>{t("contact.contact_box.address.title")}</h3>
                        <a href={"https://maps.app.goo.gl/3NwKpFKA139eoJN16?g_st=atm"}>{t("contact.contact_box.address.content")}</a>
                    </div>
                </div>
                <div data-aos="fade-up" className="col-lg-3">
                    <div className="contact_top_item">
                        <div className="contact_circle">
                            <LocalPhoneIcon/>
                        </div>
                        <h3>{t("contact.contact_box.tell")}</h3>
                        <a href="tel:+998971449401">+998 97 144 94 01</a>
                        <br/>

                    </div>
                </div>
                <div data-aos="fade-up" className="col-lg-3">
                    <a href={"https://www.instagram.com/akyus.store?igsh=Z2NhNHhucGF2bzU2"}
                       className="contact_top_item">
                        <div className="contact_circle">
                            <InstagramIcon/>
                        </div>
                        <h3>{t("contact.contact_box.instagram")}</h3>

                    </a>
                </div>
                <div data-aos="fade-up" className="col-lg-3">
                    <a href={"https://t.me/akyusstoree"} className="contact_top_item">
                        <div className="contact_circle">
                            <TelegramIcon/>
                        </div>
                        <h3>{t("contact.contact_box.telegram")}</h3>
                    </a>
                </div>
            </div>


            <div className="row pt-5 pb-5">
                <div className="col-lg-6">
                    <div className="form">
                        <h3 data-aos="fade-up">{t("contact.form_box.title")}</h3>

                        <div className="form_input">
                            <input type="text" placeholder={t("contact.form_box.name")}/>
                        </div>
                        <div className="form_input">
                            <input type="text" placeholder={t("contact.form_box.tell")}/>
                        </div>
                        <div className="form_input">
                            <textarea rows={8} type="text" placeholder={t("contact.form_box.msg")}/>
                        </div>
                        <button>{t("contact.form_box.send")}</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.418950321312!2d69.25242879999999!3d41.31617310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b48a35ed52f%3A0x6d868958ae00961!2sTashkent%20City%20Mall!5e1!3m2!1sru!2s!4v1742402926622!5m2!1sru!2s"
                            width="100%" height="100%" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;