import React from 'react';
import "./header.css"
import {Link} from "react-router-dom";
import {HOME} from "@/utils/consts.jsx";
import {useTranslation} from "react-i18next";

const Header = ({title , subtitle}) => {
    const {t}= useTranslation();
    return (
        <div className="contact_header ">
            <h1 data-aos="fade-up">{title}</h1>
            <p data-aos="fade-up"><Link to={HOME}>{t('navbar.home')}</Link> / {subtitle}</p>
        </div>
    );
};

export default Header;