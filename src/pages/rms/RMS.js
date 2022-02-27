import React from 'react';
import {Outlet} from "react-router-dom";

function RMS() {
    return (
        <>
            <div className="home">
                <h2>RMS</h2>
            </div>

            <Outlet/>
        </>
    );
}

export default RMS;