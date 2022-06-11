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


// }

// function InputField({type, register, name, label, placeholder, value, hidden}) {
//     return (
//         <article className={styled.container}>
//             <label
//                 className={styled.label}
//                 htmlFor={label}/>
//             <input className={styled.input}
//                    type={type}
//                    id={label}
//                    value={value}
//                    placeholder={placeholder}
//                    hidden={hidden}
//                    {...register(name, validations.validate)}
//             />
//         </article>
//     )
// }

export default InputField;