import styled from "./Button-Link.module.css"


export function Button({type, name, onclick}) {

    return (
        <button
            className={styled.button}
            type={type}
            onClick={onclick}
        > {name}
        </button>
    )
}