import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/Context";
import styled from "./Navbar.module.css"
import logo_open from "../../helpers/assets/RmS_zwartwit_open.png"
import logo_closed from "../../helpers/assets/RmS_zwartwit_dicht.png"

function Navbar() {
    const {logout, isAuth} = useContext(AuthContext);

    return (
        <nav className={styled.navbar}>
            {isAuth ?
                <div className={styled["logo-holder"]}>
                    <img
                        className={styled["navbar-logo"]}
                        src={logo_open}
                        alt="logo-open"
                    />
                </div>
                :
                <div>
                    <img
                        className={styled["navbar-logo"]}
                        src={logo_closed}
                        alt="logo-closed"
                    />
                </div>
            }

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