import React  from "react";
import style from "./Header.module.css"
import logoEnterprise  from "../../assets/icons/dress.png"

const Header = ( props ) => {

    return (
        <header className={style.container}>
            <div>
                <div className={style.boxLogo}>
                    <img  className={style.logoEnterprise} src={logoEnterprise}/>
                    <p>DressLight</p>
                </div>
            </div>      
        </header>)
};

export default Header;