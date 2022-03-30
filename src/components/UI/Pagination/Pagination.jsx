import React, { useState } from "react";
import style from "./Pagination.module.css"

const Pagination = ( props ) => {

    const listButtonsRange = Math.floor(props.items.length/ props.productsByPage);

    const arrayButtons = [];


    if ( props.items.length % props.productsByPage === 0){
        for ( let x = 0 ; x <= listButtonsRange - 1 ; x++ ){
            arrayButtons.push(x+1);
        };
    }
    else {
        for ( let x = 0 ; x <= listButtonsRange ; x++ ){
            arrayButtons.push(x+1);
        };
    }

    

    const getPage = ( event ) => {
        const obj = {
            startIndex: Number(event.target.value) * props.productsByPage - props.productsByPage,
            finalIndex: Number(event.target.value) * props.productsByPage,
        };

        props.getPage(obj)
    };



    return (
        <div>
            <ul className={style.container}>
                {
                arrayButtons.map ( button  => {
                    return <button className={style.button} onClick={getPage} value={button}>{button}</button>
                })}
            </ul>
        </div>
    )
};


export default Pagination;