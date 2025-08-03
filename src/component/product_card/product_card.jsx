import React, {useState} from 'react';
import {Category} from "@/utils/db_products.jsx";
import {Link} from "react-router-dom";
import {PRODUCT_SOLO} from "@/utils/consts.jsx";

const ProductCard = ({product, key , array}) => {
    const [isHovered, setIsHovered] = useState(false);
    const categoryName = Category.find(cat => cat.id === product.cat_id)?.name || "Unknown";

    const imgChecker = () => {
        if (Array.isArray(product.images)) {
            return isHovered ? product.images[1] : product.images[0];
        } else {
            return product.images;
        }
    }

    return (
        <Link
            key={key}
            className="home_s2_item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         //    onClick={()=>window.scrollTo(0, 0)}
         // to={PRODUCT_SOLO.replace(":product_id" , product.id).replace(":array" , array)}
             to={"#"}>
            <Link onClick={()=>window.scrollTo(0, 0)} className="home_s2_item_top" to={"#"}>
                <img
                    src={imgChecker()}
                    alt={product.name}
                />
            </Link>
            <div className="home_s2_item_bottom">
                {/*<h5><Link onClick={()=>window.scrollTo(0, 0)} to={PRODUCT_SOLO.replace(":product_id" , product.id).replace(":array" , array)}>{product.name}</Link></h5>*/}
            </div>
        </Link>
    );
};

export default ProductCard;