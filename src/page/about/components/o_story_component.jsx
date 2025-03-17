import React from 'react';
import {useTranslation} from "react-i18next";

const OStoryComponent = () => {
    const {t} = useTranslation();
    return (
        <div className={"o-story-component"}>
            <p>{t("about.story.p1")}</p>
            <p>{t("about.story.p2")}</p>
            <p>{t("about.story.p3")}</p>
            <p>{t("about.story.p4")}</p>
            <p>{t("about.story.p5")}</p>
            <p>{t("about.story.p6")}</p>

        </div>
    );
};

export default OStoryComponent;