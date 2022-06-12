import styles from "./InputField.module.css"
import React from "react";

function InputField({register, name, value, hidden, validations, children, onchange}) {
    return (
        <article>
            <label
                htmlFor={`${name}-field`}/>
            <input className={styles.input}
                   type={name}
                   id={`${name}-field`}
                   value={value}
                   placeholder={`insert ${name}`}
                   hidden={hidden}
                   validations={validations}
                   onChange={onchange}
                   {...register(name, validations)}
            />
            {children}
        </article>
    )
}

export default InputField;