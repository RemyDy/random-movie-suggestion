import styled from "./Button-Link.module.css"


export function Button({type, name}) {

    return (
        <button
            className={styled.button}
            type={type}
        > {name}
        </button>
    )
}