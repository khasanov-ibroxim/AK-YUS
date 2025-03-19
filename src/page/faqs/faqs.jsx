import React, { useState } from "react";
import "./faqs.css";
import Header from "@/component/header/header.jsx";
import { Collapse } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Panel } = Collapse;

const Faqs = () => {
    const { t } = useTranslation();
    const [activeKey, setActiveKey] = useState(null);

    const items = [
        { key: "1", label: t("faqs.item_1.q"), children: <p>{t("faqs.item_1.a")}</p> },
        { key: "2", label: t("faqs.item_2.q"), children: <p>{t("faqs.item_2.a")}</p> },
        { key: "3", label: t("faqs.item_3.q"), children: <p>{t("faqs.item_3.a")}</p> },
        { key: "4", label: t("faqs.item_4.q"), children: <p>{t("faqs.item_4.a")}</p> },
        { key: "5", label: t("faqs.item_5.q"), children: <p>{t("faqs.item_5.a")}</p> },
        { key: "12", label: t("faqs.item_12.q"), children: <p>{t("faqs.item_12.a")}</p> },
        { key: "13", label: t("faqs.item_13.q"), children: <p>{t("faqs.item_13.a")}</p> },
        { key: "7", label: t("faqs.item_7.q"), children: <p>{t("faqs.item_7.a")}</p> },
        { key: "8", label: t("faqs.item_8.q"), children: <p>{t("faqs.item_8.a")}</p> },
        { key: "9", label: t("faqs.item_9.q"), children: <p>{t("faqs.item_9.a")}</p> },
        { key: "10", label: t("faqs.item_10.q"), children: <p>{t("faqs.item_10.a")}</p> },
        { key: "11", label: t("faqs.item_11.q"), children: <p>{t("faqs.item_11.a")}</p> },
        { key: "6", label: t("faqs.item_6.q"), children: <p>{t("faqs.item_6.a")}</p> },

        { key: "14", label: t("faqs.item_14.q"), children: <p>{t("faqs.item_14.a")}</p> },
    ];

    return (
        <div className="container-sm faqs top_def_100">
            <Header title={t("navbar.faqs")} subtitle={t("navbar.faqs")} />
            <section className="question">
                <div className="question_box">
                    <div className="question_left">
                        <Collapse
                            accordion
                            expandIconPosition="end"
                            expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
                            className="custom-collapse"
                            onChange={setActiveKey}
                        >
                            {items.slice(0, 9).map((item) => (
                                <Panel header={item.label} key={item.key}>
                                    {item.children}
                                </Panel>
                            ))}
                        </Collapse>
                    </div>
                    <div className="question_right">
                        <Collapse
                            accordion
                            expandIconPosition="end"
                            expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
                            className="custom-collapse"
                            onChange={setActiveKey}
                        >
                            {items.slice(9).map((item) => (
                                <Panel header={item.label } key={item.key}>
                                    {item.children}
                                </Panel>
                            ))}
                        </Collapse>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faqs;
