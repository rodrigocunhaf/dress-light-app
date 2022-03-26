import React from "react";
import style from "./Logo.module.css";
import logoEnterprise from "../../assets/icons/dress.png"

const Logo = ( props ) => {

    const addClassName = `${style.logoEnterprise} ${props.componentClass}`

    return (
                <div className={addClassName}>
                    <img src={logoEnterprise}/>
                    <p>DressLight</p>
                </div>)
};

export default Logo;