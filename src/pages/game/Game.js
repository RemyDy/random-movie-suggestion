import React from 'react';
import {Outlet} from "react-router-dom";

function Game() {
    return (
        <>
            <div className="home">
                <h2>Game</h2>
            </div>


            <Outlet/>
        </>
    );
}

export default Game;