import React from 'react';
import "./footer.css"
import logo from '@/assets/logo_white.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EastIcon from '@mui/icons-material/East';
import {Link} from "react-router-dom";
import {CONTACT} from "@/utils/consts.jsx";
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
                            <h4>About Us</h4>
                            <ul>
                                <li><Link to={"#"}>Our Story</Link></li>
                                <li><Link to={"#"}>Mission & Values</Link></li>
                                <li><Link to={"#"}>Meet the Team</Link></li>
                                <li><Link to={"#"}>Sustainability Efforts</Link></li>
                                <li><Link to={"#"}>Brand Partnerships</Link></li>
                                <li><Link to={"#"}>Influencer Collaborations</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>Accessibility</h4>
                            <ul>
                                <li><Link to={"#"}>Accessibility Statement</Link></li>
                                <li><Link to={"#"}>Site Map</Link></li>
                                <li><Link to={"#"}>Web Accessibility Options</Link></li>
                                <li><Link to={"#"}>ADA Compliance</Link></li>
                                <li><Link to={"#"}>Privacy Policy</Link></li>
                                <li><Link to={"#"}>Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_item_def">
                            <h4>Join Our Community</h4>
                            <ul>
                                <li><Link to={"#"}>VIP Membership</Link></li>
                                <li><Link to={"#"}>Loyalty Program</Link></li>
                                <li><Link to={"#"}>Customer Reviews</Link></li>
                                <li><Link to={"#"}>Style Forums</Link></li>
                                <li><Link to={"#"}>Job Openings</Link></li>
                                <li><Link to={"#"}>Culture and Values</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer_last_item">
                            <h3>Let’s get in touch</h3>
                            <p>Sign up for our newsletter and receive 10% off your</p>
                            <Link to={CONTACT}>Contact us <EastIcon/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;