import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/Context";
import styles from "./Navbar.module.css"
import logo_open from "../../helpers/assets/RmS_zwartwit_open.png"
import logo_closed from "../../helpers/assets/RmS_zwartwit_dicht.png"

function Navbar() {
    const {logout, isAuth} = useContext(AuthContext);

    return (
        <nav className={styles.navbar}>

            {isAuth ?
                <article className={styles["nav-container"]}>
                    <img
                        className={styles["navbar-logo"]}
                        src={logo_open}
                        alt="logo-open"
                    />
                    <div className={styles.links}>
                        <NavLink to="profile" end>Profile</NavLink>
                        <NavLink to="RMS" end>RMS</NavLink>
                        <NavLink to="Game" end>Game</NavLink>
                        <NavLink
                            onClick={logout}
                            to="/" end>Logout</NavLink>
                    </div>
                </article>

                :

                <article className={styles["nav-container"]}>
                    <img
                        className={styles["navbar-logo"]}
                        src={logo_closed}
                        alt="logo-closed"
                    />
                    <div className={styles.links}>
                        <NavLink to="/" end>Home</NavLink>
                        <NavLink to="login" end>Login</NavLink>
                    </div>
                </article>
            }
        </nav>
    );
}

export default Navbar;