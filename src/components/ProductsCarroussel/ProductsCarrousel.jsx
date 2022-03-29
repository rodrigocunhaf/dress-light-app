import React, { useEffect, useReducer, useState } from "react";
import style from "./ProductsCarrousel.module.css";
import imageCarroussel1 from "../../assets/carroussel/sale01.jpg";
import imageCarroussel2 from "../../assets/carroussel/sale02.jpg" ;
import imageCarroussel3 from "../../assets/carroussel/sale03.jpg" ;
import arrowImage from "../../assets/icons/arrow.png" ;



const list1 = [
    {
        id:1,
        image:imageCarroussel1,
    },
    {
        id:2,
        image:imageCarroussel2,
    },
    {
        id:3,
        image:imageCarroussel3,
    }
];



const ProductsCarrousel = ( props ) => {

    const [itemsList, setList ] = useState(list1);

    const [position , setPosition] = useState(0);

    const onClickRight = ( ) => {
        if  ( position - 100 > -300 )
            setPosition((prevState)=>{
                return prevState - 100
        })
        
        else {
            setPosition(0)
        } 
    };

    const onClickLeft = ( ) => {
        if  ( position + 100 < 300 )
            setPosition((prevState)=>{
                return prevState + 100})
            
    };
    
    
    const RollClickOne = ( )=> {
        setPosition(0)
    };

    const RollClickTwo = ( )=> {
        setPosition(-100)
    };

    const RollClickThree = ( )=> {
        setPosition(-200)
    };


    useEffect ( ( ) => {

        let timer ;

        if ( position === 0 ){
            timer = setTimeout ( ( ) => { setPosition ( -100)},5000) 
            return ( ) => { clearTimeout(timer)}
        }
    
        if ( position === -100 ){
            timer = setTimeout ( ( ) => {setPosition ( -200)},5000)  
            return ( ) => { clearTimeout(timer)} 
        }
    
        if ( position === -200 ){
            timer = setTimeout ( ( ) => {setPosition ( 0 )},5000)  
            return ( ) => { clearTimeout(timer)}  
        }
    })

    return (<div className={style.container} >
                <div className={style.limiter}>
                    <div className={style.box}>
                        <button className={`${style.carrouselArrow && style.buttonLeft}`} onClick={onClickLeft} disabled={ position === 0 ? true : false}><img className={style.leftArrow} src={arrowImage}/></button>
                        <div className={style.hidden}>
                            <ul className={`${style.listProducts}` } >
                                {itemsList.map( (item,index) => {
                                    return <li style={{left:position+'%'}} key={index}><img src={item.image}/></li>
                                })}
                            </ul>
                        </div>
                        <button className={`${style.carrouselArrow && style.buttonRight}`} onClick={onClickRight}><img  className={style.rightArrow} src={arrowImage}/></button>
                    </div>
                    <div className={style.BoxRollButtons}>
                        <button className={`${style.rollButton} ${position === 0 && style.BoxButtonSelected}`} onClick={RollClickOne}></button>
                        <button className={`${style.rollButton} ${position === -100 && style.BoxButtonSelected}`} onClick={RollClickTwo}></button>
                        <button className={`${style.rollButton} ${position === -200 && style.BoxButtonSelected}`} onClick={RollClickThree}></button>
                    </div>
                </div>
            </div>)
};


export default ProductsCarrousel;