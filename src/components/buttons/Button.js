import React from 'react';
import styled from "./Button_module.css";

function Button({name, type, onClick, hidden}) {
    return (
        <>
                <button
                    className={styled.button}
                    type={type}
                    onClick={onClick}
                    hidden={hidden}
                >
                    {name}
                </button>
        </>
    );
}

export default Button;