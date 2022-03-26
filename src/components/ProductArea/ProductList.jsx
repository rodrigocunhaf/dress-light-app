import React, { useEffect, useState } from 'react';
import style from './ProductList.module.css';
import imageProduct from "../../assets/icons/products.jpg"
import ProductItem from './ProductItem';
import FilterProducts from '../UI/Filter/FilterProducts';


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

    const [initialList, setList ] = useState(items);

    const [productsByPage, setProductsByPage] =  useState(15)

    const itensByPage =  ( itensByPage) => {
        setProductsByPage(itensByPage)
    };


    return  ( <div className={style.container}>
                    <div className={style.box}>
                        <div className={style.filter}>
                            <FilterProducts itensByPage={itensByPage}/>
                        </div>
                        <ul>
                            { items.slice(0, productsByPage).map ( (item, index) => {
                                return ( 
                                    <ProductItem key={index} image={item.image}/>
                                )})}
                        </ul>
                        <hr/>
                        <div className={style.filter}></div>
                    </div>
            </div> )
};

export default ProductList;