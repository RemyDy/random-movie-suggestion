import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/Context";
import styled from "./Navbar.module.css"
import logo from "../../helpers/assets/Logo RmS zwart-wit.png"

function Navbar() {
    const {logout, isAuth} = useContext(AuthContext);

    return (
        <>
            <nav className={styled.navbar}>
                <img
                    className={styled["navbar-logo"]}
                    src={logo}
                    alt="logo"
                />
                <h1 className={styled.title}>Random Movie Suggester</h1>
                <div className={styled.links}>
                    {isAuth ?
                        <div className={styled["private-links"]}>
                            <Link to="private/profile">Profile</Link>
                            <Link to="private/RMS">RMS</Link>
                            <Link to="private/Game">Game</Link>
                            <Link
                                onClick={logout}
                                to="/">Logout</Link>
                        </div>
                        :
                        <div className={styled["public-links"]}>
                            <Link to="/">Home</Link>
                            <Link to="login">Login</Link>
                        </div>
                    }
                </div>
            </nav>
        </>
    );
}

export default Navbar;