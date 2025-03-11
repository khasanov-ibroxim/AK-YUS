import React, {useState} from 'react';
import "./faqs.css"
import Header from "@/component/header/header.jsx";
import {Collapse} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";

const {Panel} = Collapse;

const Faqs = () => {
    const [activeKey, setActiveKey] = useState([]);
    const items = [
        {
            key: '1',
            label: 'What is your return policy?',
            children: <p>We offer a hassle-free return policy. If you’re not satisfied with your purchase, you can
                return it within 30 days for a full refund or exchange. Please refer to our Returns & Exchanges page for
                detailed instructions.</p>,
        },
        {
            key: '2',
            label: 'How do I track my order?',
            children: <p>Tracking your order is easy! Once your order is shipped, we’ll send you a confirmation email
                with a tracking number. You can use this number to track your order’s status on our Order Tracking
                page.</p>,
        },
        {
            key: '3',
            label: 'What payment methods do you accept?',
            children: <p>We accept major credit cards (Visa, MasterCard, American Express) and PayPal for secure and convenient payments.</p>,
        },
        {
            key: '4',
            label: 'Do you offer international shipping?',
            children: <p>Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary based on your location. Please refer to our Shipping Information page for more details.</p>,
        },
        {
            key: '5',
            label: 'How can I contact your customer support?',
            children: <p>You can reach our friendly customer support team through our Contact Us page, where you’ll find a contact form and our email address. We’re here to assist you with any questions or concerns you may have.</p>,
        },
        {
            key: '6',
            label: 'Are the sizes true to measurements?',
            children: <p>We provide detailed size charts for each product to help you find the perfect fit. Please refer to the size chart on the product page to ensure you choose the right size.</p>,
        },
        {
            key: '7',
            label: 'Can I modify or cancel my order after it\'s been placed?',
            children: <p>We process orders quickly to ensure fast delivery, so modifications or cancellations may be limited. Contact our customer support as soon as possible, and we’ll do our best to assist you.</p>,
        },
        {
            key: '8',
            label: 'What is your return policy?',
            children: <p>We offer a hassle-free return policy. If you’re not satisfied with your purchase, you can
                return it within 30 days for a full refund or exchange. Please refer to our Returns & Exchanges page for
                detailed instructions.</p>,
        },
        {
            key: '9',
            label: 'How do I track my order?',
            children: <p>Tracking your order is easy! Once your order is shipped, we’ll send you a confirmation email
                with a tracking number. You can use this number to track your order’s status on our Order Tracking
                page.</p>,
        },
        {
            key: '10',
            label: 'What payment methods do you accept?',
            children: <p>We accept major credit cards (Visa, MasterCard, American Express) and PayPal for secure and convenient payments.</p>,
        },
        {
            key: '11',
            label: 'Do you offer international shipping?',
            children: <p>Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary based on your location. Please refer to our Shipping Information page for more details.</p>,
        },
        {
            key: '12',
            label: 'How can I contact your customer support?',
            children: <p>You can reach our friendly customer support team through our Contact Us page, where you’ll find a contact form and our email address. We’re here to assist you with any questions or concerns you may have.</p>,
        },
        {
            key: '13',
            label: 'Are the sizes true to measurements?',
            children: <p>We provide detailed size charts for each product to help you find the perfect fit. Please refer to the size chart on the product page to ensure you choose the right size.</p>,
        },
        {
            key: '14',
            label: 'Can I modify or cancel my order after it\'s been placed?',
            children: <p>We process orders quickly to ensure fast delivery, so modifications or cancellations may be limited. Contact our customer support as soon as possible, and we’ll do our best to assist you.</p>,
        },

    ];
    return (
        <div className="container-sm faqs top_def_100">
            <Header title={"FAQs"} subtitle={"FAQs"}/>
            <section className="question">
                <div className="question_box">
                    <div className="question_left">
                        <Collapse
                            accordion
                            expandIconPosition="end"
                            expandIcon={({isActive}) => (isActive ? <MinusOutlined/> : <PlusOutlined/>)}
                            className="custom-collapse"
                            onChange={setActiveKey}
                        >
                            {items.slice(0, 7).map(item => (
                                <Panel header={item.label} key={item.key}>
                                    {item.children}
                                </Panel>
                            ))}
                        </Collapse>
                    </div>
                    <div className="question_right">
                        <Collapse accordion expandIconPosition="end" className="custom-collapse">
                            {items.slice(7).map(item => (
                                <Panel header={item.label} key={item.key}>
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