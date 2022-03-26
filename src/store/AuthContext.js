import React from "react";

export const AuthContext =  React.createContext();

const user = {
    isLogged: localStorage.getItem('isLogged')|| false,
    username:'Ana Paula Lima dos Santos'
}

const AuthProvider =  ( props ) => {
    return <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
};

export default AuthProvider;