import styles from './App.module.css';
import logoTMDB from "./helpers/assets/TMDB-logo.png"
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile/Profile";
import RMS from "./pages/rms/RMS"
import Game from "./pages/game/Game"
import {Routes, Route} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "./context/Context";

function App() {
    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <article className={styles["page-wrapper"]}>

                    <header>
                        <Navbar/>
                        <h1 className={styles.title}>Random Movie Suggester</h1>
                    </header>

                    <main className={styles.main}>
                        <Routes>
                            {isAuth ?
                                <>
                                    <Route index path="/profile/*" element={<Profile/>}/>
                                    <Route path="/rms/*" element={<RMS/>}/>
                                    <Route path="/game/*" element={<Game/>}/>
                                    <Route path="/" element={<Home/>}/>
                                </>
                                :
                                <>
                                    <Route index path="/login/*" element={<Login/>}/>
                                    <Route path="/registration/*" element={<Registration/>}/>
                                    <Route index path="/" element={<Home/>}/>
                                </>
                            }
                        </Routes>
                    </main>

                    <footer className={styles.footer}>
                        <div className={styles.sponsor}>
                            <img className={styles["logo-tmdb"]} src={logoTMDB} alt="logo-tmdb" />
                            <h5 className={styles.disclaimer}>
                                This product uses the TMDB API but is not endorsed or certified by TMDB
                            </h5>
                        </div>
                        <p className={styles.contact}>Developed by: Remco, email: remco.schut@novi-education.nl</p>
                    </footer>

            </article>
        </>
    )
}

export default App;
