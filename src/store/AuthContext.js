import React, { useEffect, useState } from "react";

export const AuthContext =  React.createContext();

const user = {
    isLogged: localStorage.getItem('isLogged')|| false,
    username:localStorage.getItem('username')|| false
}

const AuthProvider =  ( props ) => {

    const [userConfig , setUserConfig ] = useState(user);

    const logIn = ( data ) => {
        localStorage.setItem('isLogged',true);
        localStorage.setItem('username',data.email);

        setUserConfig( (prevState => {
            return {...userConfig, username:localStorage.getItem('username'), isLogged:localStorage.getItem('isLogged')};
        }));

    };

    const logOut = ( data ) => {
        localStorage.removeItem('isLogged');
        localStorage.removeItem('username');
        setUserConfig( ( prevState) => {
            return {...prevState, username:localStorage.getItem('username')|| false , isLogged: localStorage.getItem('isLogged')|| false}
        });
    }

    return <AuthContext.Provider value={{...userConfig, logIn , logOut}}>
        {props.children}
        </AuthContext.Provider>
};

export default AuthProvider;