import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/Context";
import styled from "./Navbar.module.css"
import logo from "../../helpers/assets/Logo RmS zwart-wit.png"

function Navbar() {
    const {logout, isAuth} = useContext(AuthContext);

    return (
            <nav className={styled.navbar}>
                <img
                    className={styled["navbar-logo"]}
                    src={logo}
                    alt="logo"
                />
                <h1 className={styled.title}>Random Movie Suggester</h1>
                    {isAuth ?
                        <div className={styled["private-links"]}>
                            <NavLink to="profile" end>Profile</NavLink>
                            <NavLink to="RMS" end>RMS</NavLink>
                            <NavLink to="Game" end>Game</NavLink>
                            <NavLink
                                onClick={logout}
                                to="/" end>Logout</NavLink>
                        </div>
                        :
                        <div className={styled["public-links"]}>
                            <NavLink to="/" end>Home</NavLink>
                            <NavLink to="login" end>Login</NavLink>
                        </div>
                    }
                </nav>
    );
}

export default Navbar;