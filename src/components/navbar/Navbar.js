import React from 'react';
import {Link} from "react-router-dom";
import styled from "./Navbar.module.css"

import logo from "../../helpers/assets/Logo RmS zwart-wit.png"

function Navbar() {
    return (
            <nav className={styled.navbar}>
                <img
                    className={styled["navbar-logo"]}
                    src={logo}
                    alt="logo"
                />
                <h1>Random Movie Suggester</h1>
                <div className={styled.links}>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/login/*">Profile</Link>
                    <Link to="/rms">RMS</Link>
                    <Link to="/rms/*">Game</Link>
                </div>
            </nav>
    );
}
export default Navbar;