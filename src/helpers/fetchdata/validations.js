const validations = {
    validate: {

    },
    username: {
        required: "Name is required",
        minLength: {
            value: 6,
            message: "Name must have at least 6 characters",
        }
    },
    email: {
        required: "E-mail is required",
        pattern: {
            value: /^[a-zA-Z0–9+_.-]+@[a-zA-Z0–9.-]+[.a-zA]$/g,
            message: "E-mail is not valid, @ is required, kindly correct s.v.p.",
        }
    },
    password: {
        required: "Password is required",
        minLength: {
            value: 6,
            message: "Password must have at least 6 characters",
                pattern: {
                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/g,
                    message: "Lowercase letter, Uppercase letter, number and a symbol ( ! @ # $ * ) is required"
            }
        }
    },
    role:{
        minLength: {
            value: 4,
            message: "Role must have at least 4 characters",
        }
    },

    person_or_movie: {
        pattern: {
            value: /(\w+)\s\+?(\+\w+)?/gm,
            message: "not valid, kindly add a + sign between the words",
        }
    }
};

export default validations;