import styled from "./InputField.module.css"
import validations from "../../helpers/fetchdata/validations";



function InputField({type, register, name, label, placeholder, value, hidden}) {
    return (
        <article className={styled.container}>
            <label
                className={styled.label}
                htmlFor={label}/>
            <input className={styled.input}
                   type={type}
                   id={label}
                   value={value}
                   placeholder={placeholder}
                   hidden={hidden}
                   {...register(name, validations.validate)}
            />
        </article>
    )
}

export default InputField;