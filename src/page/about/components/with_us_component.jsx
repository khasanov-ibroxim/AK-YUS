import React from 'react';
import {Link} from 'react-router-dom';
import {CONTACT} from "@/utils/consts.jsx";
import {useTranslation} from "react-i18next";

const WithUsComponent = () => {
    const {t} = useTranslation();
    return (
        <div className={"with-us"}>
            <h1>{t("about.contact.title")}</h1>
            <ul>
                <li>{t("about.contact.i1")}</li>
                <li>{t("about.contact.i2")}</li>
                <li dangerouslySetInnerHTML={{__html:t("about.contact.i3")}}></li>
            </ul>
        </div>
    );
};

export default WithUsComponent;