import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import styled from "./Login.module.css"
import {AuthContext} from "../../context/Context";


// [x] stap 1 maak inputvelden voor login
// [x] stap 2 maak logica voor inloggen met hardcode
// [x] stap 3 zet validatieregels
// stap 4 zet deze in component
// stap 4 zet in context (maak context aan als dat nog niet bestaat)
// stap 5 maak logica dynamisch

// herhaal vanaf stap 3 voor signup

function Login() {
    const {login} = useContext(AuthContext);
    const {handleSubmit, formState: {errors}, register} = useForm();

    function onSubmit(data) {
        console.log(data);
        login();
    }

    return (
        <>
            <h1>inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eaque neque sed.</p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styled.login}
            >
                <fieldset>
                    <legend>Login</legend>

                    <label htmlFor="username-field">
                        Username:
                        <input
                            className={styled["login-username"]}
                            type="username"
                            id="username-field"
                            {...register("username", {
                                required: "Gebruikersnaam is verplicht, veld mag niet leeg zijn",
                                minLength: {
                                    value: 6,
                                    message: "Een minimum van 6 karakters is verplicht",
                                }
                            })}
                        />
                    </label>
                    {errors.username && <p>{errors.username.message}</p>}

                    <label htmlFor="password-field">
                        Password:
                        <input
                            className={styled["login-password"]}
                            type="password"
                            id="password-field"
                            {...register("password", {
                                required: "wachtwoord is verplicht, veld mag niet leeg zijn",
                                minLength: {
                                    value: 6,
                                    message: "Een minimum van 6 karakters is verplicht",
                                },
                            //     pattern: {
                            //         value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/g,
                            //         message: "Kleine letter, hoofdletter, nummer en speciale symbool ( ! @ # $ * ) is verplicht in het wachtwoord"
                            // }
                            })}
                        />
                    </label>
                    {errors.password && <p>{errors.password.message}</p>}
                    <button
                        type="submit"
                    >login
                    </button>
                </fieldset>
            </form>
        </>
    );
}

export default Login;


// stap 1 maak inputvelden voor login
// "username": "piet",
//     "email" : "piet@novi.nl",
//     "password" : "123456",
//     "role": ["user"]
// Let hierbij op de volgende vereisten:
//
//     Het emailadres moet daadwerkelijk een @ bevatten
// Het wachtwoord en gebruikersnaam moeten minimaal 6 tekens bevatten
// Wanneer je een gebruiker probeert te registreren met een username die al bestaat, krijg je een foutcode.
// De details over deze foutmelding vindt je in e.response.

// optionele velden
// Het is toegestaan om een string mee te sturen onder de info-key, zodat je hier additionele informatie over de gebruiker in kunt opslaan:
// {
//    "username": "piet",
//    "email" : "piet@novi.nl",
//    "password" : "123456",
//    "info": "Ik woon in Utrecht",
//    "role": ["user"]

// rollen
// Wanneer je een gebruiker met admin-rol wil aanmaken, verander je de rol als volgt: "role": ["admin"]. Het is ook mogelijk een gebruiker aan te maken met twee rollen:
//
// {
//     "role": ["user", "admin"]
// }

// 2. Inloggen
// POST /api/auth/signin
//
// Het inloggen van een bestaande gebruiker kan alleen als deze al geregistreerd is. Inloggen vereist de volgende informatie:
//
// {
//     "username": "user",
//     "password" : "123456",
// }
// De response bevat een authorisatie-token (JWT) en alle gebruikersinformatie. Onderstaand voorbeeld laat de repsonse zien na het inloggen van een gebruiker met een admin-rol:
//
// {
//     "id": 6,
//     "username": "mod3",
//     "email": "mod3@novi.nl",
//     "roles": [
//     "ROLE_USER",
//     "ROLE_MODERATOR"
// ],
//     "accessToken": "eyJhJIUzUxMiJ9.eyJzdWICJleQ0OTR9.AgP4vCsgw5TMj_AQAS-J8doHqADTA",
//     "tokenType": "Bearer"
// }
