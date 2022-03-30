import React, { useEffect, useState } from 'react';

const InitialCart =  {
    total:0,
    products:[]
};

export const CartContext = React.createContext();

const CartProvider =  ( props ) => {

    const [products, setProducts ] = useState(InitialCart.products);
    const [total, setTotal ]=  useState (InitialCart.total);

    const  addProductInCart =  (product) => {

        const filteredProduct = products.filter (  productInList => { return productInList.name === product.name});

        if (filteredProduct.length > 0 ){
            
            const index = products.findIndex( productInList => { return productInList.name === product.name});

            setProducts ( prevState => {
                prevState[index].quanty = prevState[index].quanty + 1
                return [...prevState]
            });

            setTotal ( prevState => { 
                return prevState + product.price
            });

        } else { 

            setProducts ( prevState => {
                return  [...prevState, {...product, quanty:1}]
            });

            setTotal ( prevState => { 
                return prevState + product.price
            });
        }
        
    };

    const cleanCart  = ( ) => {
        setProducts([]);
        setTotal(0);
    };

    const removeProductInCart = ( product ) =>{

        const index = products.findIndex ( productInList => { return productInList.name === product.name});

        if ( products[index].quanty ===1){

            setTotal( prevState => {
                return prevState - product.price;

            });

            setProducts(prevState => {
                prevState.splice(index,1)
                return [...prevState]
            });
            
        } else {

            setTotal( prevState => {
                return prevState - product.price;

            });

            setProducts (prevState => {
                prevState[index].quanty = prevState[index].quanty - 1;
                return [...prevState]
            });
        };

    };

    return  (
        <CartContext.Provider value={ {products,total, addProductInCart, removeProductInCart, cleanCart } }>
            {props.children}
        </CartContext.Provider>
    );
};


export default CartProvider;