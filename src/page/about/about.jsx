import React, {useState} from 'react';
import "./about.css"
import Header from "@/component/header/header.jsx";
import AboutComponent from "@/page/about/components/about_component.jsx";
import OStoryComponent from "@/page/about/components/o_story_component.jsx";
import OMissionComponent from "@/page/about/components/o_mission_component.jsx";
import WithUsComponent from "@/page/about/components/with_us_component.jsx";
import {useTranslation} from "react-i18next";

const About = () => {
    const [tabs, setTabs] = useState(0);
    const {t} = useTranslation();
    return (
        <div className="about top_def_100">
            <div className="about_header">
                <h1>{t("about.index.header")}</h1>
            </div>
            <div className="container-sm">

                <div className="about_tabs">
                    <div className={tabs === 0 ? "tabs_item isActive" : "tabs_item"} onClick={() => setTabs(0)}>
                        {t("about.index.about")}
                    </div>
                    <div className={tabs === 1 ? "tabs_item isActive" : "tabs_item"} onClick={() => setTabs(1)}>
                        {t("about.index.story")}
                    </div>
                    <div className={tabs === 2 ? "tabs_item isActive" : "tabs_item"} onClick={() => setTabs(2)}>
                        {t("about.index.misson")}
                    </div>
                    <div className={tabs === 3 ? "tabs_item isActive" : "tabs_item"} onClick={() => setTabs(3)}>
                        {t("about.index.contact")}
                    </div>
                </div>


                <div className="about_content  pt-5 pb-5">
                    {tabs === 0 && <AboutComponent/>}
                    {tabs === 1 && <OStoryComponent/>}
                    {tabs === 2 && <OMissionComponent/>}
                    {tabs === 3 && <WithUsComponent/>}
                </div>

            </div>
        </div>
    );
};

export default About;