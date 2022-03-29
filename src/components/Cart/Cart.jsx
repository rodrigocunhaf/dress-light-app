import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import cartIcon  from "../../assets/icons/cart.png";
import  { CartContext }  from "../../store/CartContext.js"
import CartList from "./CartList";

const Cart = ( props ) => {

    const cartContext = useContext(CartContext);

    const [isVisible, setIsVisible ] = useState(false);

    const showCart =  ( ) => {
        setIsVisible(!isVisible)
    };

    const closeCart = ( ) => {
        setIsVisible(false)
    };
    
    return (
            <React.Fragment>
                <div className={style.boxCart} onClick={showCart}>
                    <img src={cartIcon} />
                    <div className={style.boxQuanty}>{cartContext.products.length}</div>
                </div>
                <div className={`${style.container} ${isVisible === true ? style.visible : style.invisible } `} >
                    <div className={style.box}>
                        <div className={style.closeButton} onClick={closeCart}>X</div>
                        <div className={style.totalPrice}>Total price: ${cartContext.total},00</div>
                        <CartList products={cartContext.products}/>
                    </div>
                </div>
           </React.Fragment>)
};

export default Cart;