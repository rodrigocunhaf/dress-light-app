import React, { useContext, useRef } from "react";
import style from "./CartItemList.module.css";
import { CartContext } from "../../store/CartContext.js";


const CartItemList = (props ) => {

    const cartContext = useContext(CartContext);

    const addProductInList = ( ) => {
        cartContext.addProductInCart({
            name:props.name,
            price:props.price
        });
    };

    const removeProductInCart = ( ) => {
        cartContext.removeProductInCart({
            name:props.name,
            price:props.price
        });
    };


    return (
        <React.Fragment>
            <li className={style.container}>
                <div className={style.box}>
                    <img src={props.image} className={style.cartItemImage}/>
                    <div className={style.inputControl}>
                        <div>{props.name}</div>
                        <div>  
                            <label>Quant.</label>
                            <div className={style.controller}>
                                <button onClick={removeProductInCart}>-</button>
                                <div className={style.displayQuanty}>{props.quanty}</div>
                                <button onClick={addProductInList}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>total: ${props.price * props.quanty},00</div>
            </li>
            <hr/>
        </React.Fragment>)
};

export default CartItemList;