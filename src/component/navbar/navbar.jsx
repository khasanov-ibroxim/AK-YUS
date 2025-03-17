import React, {useEffect, useState} from 'react';
import "./navbar.css"
import logo from "@/assets/logo.svg"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useLanguage} from "@/utils/lang/LangContext.jsx";
import {Dropdown, Space} from "antd";
import {languages} from "@/utils/lang/langs.jsx";
import {CloseOutlined, DownOutlined, MenuOutlined} from "@ant-design/icons";
import {ABOUT, CONTACT, FAQS, HOME} from "@/utils/consts.jsx";

const Navbar = () => {
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const {t} = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);

    useEffect(() => {
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia('(max-width: 1000px)');
        windowMatch.addEventListener('change', handleResize);


        return () => windowMatch.removeEventListener('change', handleResize);
    }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav>
            <div className={"nav_full_box container-sm"}>
                <div className="nav_top_for_home">
                    <div className="nav_logo">
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <div className={`nav_menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to={HOME}>{t("navbar.home")}</Link></li>
                        <li><Link to={ABOUT}>{t("navbar.about")}</Link></li>
                        <li><Link to={FAQS}>{t("navbar.faqs")}</Link></li>
                        <li><Link to={CONTACT}>{t("navbar.contact")}</Link></li>
                        <li className="lang_nav" style={isMobile ? {display: "flex"} : {display: "none"}}>
                            <Dropdown
                                menu={{
                                    items: languages,
                                    onClick: handleLanguageChange,
                                }}
                                trigger={["click"]}

                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        {selectedLanguage.label} <DownOutlined/>
                                    </Space>
                                </a>
                            </Dropdown>
                        </li>
                    </ul>
                </div>

                <div className="nav_end">
                    <div className="lang_nav" style={isMobile ? {display: "none"} : {display: "flex"}}>
                        <Dropdown
                            menu={{
                                items: languages,
                                onClick: handleLanguageChange,
                            }}
                            trigger={["click"]}

                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {selectedLanguage.label} <DownOutlined/>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>

                    <div className="navburger" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseOutlined/> : <MenuOutlined/>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;