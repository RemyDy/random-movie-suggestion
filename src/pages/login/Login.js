import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import styled from "./Login.module.css"
import {AuthContext} from "../../context/Context";
import {Outlet, Link} from "react-router-dom";
import validations from "../../helpers/validations";
import {noviRequests} from "../../helpers/fetchdata/requests";
import {baseNovi} from "../../helpers/fetchdata/axios";

function Login() {
    const {login} = useContext(AuthContext);
    const {handleSubmit, formState: {errors}, register} = useForm();
    const [error, toggleError] = useState(false);

    async function onSubmit(data) {
        toggleError(false);

        try {
            const result = await baseNovi.post(noviRequests.post.signin, {
                username: data.username,
                password: data.password,
            });
            console.log(result);
            login();
        } catch (e) {
            console.error(e.response);
            toggleError(true);
        }
        console.log(data);
    }

    return (
        <>
            <h1>inloggen</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styled.form}
            >
                <section>
                    <label htmlFor="username-field">
                        Username
                        <input
                            type="text"
                            id="username-field"
                            {...register("username", validations.username)}
                        />
                    </label>
                    <p>{errors?.username && errors.username?.message}</p>
                </section>

                <section>
                    <label htmlFor="password-field">
                        Password
                        <input
                            type="password"
                            id="password-field"
                            {...register("password", validations.password)}
                        />
                    </label>
                    <p>{errors.password?.message}</p>
                </section>

                {error && <p>Combinatie van e-mailadres en wachtwoord is onjuist</p>}
                <button type="submit">login</button>

            </form>

            <p>Heb je nog geen account?
                <Link to="/registration"> Registreer</Link> je dan eerst.
            </p>

            <Outlet/>
        </>
    );
}

export default Login;

