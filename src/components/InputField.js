
function InputField ({type, register, name, label}){
    return(
        <section>
            <label htmlFor={label}>{name}
                <input
                type={type}
                id={label}
                {...register(name)}
                />
            </label>
        </section>
    )
}

export default InputField;