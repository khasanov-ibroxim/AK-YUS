import React from 'react';
import {Link} from 'react-router-dom';
import {CONTACT} from "@/utils/consts.jsx";

const WithUsComponent = () => {
    return (
        <div className={"with-us"}>
            <h1>Мы всегда на связи</h1>
            <ul>
                <li>Мы открыты для делового сотрудничества и новых предложений.</li>
                <li>Наша команда всегда на связи и готова к диалогу.</li>
                <li>Выберите любой удобный <Link to={CONTACT}>способ связи</Link>  — мы ответим в кратчайшие сроки.</li>
            </ul>
        </div>
    );
};

export default WithUsComponent;