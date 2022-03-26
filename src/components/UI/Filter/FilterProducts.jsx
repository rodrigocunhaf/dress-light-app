import React, { useEffect, useState } from "react";
import style from "./FilterProducts.module.css";

const FilterProducts = ( props ) => {

    const [selectValue, setSelectValue] =  useState(15);
    const [isVisible, setIsVisible] =  useState(false)

    const onSelectedPages = ( event) => {
        setSelectValue(event.target.value)  
        setIsVisible(false)  
        props.itensByPage(event.target.value)  
    };

    const isVisibleTrue = ( ) => {
        setIsVisible (true)
    };

    const isVisibleFalse = ( ) => {
        setIsVisible(false)
    }


    return (
        <React.Fragment>
                <div className={style.container} onBlur={isVisibleFalse} >
                    <p>Items por página:</p>
                    <div>
                        <div onClick={isVisibleTrue} className={style.display} >{selectValue}</div>
                        <div className={isVisible === false && style.invisible || style.visible } onBlur={isVisibleFalse}>
                            <button value={10}  onClick={onSelectedPages} >10</button>
                            <hr/>
                            <button value={15} onClick={onSelectedPages} >15</button>
                            <hr/>
                            <button value={20} name={10} onClick={onSelectedPages} >20</button>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
};

export default FilterProducts