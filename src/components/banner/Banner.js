import React from "react";
import styled from "./Banner.module.css"

function Banner({children}) {
    return (
        <article className={styled.banner}>
            {children}
        </article>
    )
}

export default Banner;