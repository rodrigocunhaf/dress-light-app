import React from "react";
import style from "./LateralMenu.module.css";
import userLogo from "../../assets/icons/user-logo.png"


const LateralMenu = ( props ) => {

    return (<div className={style.container}>
                <div>
                </div>
                <div className={style.boxButton}>
                    <button type="submit">Logout</button>
                </div>
        </div>)
};

export default LateralMenu;
