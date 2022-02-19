import styled from './App.module.css';
import Block from "./components/blocks/Block";
import breakpoints from "./helpers/breakpoints";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import RMS from "./pages/rms/RMS"
import Game from "./pages/game/Game"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";


function App() {
    return (
        <>
            <div className={styled.app}>
                <BrowserRouter>
                    <Navbar className={breakpoints}/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="/login/*" element={<Profile/>}/>
                        <Route path="/rms" element={<RMS/>}/>
                        <Route path="/rms/*" element={<Game/>}/>
                    </Routes>
                </BrowserRouter>
                <Block/>
                <div className={styled.footer}>
                    <div>sponsor</div>
                    <div>contact</div>
                </div>
            </div>
        </>
    );
}

export default App;
