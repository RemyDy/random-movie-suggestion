import styled from "./InputField.module.css"
import validations from "../../helpers/fetchdata/validations";



function InputField({type, register, name, label, placeholder}) {
    return (
        <article className={styled.container}>
            <label
                className={styled.label}
                htmlFor={label}/>
            <input className={styled.input}
                   type={type}
                   id={label}
                   placeholder={placeholder}
                   {...register(name, validations.username)}
            />
        </article>
    )
}

export default InputField;