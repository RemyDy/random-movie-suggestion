import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Link, Outlet, useNavigate} from "react-router-dom";
import styled from "./Registration.module.css"
import validations from "../../helpers/fetchdata/validations";
import {NoviBackend, requests} from "../../helpers/fetchdata/novi";
import {axiosCancelToken} from "../../helpers/fetchdata/cancelToken";
import logo_loading from "../../helpers/assets/Animatie loading.gif"
import Tile from "../../components/tile/Tile";
import InputField from "../../components/inputfields/InputField";

function Registration() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();
    const admin = process.env.REACT_APP_ADMIN_PASSWORD;
    const {register, handleSubmit, watch, setValue, formState: {errors}} = useForm(
        {
            defaultValues: {
                username: "",
                password: "",
            }
        });

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

    async function onSubmit(data) {
        toggleError(false);
        toggleLoading(true);

        try {
            console.log(data);

            // const result = await NoviBackend.get(requests.get.test.endpoint, {
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

                <section>
                    <label htmlFor="role-field">
                        <input id="role-field" value={["user"]} hidden="hidden" {...register("role")} />
                    </label>
                </section>

                <button type={"submit"} disabled={loading}>Registreer</button>
            </form>

            <section>
                <div hidden={loading === false}>
                    <p hidden={loading === false}>Loading... please wait...</p>
                    < img src={logo_loading} alt="logo-loading" width="75px"/>
                </div>
                {error &&
                    <p className={styled.error}>Account already exist, Press F5 to try again with a different e-mail
                        address, or go to <Link to="/login">Login</Link></p>}
            </section>

            <p hidden={error || loading}>Do you already have an account? Go to <Link to="/login">Login</Link></p>

            {/*<Tile />*/}

            {/*<Button*/}
            {/*    type={"submit"}*/}
            {/*    disabled={loading}*/}
            {/*    name="Register"*/}
            {/*/>*/}

            {/*<InputField*/}
            {/*    htmlFor="test-field"*/}
            {/*    type="username"*/}
            {/*    name="username"*/}
            {/*    register={register}*/}
            {/*    // ref={register("username", validations.username)}*/}
            {/*/>*/}

            <Outlet/>
        </>
    )
}

export default Registration;