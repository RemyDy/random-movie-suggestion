import React from 'react';
import Tile from "../../components/tiles/Tile"

function Login() {
    return (
        <>
            <Tile
                tile="isLogin"
            />

            <div className="home">
                <h2>Login</h2>
            </div>
        </>
    );
}

export default Login;