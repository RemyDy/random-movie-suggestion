import styles from "./Form.module.css";
import React from "react";

function Form ({children, title}) {

    return (
        <>
            <article className={styles.tile}>
                    <p className={styles.title}
                        title={title}>
                        {title}
                    </p>

                    <div>
                        {children}
                    </div>
            </article>
        </>
    )
}

export default Form;