/* eslint-disable react-hooks/exhaustive-deps */
// noinspection JSIgnoredPromiseFromCall,JSCheckFunctionSignatures

import styled from "./Context.module.css"
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
    const navigate = useNavigate();

    useEffect(() => {
            const token = localStorage.getItem("token");

            // during testing and production enable this:
            // if (token) {
                // const decodedJWT = jwt_decode(token);
                // fetchUserData(decodedJWT.sub, token);

                if (token && isTokenValid(token)) {
                    const decodedJWT = jwt_decode(token);
                    console.log("token is valid");
                    fetchUserData(decodedJWT.sub, token);
                } else if (token && !isTokenValid(token)) {
                    console.log("token is not valid")
                    localStorage.clear();

            }
            else {
                toggleIsAuth({
                    isAuth: false,
                    user: null,
                    status: "done",
                });
            }
        },
        []);

    function login(JWT) {
        if (JWT !== undefined) {
            localStorage.setItem("token", JWT)
        }
        const decodedJWT = jwt_decode(JWT);
        fetchUserData(decodedJWT.sub, JWT, "/profile");
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

            if (result.status === 200) {
                toggleIsAuth({
                    ...isAuth,
                    isAuth: true,
                    user: {
                        id: result.data?.id,
                        username: result.data?.username,
                        email: result.data?.email,
                    },
                    status: "done",
                });

                if (redirectUrl) {
                    navigate(redirectUrl);
                }
            }
        } catch (e) {
            console.error(e.response);
            logout();
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
            {isAuth.status === "done" ? children : <><img className={styled.loading} src={animatie_loading}
                                                          alt="animatie_loading"/><p>Loading...</p></>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;