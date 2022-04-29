import React from 'react';
import styled from "./Button.module.css"

function Button({name, type, onClick}) {

    return (
        <>
                <Button
                    className={styled.button}
                    type={type}
                    onClick={onClick}
                >
                    {name}
                </Button>
        </>
    );
}

export default Button;