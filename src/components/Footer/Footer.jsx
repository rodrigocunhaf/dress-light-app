import React from "react";
import style  from "./Footer.module.css";
import Logo from "../Logo/Logo.jsx";

const Footer = ( ) => {

    return (<footer className={style.container}>
                <Logo componentClass={style.boxLogo}/>
        </footer>)
};

export default Footer;