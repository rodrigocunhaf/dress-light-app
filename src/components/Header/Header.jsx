import React, { useContext, useEffect, useState }  from "react";
import style from "./Header.module.css"
import { AuthContext } from "../../store/AuthContext";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";
import Login from "../Login/Login.jsx";

const Header = ( props ) => {

    const context = useContext(AuthContext);

    const [isVisible, setIsVisible] =  useState(false)

    const onClickOpenLogin = ( ) => {
        setIsVisible(true)
    };

    const onClickCloseLogin =  ( action ) =>{
        setIsVisible(action)
    };


    return (
        <header className={style.container}>
            <div className={style.limiter}>
                <Login isVisible={isVisible} onClickCloseLogin={onClickCloseLogin}/>
                <div className={style.boxLimiter}>
                    <Logo componentClass={style.boxLogo}/>
                        <div className={style.box}>
                            { context.isLogged === 'true' ? <React.Fragment>
                                                                <div className={style.boxUser}>
                                                                    <p>{context.username}</p>
                                                                    <button className={style.logout} onClick={context.logOut}>Logout</button>
                                                                </div>
                                                                <Cart/>
                                                            : 
                                                        </React.Fragment> : <button className={style.loginButton} onClick={onClickOpenLogin}>Login</button>}
                    </div>
                </div>
            </div>      
        </header>)
};

export default Header;