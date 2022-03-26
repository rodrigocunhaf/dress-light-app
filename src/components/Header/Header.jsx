import React, { useContext }  from "react";
import style from "./Header.module.css"
import cartIcon  from "../../assets/icons/cart.png"
import { AuthContext } from "../../store/AuthContext";
import Logo from "../Logo/Logo";


const Header = ( props ) => {

    const context = useContext(AuthContext);

    return (
        <header className={style.container}>
            <div className={style.boxLimiter}>
                <Logo componentClass={style.boxLogo}/>
                    <div className={style.box}>
                        { context.isLogged === 'true' ? <React.Fragment>
                                                        <div className={style.boxUser}>
                                                            <p>{context.username}</p>
                                                        </div>
                                                        <div className={style.boxCart}>
                                                                <img src={cartIcon}/>
                                                                <div className={style.boxQuanty}>0</div>
                                                        </div> : ''
                                                    </React.Fragment> : <div></div>}
                </div>
            </div>      
        </header>)
};

export default Header;