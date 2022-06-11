import styles from "./Context.module.css"
import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import {NoviBackend, requests} from "../helpers/fetchdata/novi";
import animatie_loading from "../../src/helpers/assets/Animatie loading.gif"
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token && isTokenValid(token)) {
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }, []);

    function login(JWT) {
        localStorage.setItem("token", JWT)
        const decoded = jwt_decode(JWT);
        fetchUserData(decoded.sub, JWT, "/profile");
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        console.log('Gebruiker is uitgelogd!');
        navigate("/");
    }

    async function fetchUserData(id, token, redirectUrl) {

        try {
            const result = await NoviBackend.get(requests.get.logged.user, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data?.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: "done",
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (e) {
            console.error(e.response);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === "done" ? children : <>
                <div className={styles.loading}><p className={styles["loading__text"]}>Loading...</p>
                    <img className={styles["loading__image"]}
                         src={animatie_loading}
                         alt={"animation of movie clicker going up and down to emphasize loading of page"}
                    />
                </div>
            </>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;