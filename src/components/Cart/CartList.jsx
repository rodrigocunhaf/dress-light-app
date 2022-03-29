import React from "react";
import style from "./CartList.module.css"
import CartItemList from "./CartItemList";

const CartList = ( props ) => {

    return (
                <ul className={style.cartList}> 
                    <hr/>{
                    props.products.map(  ( product, index )  => {
                        return <CartItemList key={index} image={product.image} name={product.name} price={product.price} quanty={product.quanty}/>
                    })}
                </ul>)
};

export default CartList;