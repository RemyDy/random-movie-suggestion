import React, {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const navigate = useNavigate();
    const [isAuth, toggleIsAuth] = useState(false);

    function login() {
        console.log('Gebruiker is ingelogd!');
        toggleIsAuth(true);
        navigate("/profile")
    }

    function logout() {
            console.log('Gebruiker is uitgelogd!');
            toggleIsAuth(false);
            navigate("/");
    }

    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;