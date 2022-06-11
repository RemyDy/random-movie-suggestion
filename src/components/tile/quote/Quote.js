import React from 'react';
import styles from "./Quote.module.css";

function Quote({children, line, movie, actor}) {
    return (
        <>
            <article className={styles.quote}>
                <h2 className={styles["quote__line"]}>{line}</h2>
                <h3 className={styles["quote__movie-title"]}>{movie}</h3>
                <h5 className={styles["quote__movie-actor"]}>{actor}</h5>
                {children}
            </article>
        </>
    );
}

export default Quote;