import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "./Login.module.css";
import validator from "validator";
import { AuthContext } from "../../store/AuthContext";
import { CartContext  } from "../../store/CartContext";

const Login = ( props) => {


    const [email, setEmail] = useState('');
    const [isValidEMail, setIsValidEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [isValidEPassword, setIsValidPassword] = useState(false);

    const authContext = useContext(AuthContext);

    const cartContext = useContext (CartContext);


    const onChangeSetEmail =  ( event ) => {
        setEmail(event.target.value);

    };

    const onChangeSetPassword =  ( event ) => {
        setPassword(event.target.value);

    };

    const setInvisible = ( ) => {
        props.onClickCloseLogin(false)
    };

    const onSubmitForm = ( event) => {
        event.preventDefault();
        authContext.logIn({email});
        props.onClickCloseLogin(false)
        setEmail('');
        setPassword('');
        cartContext.cleanCart();
    };

    useEffect ( ( ) => {


        if ( validator.isEmail(email) && email.length > 1){
            setIsValidEmail(true);
        }
        else {
            setIsValidEmail(false);
        }

        if ( !validator.contains(password,' ') && password.length > 5){
            setIsValidPassword(true);
        }
        else {
            setIsValidPassword(false);
        }

    },[email,password]);

    return ReactDOM.createPortal(
        <div className={`${style.modalLogin} ${props.isVisible === false ? style.hidden : ''}`}>
            <div className={style.container}>
                <button className={style.close} onClick={setInvisible}>x</button>
                <form onSubmit={onSubmitForm}>
                    <label>Email
                        <input type="text" onChange={onChangeSetEmail} value={email}/>
                        <span className={style.boxValidation}>
                            <div className={style.validated}
                                style={{opacity:isValidEMail === true && 1}}>validated</div>
                            <div className={style.invalid}
                                style={{opacity:isValidEMail === false && email.length > 0 && 1}}>invalid</div>
                        </span>
                    </label>
                    <label>Password
                        <input onChange={onChangeSetPassword} type="password" value={password}/>
                        <span className={style.boxValidation}>
                            <div className={style.validated}
                                style={{opacity:isValidEPassword === true && 1}}>validated</div>
                            <div className={style.invalid}
                                style={{opacity:isValidEPassword === false && password.length > 0 && 1}}>invalid</div></span>
                    </label>
                    <div className={style.boxButton}>
                        <button disabled={ 
                            (isValidEMail ===  false || isValidEPassword === false) ? true : false
                        } >Login</button>
                    </div>
                </form>
            </div>
        </div>
    , document.getElementById("login") )
};

export default Login ;