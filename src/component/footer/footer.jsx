import React from 'react';
import "./footer.css"
import logo from '@/assets/logo_white.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EastIcon from '@mui/icons-material/East';
import {Link} from "react-router-dom";
import {ABOUT, CONTACT} from "@/utils/consts.jsx";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <div className="footer">
            <div className="container-sm pt-5 pb-5">
                <div className="row" style={{justifyContent:"space-between"}}>
                    <div className="col-lg-3">
                        <div className="footer_item_1">
                            <img src={logo} alt=""/>
                            <p>
                                {t("footer.item_1.text")}
                            </p>
                            <div className="footer_social">
                                <a className="footer_social_circle"
                                   href={"https://t.me/akyusstoree"}>
                                    <TelegramIcon/></a>
                                <a className="footer_social_circle"
                                   href={"https://www.instagram.com/akyus.store?igsh=Z2NhNHhucGF2bzU2"}>
                                    <InstagramIcon/></a>

                                <Link className="footer_social_circle" to={"#"}><FacebookIcon/></Link>

                                <Link className="footer_social_circle" to={"#"}><WhatsAppIcon/></Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer_item_def">
                            <h4>{t("footer.item_2.title")}</h4>
                            <ul>
                                <li><Link to={ABOUT}>{t("footer.item_2.os")}</Link></li>
                                <li><Link to={ABOUT}>{t("footer.item_2.om")}</Link></li>
                                <li><Link to={ABOUT}>{t("footer.item_2.contact")}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>{t("footer.item_3.title")}</h4>
                            <ul>
                                <li><Link to={"#"}>{t("footer.item_3.i1")}</Link></li>
                                <li><Link to={"#"}>{t("footer.item_3.i2")}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>{t("footer.item_4.title")}</h4>
                            <p>{t("footer.item_4.text")}</p>
                            <ul className={"d-flex flex-row"}>
                               <li><Link to={"#"}><InstagramIcon/></Link></li>
                               <li><Link to={"#"}><TelegramIcon/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_last_item">
                            <h3>{t("footer.item_5.title")}</h3>
                            <p>{t("footer.item_5.text")}</p>
                            <Link to={CONTACT} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("footer.item_5.btn")} <EastIcon/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;