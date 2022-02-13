import React from 'react';

function Navbar () {
    return (
        <nav className="navbar">
             <h1>Random Movie Suggester</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/login">Login</a>
                <a href="/profile">Profile</a>
                <a href="/rms">RMS</a>
                <a href="/game">Game</a>
            </div>
        </nav>
    );
}

export default Navbar;