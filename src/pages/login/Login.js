import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import styled from "./Login.module.css"
import {AuthContext} from "../../context/Context";
import {Outlet, Link} from "react-router-dom";
import validations from "../../helpers/fetchdata/validations";
import {NoviBackend, requests} from "../../helpers/fetchdata/novi";
import {axiosCancelToken} from "../../helpers/fetchdata/cancelToken";

function Login() {

    const {login} = useContext(AuthContext);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [firstRender, toggleFirstRender] = useState(false);
    const {handleSubmit, register, formState: {errors}} = useForm(
    //     {
    //     defaultValues: {
    //         username: "testtest",
    //         password: "Test12345",
    //     }
    // }
    );

    if (firstRender === false) {
        console.log(firstRender)
        toggleFirstRender(true);
    }

    useEffect(() => {
        return function cleanup() {
            axiosCancelToken.cancel(
                "Request canceled!"
            );
        }
    }, []);

    async function onSubmit(data) {
        toggleError(false);
        toggleLoading(true);

        try {
            console.log(data);

            const result = await NoviBackend.post(requests.post.signin, {
                username: data.username,
                password: data.password,
            }, {
                cancelToken: axiosCancelToken.token
            });
            console.log(result);
            if (result.status === 200) {
                login(result.data?.accessToken)
            }

        } catch (e) {
            console.error(e.response);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <h1>inloggen</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styled.form}
            >
                <section>
                    <label htmlFor="username-field">Username
                        <input type="text"
                               id="username-field" {...register("username", validations.username)} />
                    </label>
                    <p>{errors?.username && errors.username?.message}</p>
                </section>

                <section>
                    <label htmlFor="password-field">Password
                        <input type="password"
                               id="password-field" {...register("password", validations.password)} />
                    </label>
                    <p>{errors?.password && errors.password?.message}</p>
                </section>

                <p hidden={loading === false}>Loading... please wait</p>
                {error && <p>Reactie van server: combinatie van gebruikersnaam en wachtwoord is onjuist</p>}
                <button type="submit">login</button>
            </form>

            <p>Heb je nog geen account? <Link to="/registration"> Registreer</Link> je dan eerst.</p>

            <Outlet/>
        </>
    );
}

export default Login;

