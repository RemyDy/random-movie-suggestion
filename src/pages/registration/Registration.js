// noinspection JSCheckFunctionSignatures

import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Link, Outlet, useNavigate} from "react-router-dom";
import styled from "./Registration.module.css"
import validations from "../../helpers/fetchdata/validations";
import {NoviBackend, requests} from "../../helpers/fetchdata/novi";
import {axiosCancelToken} from "../../helpers/fetchdata/cancelToken";

function Registration() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [serverIsUp, toggleServerIsUp] = useState(true);
    const navigate = useNavigate();
    const admin = process.env.REACT_APP_ADMIN_PASSWORD;
    const {register, handleSubmit, watch, setValue, formState: {errors},} = useForm();

    const watchPassword = watch("password");
    useEffect(() => {
        if (watchPassword === admin) {
            return setValue("role", "admin")
        }
    }, [admin, watchPassword, setValue]);

    useEffect(() => {
        return function cleanup() {
            axiosCancelToken.cancel(
                "Request canceled!"
            );
        }
    }, []);

    async function testBackendAtFirstRender() {
        toggleServerIsUp(false);

        try {
            const result = await NoviBackend.get(requests.get.test.endpoint, {
                cancelToken: axiosCancelToken.token
            });
            console.log(result.status)
            if (result.status === 200) {
                toggleServerIsUp(true);
                console.log("result backend : " + result);
            }
        } catch (e) {
            console.error(e.response)
        }
    }

    async function onSubmit(data) {
        toggleError(false);
        toggleLoading(true);

        try {
            console.log(data);
            const result = await NoviBackend.post(requests.post.signup, {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    role: [
                        data.role
                    ],
                },
                {
                    cancelToken: axiosCancelToken.token
                }
            );
            console.log(result);
            if (result.status === 200) {
                navigate("/login")
            }
        } catch (e) {
            console.error(e.response);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <button onClick={testBackendAtFirstRender}>Make connection with BackEnd</button>
            <p hidden={serverIsUp === true} className={styled["server-down"]}>Making connection to server, a moment
                please</p>

            <h1>Register</h1>
            <form className={styled.form} onSubmit={handleSubmit(onSubmit)}>

                <section>
                    <label htmlFor="username-field">Username
                        <input id="username-field" type="text" {...register("username", validations.username)}/>
                    </label>
                    {errors?.username && errors?.username.message}
                </section>

                <section>
                    <label htmlFor="email-field">E-mail
                        <input id="email-field" type="email" {...register("email", validations.email)} />
                    </label>
                    {errors?.email && errors?.email.message}
                </section>

                <section>
                    <label htmlFor="password-field">Password
                        <input id="password-field" type="password" {...register("password", validations.password)} />

                    </label>
                    {errors?.password && errors?.password.message}
                </section>

                {error && <p className={styled.error}>Dit account bestaat al. Probeer een ander e-mailadres</p>}
                <section>
                    <label htmlFor="role-field">
                        <input id="role-field" value={["user"]} hidden="hidden" {...register("role")} />
                    </label>
                </section>

                <button type={"submit"} disabled={loading}>Registreer</button>
            </form>

            <p hidden={loading === false}>Loading..., making connection with server, please wait...</p>
            <p>Heb je al een account?s
                Je kunt je <Link to="/login">hier</Link> inloggen.
            </p>

            <Outlet/>
        </>
    )

}

export default Registration;