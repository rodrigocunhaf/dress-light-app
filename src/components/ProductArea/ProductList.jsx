import React from 'react';
import style from './ProductList.module.css';
import imageProduct from "../../assets/icons/products.jpg"


const items = [
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
    {
        image:imageProduct
    },
];


const ProductList = ( ) => {

    return  ( <div className={style.container}>
                    <div className={style.box}>
                        <ul>
                            { items.map ( item => {
                                return <li className={style.productCard}>
                                            <div className={style.imageProduct}>
                                                <img src={item.image}/>
                                            </div>
                                            <div className={style.infoProduct}>
                                                <div className={style.price}>
                                                    <p>R$ 150,00</p>
                                                    <p>à vista ou 3xR$50,00</p>
                                                </div>
                                            </div>
                                        </li>})}
                        </ul>
                    </div>
            </div> )
};

export default ProductList;