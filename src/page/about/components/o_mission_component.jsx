import React from 'react';
import {useTranslation} from "react-i18next";

const OMissionComponent = () => {
    const {t} = useTranslation();
    return (
        <div className={"o-mission-component"}>
            <p>{t("about.misson.p1")}</p>

            <ul>
                <li><span>{t("about.misson.li_1.span")}</span> <br/> {t("about.misson.li_1.dis")}</li>
                <li><span>{t("about.misson.li_2.span")}</span><br/> {t("about.misson.li_2.dis")}</li>
                <li><span>{t("about.misson.li_3.span")}</span><br/> {t("about.misson.li_3.dis")}</li>
                <li><span>{t("about.misson.li_4.span")}</span> <br/>{t("about.misson.li_4.dis")}</li>
                <li><span>{t("about.misson.li_5.span")}</span> <br/>{t("about.misson.li_5.dis")}</li>
                <li><span>{t("about.misson.li_6.span")}</span> <br/>{t("about.misson.li_6.dis")}</li>
                <li><span>{t("about.misson.li_7.span")}</span> <br/>{t("about.misson.li_7.dis")}</li>

               </ul>

            <p>{t("about.misson.p2")}</p>

        </div>
    );
};

export default OMissionComponent;