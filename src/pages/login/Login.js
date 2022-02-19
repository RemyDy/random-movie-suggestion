import React from 'react';
import Tile from "../../components/tiles/Tile"
import {useForm} from "reac"

// stap 2 maak logica voor inloggen met hardcode
// stap 3 zet validatieregels
// stap 4 zet deze in component
// stap 4 zet in context (maak context aan als dat nog niet bestaat)
// stap 5 maak logica dynamisch

// herhaal vanaf stap 3 voor signup


function Login() {
    return (
        <>
            <h1>inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eaque neque sed.</p>

            <form onSubmit="">
                <label htmlFor="username">
                    Username:
                    <input
                    type="username"
                    id="username-field"
                    {...register("username")}
                    />
                </label>

            </form>


            <Tile
                tile="isLogin"
            />

            <div className="home">
                <h2>Login</h2>
            </div>
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