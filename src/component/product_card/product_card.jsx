import React, {useState} from 'react';
import {Category} from "@/utils/db_products.jsx";
import {Link} from "react-router-dom";

const ProductCard = ({product , key}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Mahsulotning kategoriyasini topish
    const categoryName = Category.find(cat => cat.id === product.cat_id)?.name || "Unknown";
    return (
        <div
            key={key}
            className="home_s2_item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link className="home_s2_item_top" to={"#"}>
                <img
                    src={product.images}
                    alt={product.name}
                />
            </Link>
            <div className="home_s2_item_bottom">
                <span>{categoryName}</span> {/* Kategoriya nomi dinamik chiqadi */}
                <h5><Link to={"#"}>{product.name}</Link></h5>

            </div>
        </div>
    );
};

export default ProductCard;