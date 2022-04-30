import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import styled from "./Login.module.css"
import {AuthContext} from "../../context/Context";
import {Outlet, Link} from "react-router-dom";
import {NoviBackend, requests} from "../../helpers/fetchdata/novi";
import {axiosCancelToken} from "../../helpers/fetchdata/cancelToken";
import logo_loading from "../../helpers/assets/Animatie loading.gif";
import Tile from "../../components/tile/Tile";
import InputField from "../../components/inputfields/InputField"
import {Button} from "../../components/button-link/Button-Link";

function Login() {
    const {login} = useContext(AuthContext);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {handleSubmit, register, formState: {errors}} = useForm();

    useEffect(() => {
        return function cleanup() {
            axiosCancelToken.cancel(
                "Request canceled!"
            );
        }
    }, []);

    async function onSubmit(data) {

        console.log(data);
        toggleError(false);
        toggleLoading(true);

        try {
            const result = await NoviBackend.post(requests.post.signin, {
                    username: data.username,
                    password: data.password,
                },
                {
                    cancelToken: axiosCancelToken.token
                });
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

            {/*<form*/}
            {/*    onSubmit={handleSubmit(onSubmit)}*/}
            {/*    className={styled.form}*/}
            {/*>*/}

            {/*    <section>*/}
            {/*        <label htmlFor="username-field">Username*/}
            {/*            <input type="text"*/}
            {/*                   id="username-field" {...register("username", validations.username)} />*/}
            {/*        </label>*/}
            {/*        <p>{errors?.username && errors.username?.message}</p>*/}
            {/*    </section>*/}

            {/*    <section>*/}
            {/*        <label htmlFor="password-field">Password*/}
            {/*            <input type="password"*/}
            {/*                   id="password-field" {...register("password", validations.password)} />*/}
            {/*        </label>*/}
            {/*        <p>{errors?.password && errors.password?.message}</p>*/}
            {/*    </section>*/}
            {/*    <button type="submit">login</button>*/}
            {/*</form>*/}

            <Tile
                className={styled.tile}
                title="Sign in"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        htmlFor="username-field"
                        id="username-field"
                        type="username"
                        name="username"
                        placeholder="Insert Username"
                        register={register}
                    />
                    <p>{errors?.username && errors.username?.message}</p>

                    <InputField
                        htmlFor="password-field"
                        id="password-field"
                        type="password"
                        name="password"
                        placeholder="Insert Password"
                        register={register}
                    />
                    <p>{errors?.password && errors.password?.message}</p>

                    <Button
                        type="submit"
                        name="submit"/>
                </form>
            </Tile>

            {/*<form>*/}
            {/*    <section>*/}
            {/*        <label htmlFor="username-field">Username*/}
            {/*            <input type="text"*/}
            {/*                   id="username-field" {...register("username", validations.username)} />*/}
            {/*        </label>*/}
            {/*        <p>{errors?.username && errors.username?.message}</p>*/}
            {/*    </section>*/}

            {/*    <section>*/}
            {/*        <label htmlFor="password-field">Password*/}
            {/*            <input type="password"*/}
            {/*                   id="password-field" {...register("password", validations.password)} />*/}
            {/*        </label>*/}
            {/*        <p>{errors?.password && errors.password?.message}</p>*/}
            {/*    </section>*/}
            {/*    <button type="submit">login</button>*/}
            {/*</form>*/}

            <section>
                <div hidden={loading === false}>
                    <p hidden={loading === false}>Loading... please wait...</p>
                    < img src={logo_loading} alt="logo-loading" width="75px"/>
                </div>
                {
                    error &&
                    <p> Invalid username and/or password. Press F5 and try again, or <Link
                        to="/registration">register</Link> first.</p>
                }
                <p hidden={error || loading}>Don't have an account yet ?<Link to="/registration"> Register</Link> first.
                </p>
            </section>

            <Outlet/>
        </>
    );
}

export default Login;

