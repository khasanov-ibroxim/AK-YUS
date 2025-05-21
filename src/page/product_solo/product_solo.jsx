import React, {useEffect, useRef, useState} from 'react';
import "./product_solo.css"
import {BestSell, Arrivals} from "@/utils/db_products.jsx";
import {useParams} from "react-router-dom";
import {Collapse} from 'antd';
import AddIcon from '@mui/icons-material/Add';
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Autoplay, FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import {useTranslation} from "react-i18next";
import item_1 from "@/assets/allphoto/5V1A0081_resized.jpg";
import item_2 from "@/assets/allphoto/5V1A0276_resized.jpg";
import item_3 from "@/assets/allphoto/5V1A0543_resized.jpg";
import item_4 from "@/assets/allphoto/5V1A0590_resized.jpg";
import item_5 from "@/assets/allphoto/5V1A0607_resized.jpg";
import item_6 from "@/assets/allphoto/5V1A0615_resized.jpg";
import item_7 from "@/assets/allphoto/5V1A9843_resized.jpg";
import item_8 from "@/assets/allphoto/5V1A0432_resized.jpg";


const images = [
    item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8
]

const ProductSolo = () => {
    const {product_id, array} = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);
    const {t} = useTranslation();
    const [posts, setPosts] = useState([
        {
            img: item_1,
            name: "Marcus Turner",
            subname: "CEO/FOUNDER"
        },
        {
            img: item_2,
            name: "Marcus Turner",
            subname: "CEO/FOUNDER"
        },
        {
            img: item_3,
            name: "Marcus Turner",
            subname: "CEO/FOUNDER"
        },
        {
            img: item_4,
            name: "Marcus Turner",
            subname: "CEO/FOUNDER"
        },
        {
            img: item_5,
            name: "Marcus Turner",
            subname: "CEO/FOUNDER"
        },
        {
            img: item_6,
            name: "Marcus Turner",
            subname: "CEO/FOUNDER"
        },
        {
            img: item_7,
            name: "Marcus Turner",
            subname: "CEO/FOUNDER"
        },
        {
            img: item_8,
            name: "Marcus Turner",
            subname: "CEO/FOUNDER"
        },
    ]);
    const currentArray = array === "BestSell" ? BestSell : Arrivals
    const currentProduct = currentArray.find(item => item.id === parseInt(product_id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product_id]);


    const items = [
        {
            key: '1',
            label: 'Description',
            children: <>
                <p>In WooCommerce, a product description refers to the written content that provides information about a
                    specific product listed on an online store. It serves to inform potential customers about the
                    features, benefits, specifications, and other relevant details of the product. A well-crafted
                    product description can play a crucial role in influencing a customer’s purchasing decision.</p>
                <p>In WooCommerce, you can create and manage product descriptions through the WordPress dashboard. Each
                    product has its own page where you can input and format the description, add images, set prices, and
                    manage other product-related details. Effective product descriptions are essential for e-commerce
                    success as they help customers make informed decisions and contribute to a positive shopping
                    experience.</p>
            </>,
        },
        {
            key: '2',
            label: 'Additional information',
            children: <div className="product_component_table" style={{marginTop: "0"}}>
                <div className="product_component_table_item">
                    <div className="product_component_table_item_head" style={{color: "#222"}}>Color</div>
                    <div className="product_component_table_item_text">Blue, Gray, Green, Red, Yellow</div>
                </div>
                <div className="product_component_table_item">
                    <div className="product_component_table_item_head" style={{color: "#222"}}>Size</div>
                    <div className="product_component_table_item_text">Large, Medium, Small</div>
                </div>

            </div>,
        },
    ];


    return (
        <div className={"container"} style={{paddingTop: "12%"}}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="product_img_box">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                                '--swiper-button-background': '#fff !important',
                                width: "100%",
                                height: "540px"
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{swiper: thumbsSwiper}}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="product_swiper_top"
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} alt={`Product ${index}`}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="product_swiper_bottom"
                            style={{height: "120px", marginTop: "5px"}}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} alt={`Thumb ${index}`}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product_content">
                        <div className="product_content_title">
                            <h1>{currentProduct.name}</h1>
                            <h2>$27.90</h2>
                        </div>
                        <div className="product_content_text">
                            <p>A product short description is a concise and brief overview of a product, providing key
                                information to potential customers. Typically, it is a brief summary that highlights the
                                most important features, benefits, and characteristics of the product. The goal is to
                                quickly communicate relevant details to the consumer and entice them to learn more or
                                make a purchase.</p>
                        </div>
                        <div className="product_color product_footer_item">
                            <p>Color</p>
                            <div className="product_footer_item_row">
                                <div className="product_color_item"></div>
                                <div className="product_color_item"></div>
                                <div className="product_color_item"></div>
                            </div>
                        </div>
                        <div className="product_size product_footer_item">
                            <p>Size</p>
                            <div className="product_footer_item_row">
                                <div className="product_size_item">Large</div>
                                <div className="product_size_item">Medium</div>
                                <div className="product_size_item">Small</div>
                            </div>
                        </div>

                        <div className="product_component_table">
                            <div className="product_component_table_item">
                                <div className="product_component_table_item_head">SKU</div>
                                <div className="product_component_table_item_text">N/A</div>
                            </div>
                            <div className="product_component_table_item">
                                <div className="product_component_table_item_head">Categories</div>
                                <div className="product_component_table_item_text"> Jackets, Women</div>
                            </div>
                            <div className="product_component_table_item">
                                <div className="product_component_table_item_head">Tags</div>
                                <div className="product_component_table_item_text">clothing, etc, fashion, m31, m41,
                                    products, women
                                </div>
                            </div>
                        </div>

                        <div className="product_collapses">
                            <Collapse
                                accordion
                                items={items}
                                expandIconPosition={"end"}
                                expandIcon={({isActive}) => isActive ? <MinusOutlined/> : <PlusOutlined/>}
                            />
                        </div>
                        <div className="product_links">
                            <div className="product_links_item"><TelegramIcon/> Telegram</div>
                            <div className="product_links_item"><InstagramIcon/> Instagram</div>
                            <div className="product_links_item"><FacebookIcon/> Facebook</div>
                            <div className="product_links_item"><WhatsAppIcon/> WhatsApp</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="product_corusel">
                <div className="product_corusel_title">
                    <h1>Related Products</h1>
                </div>

                <div className="home_s6_swiper_box">
                    <div className="custom-nav">
                        <button
                            className="swiper-button-prev"
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >

                        </button>
                        <button
                            className="swiper-button-next"
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                        </button>
                    </div>
                    <Swiper
                        ref={swiperRef} // Swiperga ref qo'shamiz
                        slidesPerView={3}
                        spaceBetween={0}
                        pagination={{clickable: true}}
                        modules={[FreeMode, Autoplay]}
                        autoplay={{
                            speed: 200,
                            autoplaySpeed: 200,
                        }}
                        grabCursor={true}
                        loop={true}
                        breakpoints={{
                            320: {slidesPerView: 1,},  // Mobil (<= 320px)
                            576: {slidesPerView: 2,},  // Kichik ekran (<= 576px)
                            768: {slidesPerView: 2,},  // O‘rta ekran (<= 768px)
                            900: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                            1000: {slidesPerView: 3,},  // O‘rta ekran (<= 768px)
                        }}
                        className="mySwiper"
                        data-aos="fade-up"
                    >
                        {posts.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className="s6_item">
                                    <div className={"s6_item_img"} style={{height: "100%"}}>
                                        <img src={product.img} alt={product.name}/>
                                    </div>
                                    {/*<h1><Link to={"#"}>{product.name}</Link></h1>*/}
                                    {/*<div className="s6_item_title">*/}
                                    {/*    {product.subname}*/}
                                    {/*</div>*/}

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ProductSolo;