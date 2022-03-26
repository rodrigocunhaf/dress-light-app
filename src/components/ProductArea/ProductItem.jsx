import React from "react";
import style from "./ProductItem.module.css";

const ProductItem = ( props) => {
        return (
                <li className={style.productCard}>
                    <div className={style.imageProduct}>
                        <img src={props.image}/>
                    </div>
                    <div className={style.infoProduct}>
                        <div className={style.price}>
                            <p>R$ 150,00</p>
                            <p>à vista ou 3xR$50,00</p>
                        </div>
                    </div>
                </li>)
    }

export default ProductItem;