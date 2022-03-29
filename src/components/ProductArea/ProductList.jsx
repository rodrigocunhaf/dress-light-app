import React, { useEffect, useState } from 'react';
import style from './ProductList.module.css';
import imageProduct from "../../assets/icons/products.jpg"
import ProductItem from './ProductItem';
import FilterProducts from '../UI/Filter/FilterProducts';
import Pagination from '../UI/Pagination/Pagination';


const items = [
    {
        name:"Dress 1",
        image:imageProduct,
        price:150
    },
    {   
        name:"Dress 2",
        image:imageProduct,
        price:120,
    },
    {
        name:"Dress 3",
        image:imageProduct,
        price:500
    },
    {
        name:"Dress 4",
        image:imageProduct,
        price:25
    },
    {
        name:"Dress 5",
        image:imageProduct,
        price:30
    },
    {   
        name:"Dress 6",
        image:imageProduct,
        price:40
    },
    {   
        name:"Dress 7",
        image:imageProduct,
        price:45
    },
    {
        name:"Dress 8",
        image:imageProduct,
        price:180
    },
    {
        name:"Dress 9",
        image:imageProduct,
        price:22
    },
    {
        name:"Dress 10",
        image:imageProduct,
        price:47
    },
    {
        name:"Dress 11",
        image:imageProduct,
        price:22
    },
    {
        name:"Dress 12",
        image:imageProduct,
        price:64
    },
    {
        name:"Dress 13",
        image:imageProduct,
        price:122
    },
    {
        name:"Dress 14",
        image:imageProduct,
        price:280,
    },
    {
        name:"Dress 15",
        image:imageProduct,
        price:190
    },
    {
        name:"Dress 16",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 17",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 18",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 19",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 20",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 10",
        image:imageProduct,
        price:47
    },
    {
        name:"Dress 11",
        image:imageProduct,
        price:22
    },
    {
        name:"Dress 12",
        image:imageProduct,
        price:64
    },
    {
        name:"Dress 13",
        image:imageProduct,
        price:122
    },
    {
        name:"Dress 14",
        image:imageProduct,
        price:280,
    },
    {
        name:"Dress 15",
        image:imageProduct,
        price:190
    },
    {
        name:"Dress 16",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 17",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 18",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 19",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 11",
        image:imageProduct,
        price:22
    },
    {
        name:"Dress 12",
        image:imageProduct,
        price:64
    },
    {
        name:"Dress 13",
        image:imageProduct,
        price:122
    },
    {
        name:"Dress 14",
        image:imageProduct,
        price:280,
    },
    {
        name:"Dress 15",
        image:imageProduct,
        price:190
    },
    {
        name:"Dress 16",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 17",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 18",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 19",
        image:imageProduct,
        price:111
    },
    {
        name:"Dress 11",
        image:imageProduct,
        price:22
    },
    {
        name:"Dress 12",
        image:imageProduct,
        price:64
    },
    {
        name:"Dress 13",
        image:imageProduct,
        price:122
    },
    {
        name:"Dress 14",
        image:imageProduct,
        price:280,
    },
    {
        name:"Dress 16",
        image:imageProduct,
        price:111
    }


];


const ProductList = ( ) => {

    const [initialList, setList ] = useState(items);

    const [productsByPage, setProductsByPage] =  useState(10)


    const itensByPage =  ( itensByPage) => {
        setProductsByPage(itensByPage)
    };


    const getPage =  ( data ) => {
        setList(items.slice(data.startIndex, data.finalIndex))
    };


    console.log(window.screen.availWidth)

    return  ( <div className={style.container}>
                    <div className={style.box}>
                        <div className={style.filter}>
                            <FilterProducts itensByPage={itensByPage}/>
                        </div>
                        <div className={style.listHeight}>
                            <ul className={style.listData}>
                                
                                { initialList.slice(0,productsByPage).map ( (item, index) => {
                                    return ( 
                                        <ProductItem key={index} image={item.image} name={item.name} price={item.price}/>
                                    )})}
                            </ul>
                        <hr/>
                        <div className={style.filter}>
                            <Pagination items={items} productsByPage={productsByPage} getPage={getPage}/>
                        </div>
                        </div>
                    </div>
            </div> )
};

export default ProductList;