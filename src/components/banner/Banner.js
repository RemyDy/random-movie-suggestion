import React from "react";
import styles from "./Banner.module.css"

function Banner({children}) {
    return (
        <article className={styles.banner}>
            {children}
        </article>
    )
}

export default Banner;