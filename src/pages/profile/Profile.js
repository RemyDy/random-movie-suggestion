import React from 'react';
import {Outlet} from "react-router-dom";

function Profile() {
    return (
        <>
            <div className="home">
                <h2>Profile</h2>
            </div>

            <Outlet />
        </>
    );
}

export default Profile;