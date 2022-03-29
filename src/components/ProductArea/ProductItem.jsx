import React, { useContext } from "react";
import { CartContext } from "../../store/CartContext";
import style from "./ProductItem.module.css";
import { AuthContext } from "../../store/AuthContext";

const ProductItem = ( props) => {

    const cartContext = useContext(CartContext);
    
    const userContext = useContext(AuthContext)

    const addProductInCart = ( ) => {
        cartContext.addProductInCart(props)
    };

        return (
                <li className={style.productCard}>
                    <div className={style.imageProduct}>
                        <img src={props.image}/>
                    </div>
                    <div className={style.infoProduct}>
                        <div className={style.price}>
                            <p>R${props.price},00</p>
                            <p>à vista ou 3xR$50,00</p>
                        </div>
                    </div>
                    { userContext.isLogged !== false && <button onClick={addProductInCart}>Add a cart</button>}
                </li>)
    }

export default ProductItem;