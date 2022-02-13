import styled from './App.module.css';
import breakpoints from "./helpers/breakpoints";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import RMS from "./pages/rms/RMS"
import Game from "./pages/game/Game"
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <div className={styled.app}>
            <BrowserRouter>
                <Navbar className={breakpoints} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/login/*" element={<Profile />} />
                    <Route path="/rms" element={<RMS />} />
                    <Route path="/rms/*" element={<Game />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
