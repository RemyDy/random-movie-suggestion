import styled from './App.module.css';
// import breakpoints from "./helpers/breakpoints";
import logoTMDB from "./helpers/assets/TMDB-logo.png"
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile/Profile";
import RMS from "./pages/rms/RMS"
import Game from "./pages/game/Game"
import {Routes, Route} from "react-router-dom";
import Test from "./pages/test/Test"
import React, {useContext} from "react";
import {AuthContext} from "./context/Context";

function App() {
    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <article className={styled["page-wrapper"]}>
                <section className={styled["page-items"]}>

                    <header className={styled.header}>
                        <Navbar/>
                        <h1 className={styled.title}>Random Movie Suggester</h1>
                    </header>

                    <main className={styled.content}>
                        <Routes>
                            {isAuth ?
                                <>
                                    <Route path="/profile" element={<Profile/>}/>
                                    <Route path="/rms" element={<RMS/>}/>
                                    <Route path="/game" element={<Game/>}/>
                                    <Route path="/" element={<Home/>}/>
                                </>
                                :
                                <>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/registration" element={<Registration/>}/>
                                    <Route path="/test" element={<Test/>}/>
                                </>
                            }
                        </Routes>
                    </main>

                    <footer className={styled.footer}>
                        <div className={styled.sponsor}>
                            <img className={styled["logo-tmdb"]} src={logoTMDB} alt="logo-tmdb" width="175px"/>
                            <h5 className={styled.disclaimer}>
                                This product uses the TMDB API but is not endorsed or certified by TMDB
                            </h5>
                        </div>
                        <p className={styled.contact}>Developed by: Remco, email: remco.schut@novi-education.nl</p>
                    </footer>

                </section>
            </article>
        </>
    )
}

export default App;
