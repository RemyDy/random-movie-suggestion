import styled from './App.module.css';
import breakpoints from "./helpers/breakpoints";

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
            <div className={styled.app}>
                <Navbar className={breakpoints}/>
                <Routes>
                    {isAuth ?
                        <>
                            <Route path="/profile/*" element={<Profile/>}/>
                            <Route path="/rms/*" element={<RMS/>}/>
                            <Route path="/game/*" element={<Game/>}/>
                        </>
                        :
                        <>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login/" element={<Login/>}/>
                            <Route path="/registration/*" element={<Registration/>}/>
                        </>
                    }
                </Routes>
                <div className={styled.footer}>
                    <div>sponsor</div>
                    <div>contact</div>
                </div>
            </div>
        </>
    );
}

export default App;
