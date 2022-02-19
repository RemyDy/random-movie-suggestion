import styled from './App.module.css';
import Block from "./components/blocks/Block";
import breakpoints from "./helpers/breakpoints";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import RMS from "./pages/rms/RMS"
import Game from "./pages/game/Game"
import {Routes, Route, Navigate, Outlet} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "./context/Context";

function PrivateOutlet() {
    const {isAuth} = useContext(AuthContext);
    return isAuth ? <Outlet /> : <Navigate to="/" />
}

function App() {


    return (
        <>
            <div className={styled.app}>
                <Navbar className={breakpoints}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="private" element={<PrivateOutlet />}>
                        <Route path="private/profile" element={<Profile/>}/>
                        <Route path="private/RMS" element={<RMS/>}/>
                        <Route path="private/Game" element={<Game/>}/>
                    </Route>
                </Routes>
                }
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
