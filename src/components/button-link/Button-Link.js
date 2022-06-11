import styles from "./Button-Link.module.css"


export function Button({type, name, onclick}) {

    return (
        <button
            className={styles.button}
            type={type}
            onClick={onclick}
        > {name}
        </button>
    )
}